import { SupabaseClient } from '@supabase/supabase-js';
import { MetricSummary, MetricByAutomation } from './metrics.types';

export class MetricsRepository {
  constructor(private readonly supabase: SupabaseClient) {}

  async getSummary(userId: string): Promise<MetricSummary> {
    const { data, error } = await this.supabase
      .from('metrics')
      .select(`
        time_saved_minutes,
        estimated_value_usd,
        automations!inner(deleted_at)
      `)
      .eq('user_id', userId)
      .is('automations.deleted_at', null);

    if (error) throw new Error(`DB Error: ${error.message}`);

    return data.reduce((acc, row) => ({
      totalTimeSavedMinutes: acc.totalTimeSavedMinutes + Number(row.time_saved_minutes),
      totalEstimatedValueUsd: acc.totalEstimatedValueUsd + Number(row.estimated_value_usd),
      totalRuns: acc.totalRuns + 1,
    }), { totalTimeSavedMinutes: 0, totalEstimatedValueUsd: 0, totalRuns: 0 });
  }

  async getByAutomation(userId: string): Promise<MetricByAutomation[]> {
    const { data, error } = await this.supabase
      .from('automations')
      .select(`
        id,
        name,
        metrics ( time_saved_minutes, estimated_value_usd )
      `)
      .eq('user_id', userId)
      .is('deleted_at', null);

    if (error) throw new Error(`DB Error: ${error.message}`);

    return data.map((automation: any) => {
      const metrics = automation.metrics || [];
      return metrics.reduce((acc: any, m: any) => ({
        ...acc,
        runs: acc.runs + 1,
        timeSavedMinutes: acc.timeSavedMinutes + Number(m.time_saved_minutes),
        estimatedValueUsd: acc.estimatedValueUsd + Number(m.estimated_value_usd),
      }), {
        automationId: automation.id,
        automationName: automation.name,
        runs: 0,
        timeSavedMinutes: 0,
        estimatedValueUsd: 0,
      });
    });
  }
}
