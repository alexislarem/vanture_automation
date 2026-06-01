import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getCurrentUser, requireAuth } from '@/lib/phase1-mocks';
import { AutomationsRepository } from '@/modules/automations/automations.repository';
import { AutomationsService } from '@/modules/automations/automations.service';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    await requireAuth(req);
    const user = await getCurrentUser(req);
    const service = new AutomationsService(new AutomationsRepository(createClient()));
    
    return NextResponse.json(await service.triggerAutomation(params.id, user.id));
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
