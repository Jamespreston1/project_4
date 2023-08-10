import { createClient }  from "@supabase/supabase-js";

const supabaseUrl = "https://mzexdmuplegatooaxsyb.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZXhkbXVwbGVnYXRvb2F4c3liIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NTY5MjYsImV4cCI6MjAwNzIzMjkyNn0.2K836AIf_WIUnm81sjCxa2N9AcfCoEqhD1UVODGvh-E";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);