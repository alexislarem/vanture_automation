import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { getServerConfig } from '../config.server';

export function createClient() {
  const config = getServerConfig();
  return createSupabaseClient(config.supabaseUrl, config.supabaseAnonKey);
}
