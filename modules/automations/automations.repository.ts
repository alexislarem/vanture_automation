import { SupabaseClient } from '@supabase/supabase-js';
import { Automation, CreateAutomationDTO, UpdateAutomationDTO } from './automations.types';

export class AutomationsRepository {
  constructor(private readonly supabase: SupabaseClient) {}

  async countActiveByUserId(userId: string): Promise<number> {
    const { count, error } = await this.supabase
      .from('automations')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .is('deleted_at', null);
    if (error) throw new Error(`DB Error: ${error.message}`);
    return count || 0;
  }

  async findByUserId(userId: string): Promise<Automation[]> {
    const { data, error } = await this.supabase
      .from('automations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) throw new Error(`DB Error: ${error.message}`);
    return data.map(this.mapToEntity);
  }

  async findById(id: string, userId: string): Promise<Automation | null> {
    const { data, error } = await this.supabase
      .from('automations')
      .select('*')
      .eq('id', id)
      .eq('user_id', userId)
      .single();
    if (error && error.code !== 'PGRST116') throw new Error(`DB Error: ${error.message}`);
    return data ? this.mapToEntity(data) : null;
  }

  async create(userId: string, data: CreateAutomationDTO): Promise<Automation> {
    const { data: created, error } = await this.supabase
      .from('automations')
      .insert({
        user_id: userId,
        name: data.name,
        description: data.description,
        status: data.status || 'draft',
        trigger_type: data.triggerType || 'manual',
        n8n_workflow_id: data.n8nWorkflowId,
      })
      .select().single();
    if (error) throw new Error(`DB Error: ${error.message}`);
    return this.mapToEntity(created);
  }

  async update(id: string, userId: string, data: UpdateAutomationDTO): Promise<Automation> {
    const { data: updated, error } = await this.supabase
      .from('automations')
      .update({
        name: data.name,
        description: data.description,
        status: data.status,
        trigger_type: data.triggerType,
        n8n_workflow_id: data.n8nWorkflowId,
      })
      .eq('id', id)
      .eq('user_id', userId)
      .select().single();
    if (error) throw new Error(`DB Error: ${error.message}`);
    return this.mapToEntity(updated);
  }

  async softDelete(id: string, userId: string): Promise<void> {
    const { error } = await this.supabase
      .from('automations')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)
      .eq('user_id', userId);
    if (error) throw new Error(`DB Error: ${error.message}`);
  }

  async incrementRunCount(id: string, userId: string): Promise<void> {
    const current = await this.findById(id, userId);
    if (!current) throw new Error('Automation not found');
    const { error } = await this.supabase
      .from('automations')
      .update({ run_count: current.runCount + 1, last_run_at: new Date().toISOString() })
      .eq('id', id)
      .eq('user_id', userId);
    if (error) throw new Error(`DB Error: ${error.message}`);
  }

  private mapToEntity(row: any): Automation {
    return {
      id: row.id,
      userId: row.user_id,
      name: row.name,
      description: row.description,
      status: row.status,
      triggerType: row.trigger_type,
      n8nWorkflowId: row.n8n_workflow_id,
      lastRunAt: row.last_run_at,
      runCount: row.run_count,
      createdAt: row.created_at,
      deletedAt: row.deleted_at,
    };
  }
}
