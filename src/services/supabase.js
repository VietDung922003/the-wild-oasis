import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ihtjfqekiboizhrpjmel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlodGpmcWVraWJvaXpocnBqbWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDQ3NTQsImV4cCI6MjA1NTg4MDc1NH0.BfMhZGGl-iAb0xyOeWERJId9hrK3v3uN8lO5NlwaOTE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
