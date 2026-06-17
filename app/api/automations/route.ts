import { json } from '@tanstack/react-start';
import { createAPIFileRoute } from '@tanstack/react-start/api';
import { createClient } from '@/lib/supabase/server';
import { getCurrentUser, requireAuth } from '@/lib/phase1-mocks';
import { AutomationsRepository } from '@/modules/automations/automations.repository';
import { AutomationsService } from '@/modules/automations/automations.service';
import { createAutomationSchema } from '@/lib/validations/automations';

export const APIRoute = createAPIFileRoute('/api/automations')({
  GET: async ({ request }) => {
    try {
      await requireAuth(request);
      const user = await getCurrentUser(request);
      const service = new AutomationsService(new AutomationsRepository(createClient()));
      
      const automations = await service.listUserAutomations(user.id);
      return json(automations);
    } catch (err: any) {
      return json({ error: err.message }, { status: err.message.includes('Auth') ? 401 : 500 });
    }
  },
  POST: async ({ request }) => {
    try {
      await requireAuth(request);
      const user = await getCurrentUser(request);
      const body = createAutomationSchema.parse(await request.json());
      
      const service = new AutomationsService(new AutomationsRepository(createClient()));
      const automation = await service.createAutomation(user.id, body);
      return json(automation, { status: 201 });
    } catch (err: any) {
      return json({ error: err.message }, { status: err.name === 'ZodError' ? 400 : 500 });
    }
  }
});
