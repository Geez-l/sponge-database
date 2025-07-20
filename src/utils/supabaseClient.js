import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://frckjzkmelttjzkabepe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyY2tqemttZWx0dGp6a2FiZXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NDU0NDgsImV4cCI6MjA2ODQyMTQ0OH0.TUSjq0v-kL4CVhwAVP-WXQUsx9v6g84KZZB-y9veI58';
export const supabase = createClient(supabaseUrl, supabaseKey);