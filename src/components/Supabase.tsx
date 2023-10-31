import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mlgvcauqgfpnscawomzo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZ3ZjYXVxZ2ZwbnNjYXdvbXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NzQ2MzIsImV4cCI6MjAxNDI1MDYzMn0.kFsiuve45hY-RhOkDN4mbb8ada4j1khTqtrNkjq2t6U";
const Supabase = createClient(supabaseUrl, supabaseKey);

export default Supabase;
