import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getCurrentUser, requireAuth } from '@/lib/phase1-mocks';
import { MetricsRepository } from '@/modules/metrics/metrics.repository';
import { MetricsService } from '@/modules/metrics/metrics.service';

export async function GET(req: Request) {
  try {
    await requireAuth(req);
    const user = await getCurrentUser(req);
    const service = new MetricsService(new MetricsRepository(createClient()));
    
    return NextResponse.json(await service.getMetricsByAutomation(user.id));
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
