'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { supabase } from '../../utils/apiClient'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const { error } = await supabase.from('contacts').insert([{ name, email, message }])
    if (error) setError(error.message)
    else setSent(true)
  }
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-lg">
        <h1 className="text-2xl font-bold mb-6">お問い合わせ</h1>
        {sent ? (
          <div className="p-4 bg-green-100 text-green-700 rounded">送信が完了しました。ありがとうございます！</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full border p-2 rounded" value={name} onChange={e => setName(e.target.value)} placeholder="お名前" required />
            <input className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="メール" type="email" required />
            <textarea className="w-full border p-2 rounded" value={message} onChange={e => setMessage(e.target.value)} placeholder="お問い合わせ内容" required />
            <button className="button-primary w-full" type="submit">送信</button>
            {error && <div className="text-red-600 text-sm">{error}</div>}
          </form>
        )}
      </main>
      <Footer />
    </>
  )
}