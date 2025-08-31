import { useState } from 'react'
import { applyTransfer } from '../utils/apiClient'

export default function TransferApplyForm({ transferId }) {
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
      await applyTransfer({ transferId, name, email, message })
      setSent(true)
    } catch {
      setError('送信に失敗しました')
    }
    setLoading(false)
  }

  if (sent) return <div className="p-4 text-green-700">申し込みを受け付けました。</div>

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full border p-2 rounded" value={name} onChange={e => setName(e.target.value)} placeholder="お名前" required />
      <input className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="メール" required />
      <textarea className="w-full border p-2 rounded" value={message} onChange={e => setMessage(e.target.value)} placeholder="希望・質問等" rows={4} required />
      <button disabled={loading} className="button-primary w-full mt-2" type="submit">申し込む</button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  )
}