'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import { supabase } from '../../utils/apiClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push('/')
  }
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-6">ログイン</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="メールアドレス" type="email" required />
          <input className="w-full border p-2 rounded" value={password} onChange={e => setPassword(e.target.value)} placeholder="パスワード" type="password" required />
          <button type="submit" className="button-primary w-full">ログイン</button>
          {error && <div className="text-red-600 text-sm">{error}</div>}
        </form>
      </main>
      <Footer />
    </>
  )
}