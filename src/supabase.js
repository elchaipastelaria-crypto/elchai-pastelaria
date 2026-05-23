import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://kqvsaoqoryxsclwsollw.supabase.co'
const SUPABASE_KEY = 'sb_publishable_NnlOqRknFtFWYbnOqaAaAw_YFH_ag7R'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)