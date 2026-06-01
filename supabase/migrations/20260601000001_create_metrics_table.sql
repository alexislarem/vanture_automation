CREATE TABLE metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  automation_id UUID NOT NULL REFERENCES automations(id) ON DELETE CASCADE,
  time_saved_minutes NUMERIC NOT NULL,
  estimated_value_usd NUMERIC NOT NULL,
  recorded_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own metrics" 
ON metrics FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own metrics" 
ON metrics FOR INSERT WITH CHECK (auth.uid() = user_id);
