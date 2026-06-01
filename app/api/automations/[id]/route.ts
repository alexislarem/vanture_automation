import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getCurrentUser, requireAuth } from '@/lib/phase1-mocks';
import { AutomationsRepository } from '@/modules/automations/automations.repository';
import { AutomationsService } from '@/modules/automations/automations.service';
import { updateAutomationSchema } from '@/lib/validations/automations';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    await requireAuth(req);
    const user = await getCurrentUser(req);
    const body = updateAutomationSchema.parse(await req.json());
    
    const service = new AutomationsService(new AutomationsRepository(createClient()));
    return NextResponse.json(await service.updateAutomation(params.id, user.id, body));
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: err.name === 'ZodError' ? 400 : 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await requireAuth(req);
    const user = await getCurrentUser(req);
    const service = new AutomationsService(new AutomationsRepository(createClient()));
    
    await service.deleteAutomation(params.id, user.id);
    return new NextResponse(null, { status: 204 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
