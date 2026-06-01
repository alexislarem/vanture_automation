import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getCurrentUser, requireAuth } from '@/lib/phase1-mocks';
import { AutomationsRepository } from '@/modules/automations/automations.repository';
import { AutomationsService } from '@/modules/automations/automations.service';
import { createAutomationSchema } from '@/lib/validations/automations';

export async function GET(req: Request) {
  try {
    await requireAuth(req);
    const user = await getCurrentUser(req);
    const service = new AutomationsService(new AutomationsRepository(createClient()));
    
    return NextResponse.json(await service.listUserAutomations(user.id));
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.message.includes('Auth') ? 401 : 500 });
  }
}

export async function POST(req: Request) {
  try {
    await requireAuth(req);
    const user = await getCurrentUser(req);
    const body = createAutomationSchema.parse(await req.json());
    
    const service = new AutomationsService(new AutomationsRepository(createClient()));
    return NextResponse.json(await service.createAutomation(user.id, body), { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.name === 'ZodError' ? 400 : 500 });
  }
}
