-- supabase/migrations/20260601000000_create_automations_table.sql
CREATE TYPE automation_status AS ENUM ('active', 'paused', 'draft');
CREATE TYPE trigger_type AS ENUM ('webhook', 'schedule', 'manual');

CREATE TABLE automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status automation_status DEFAULT 'draft' NOT NULL,
  trigger_type trigger_type DEFAULT 'manual' NOT NULL,
  n8n_workflow_id TEXT,
  last_run_at TIMESTAMPTZ,
  run_count INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  deleted_at TIMESTAMPTZ
);

ALTER TABLE automations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can only select their own non-deleted automations" 
ON automations FOR SELECT USING (auth.uid() = user_id AND deleted_at IS NULL);

CREATE POLICY "Users can insert their own automations" 
ON automations FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own automations" 
ON automations FOR UPDATE USING (auth.uid() = user_id);
