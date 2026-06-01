export interface Metric {
  id: string;
  userId: string;
  automationId: string;
  timeSavedMinutes: number;
  estimatedValueUsd: number;
  recordedAt: string;
}

export interface MetricSummary {
  totalTimeSavedMinutes: number;
  totalEstimatedValueUsd: number;
  totalRuns: number;
}

export interface MetricByAutomation {
  automationId: string;
  automationName: string;
  runs: number;
  timeSavedMinutes: number;
  estimatedValueUsd: number;
}
