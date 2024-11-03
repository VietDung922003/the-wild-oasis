import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://taxaysazolbymdmwwwdb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRheGF5c2F6b2xieW1kbXd3d2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MTU4NTQsImV4cCI6MjA0NTE5MTg1NH0.oaMNG_FdgJOvElvfXaRzz_s1aa5Qxm4xcU_u02r_tuU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
