-- Create a function to atomically increment the run count of an automation and set last_run_at
CREATE OR REPLACE FUNCTION public.increment_automation_run_count(automation_id UUID, user_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.automations
  SET run_count = run_count + 1, last_run_at = NOW()
  WHERE id = automation_id AND user_id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
