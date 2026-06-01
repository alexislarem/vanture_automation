import { z } from 'zod';

export const createAutomationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().max(500).optional(),
  status: z.enum(['active', 'paused', 'draft']).optional(),
  triggerType: z.enum(['webhook', 'schedule', 'manual']).optional(),
  n8nWorkflowId: z.string().optional(),
});

export const updateAutomationSchema = createAutomationSchema.partial();
