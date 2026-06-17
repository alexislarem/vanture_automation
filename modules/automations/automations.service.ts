import { AutomationsRepository } from './automations.repository';
import { CreateAutomationDTO, UpdateAutomationDTO, Automation } from './automations.types';
import { getUserPlan } from '../../src/lib/phase1-mocks';
import { getServerConfig } from '../../src/lib/config.server';

export class AutomationsService {
  constructor(private readonly repository: AutomationsRepository) {}

  async listUserAutomations(userId: string): Promise<Automation[]> {
    return this.repository.findByUserId(userId);
  }

  async createAutomation(userId: string, data: CreateAutomationDTO): Promise<Automation> {
    const plan = await getUserPlan(userId);
    const limit = plan === 'free' ? 3 : plan === 'pro' ? 25 : Infinity;
    
    if (limit !== Infinity) {
      const currentCount = await this.repository.countActiveByUserId(userId);
      if (currentCount >= limit) {
        throw new Error(`Plan limit reached. Your ${plan} plan allows up to ${limit} automations.`);
      }
    }

    return this.repository.create(userId, data);
  }

  async updateAutomation(id: string, userId: string, data: UpdateAutomationDTO): Promise<Automation> {
    return this.repository.update(id, userId, data);
  }

  async deleteAutomation(id: string, userId: string): Promise<void> {
    await this.repository.softDelete(id, userId);
  }

  async triggerAutomation(id: string, userId: string): Promise<{ success: boolean; message: string }> {
    const automation = await this.repository.findById(id, userId);
    if (!automation) throw new Error('Automation not found');
    if (automation.status !== 'active') throw new Error('Only active automations can be triggered');
    if (!automation.n8nWorkflowId) throw new Error('No n8n workflow associated');

    try {
      const config = getServerConfig();
      if (!config.n8nWebhookUrl) {
        throw new Error('N8N_WEBHOOK_URL is not configured');
      }
      const response = await fetch(`${config.n8nWebhookUrl}/${automation.n8nWorkflowId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, automationId: id }),
      });
      
      if (!response.ok) throw new Error('Webhook failed');
      
      await this.repository.incrementRunCount(id, userId);
      return { success: true, message: 'Automation triggered successfully' };
    } catch (error: any) {
      throw new Error(`Failed to trigger workflow: ${error.message}`);
    }
  }
}
