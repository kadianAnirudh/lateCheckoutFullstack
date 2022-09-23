
import { createClient } from '@supabase/supabase-js'

const URL = 'https://atrsiydfiegvtdmimgor.supabase.co';
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0cnNpeWRmaWVndnRkbWltZ29yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4NDc5MDgsImV4cCI6MTk3OTQyMzkwOH0.4T-QGHreT4PeIlHIs3PXKXangbAN9BntQB8aVTHqh98';

const supabaseUrl = URL;
const supabaseKey = KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;



