'use client'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../utils/apiClient'

export default function NewJobPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [salary, setSalary] = useState('')
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault()
    await supabase.from('jobs').insert([{ title, description, location, salary, status: 'draft', created_at: new Date().toISOString() }])
    router.push('/admin/jobs')
  }
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">新規求人投稿</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2 rounded" value={title} onChange={e => setTitle(e.target.value)} placeholder="求人タイトル" required />
          <textarea className="w-full border p-2 rounded" value={description} onChange={e => setDescription(e.target.value)} placeholder="仕事内容" rows={4} required />
          <input className="w-full border p-2 rounded" value={location} onChange={e => setLocation(e.target.value)} placeholder="勤務地" required />
          <input className="w-full border p-2 rounded" value={salary} onChange={e => setSalary(e.target.value)} placeholder="年収" required />
          <button className="button-primary" type="submit">保存</button>
        </form>
      </main>
      <Footer />
    </>
  )
}