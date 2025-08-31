import { useState } from 'react'
import { applyJob } from '../utils/apiClient'

export default function JobApplyForm({ jobId }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await applyJob({ jobId, name, email, message })
      setSent(true)
    } catch {
      setError('送信に失敗しました')
    }
    setLoading(false)
  }

  if (sent) return <div className="p-4 text-green-700">応募を受け付けました。</div>

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full border p-2 rounded" value={name} onChange={e => setName(e.target.value)} placeholder="お名前" required />
      <input className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="メール" required />
      <textarea className="w-full border p-2 rounded" value={message} onChange={e => setMessage(e.target.value)} placeholder="志望動機" rows={4} required />
      <button disabled={loading} className="button-primary w-full mt-2" type="submit">応募する</button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  )
}