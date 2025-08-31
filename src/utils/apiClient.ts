import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!
export const supabase = createClient(supabaseUrl, supabaseKey)

// 記事
export async function getFeaturedArticles() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'public')
    .order('created_at', { ascending: false })
    .limit(6)
  if (error) throw error
  return data
}
export async function getArticleById(id: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}
export async function createArticle(article) {
  const { data, error } = await supabase.from('articles').insert([article])
  if (error) throw error
  return data
}
export async function updateArticle(id: string, article) {
  const { data, error } = await supabase.from('articles').update(article).eq('id', id)
  if (error) throw error
  return data
}
export async function deleteArticle(id: string) {
  const { error } = await supabase.from('articles').delete().eq('id', id)
  if (error) throw error
}

// 求人
export async function getFeaturedJobs() {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'public')
    .order('created_at', { ascending: false })
    .limit(4)
  if (error) throw error
  return data
}
export async function getJobById(id: string) {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}
export async function applyJob({ jobId, name, email, message }) {
  const { error } = await supabase.from('job_applications').insert([{ job_id: jobId, name, email, message }])
  if (error) throw error
}
// 譲渡
export async function getFeaturedTransfers() {
  const { data, error } = await supabase
    .from('transfers')
    .select('*')
    .eq('status', 'public')
    .order('created_at', { ascending: false })
    .limit(4)
  if (error) throw error
  return data
}
export async function getTransferById(id: string) {
  const { data, error } = await supabase
    .from('transfers')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}
export async function applyTransfer({ transferId, name, email, message }) {
  const { error } = await supabase.from('transfer_applications').insert([{ transfer_id: transferId, name, email, message }])
  if (error) throw error
}