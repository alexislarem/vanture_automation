export type AutomationStatus = 'active' | 'paused' | 'draft';
export type TriggerType = 'webhook' | 'schedule' | 'manual';

export interface Automation {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  status: AutomationStatus;
  triggerType: TriggerType;
  n8nWorkflowId: string | null;
  lastRunAt: string | null;
  runCount: number;
  createdAt: string;
  deletedAt: string | null;
}

export interface CreateAutomationDTO {
  name: string;
  description?: string;
  status?: AutomationStatus;
  triggerType?: TriggerType;
  n8nWorkflowId?: string;
}

export interface UpdateAutomationDTO extends Partial<CreateAutomationDTO> {}
