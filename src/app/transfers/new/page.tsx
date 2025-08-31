'use client'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../../utils/apiClient'

export default function NewTransferPage() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [department, setDepartment] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault()
    await supabase.from('transfers').insert([
      { title, summary, department, location, price, status: 'draft', created_at: new Date().toISOString() }
    ])
    router.push('/admin/transfers')
  }
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">新規クリニック譲渡案件</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2 rounded" value={title} onChange={e => setTitle(e.target.value)} placeholder="案件名" required />
          <textarea className="w-full border p-2 rounded" value={summary} onChange={e => setSummary(e.target.value)} placeholder="案件概要" rows={3} required />
          <input className="w-full border p-2 rounded" value={department} onChange={e => setDepartment(e.target.value)} placeholder="診療科目" required />
          <input className="w-full border p-2 rounded" value={location} onChange={e => setLocation(e.target.value)} placeholder="所在地" required />
          <input className="w-full border p-2 rounded" value={price} onChange={e => setPrice(e.target.value)} placeholder="譲渡価格" required />
          <button className="button-primary" type="submit">保存</button>
        </form>
      </main>
      <Footer />
    </>
  )
}