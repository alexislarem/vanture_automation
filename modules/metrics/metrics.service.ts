import { MetricsRepository } from './metrics.repository';
import { MetricSummary, MetricByAutomation } from './metrics.types';

export class MetricsService {
  constructor(private readonly repository: MetricsRepository) {}

  async getMetricsSummary(userId: string): Promise<MetricSummary> {
    return this.repository.getSummary(userId);
  }

  async getMetricsByAutomation(userId: string): Promise<MetricByAutomation[]> {
    return this.repository.getByAutomation(userId);
  }
}
