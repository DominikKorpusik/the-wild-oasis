import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wwxdhtvkuyzejsqrjuux.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3eGRodHZrdXl6ZWpzcXJqdXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyODYwOTcsImV4cCI6MjAyNjg2MjA5N30.VyJS5oxm5CMpr36wfbBgzNMGjqeoMAi7a3S4U4nAjcY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
