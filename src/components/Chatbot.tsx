import { useState } from 'react'

const quickReplies = [
  "求人情報について",
  "クリニック譲渡について",
  "企業情報について",
  "ブログ記事について",
  "パスワードを忘れた"
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: 'こんにちは！ご質問があれば、以下から選択いただくか、入力してください。' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSend(text: string) {
    if (!text) return
    setMessages(msgs => [...msgs, { role: 'user', text }])
    setInput('')
    setLoading(true)
    // 仮のbotロジック
    setTimeout(() => {
      setMessages(msgs => [...msgs, { role: 'bot', text: `「${text}」についての詳細なサポートを用意しています。管理者またはお問い合わせをご利用ください。` }])
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <div
        id="chatbot-toggle-btn"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-400 to-blue-700 text-white w-14 h-14 rounded-full flex justify-center items-center shadow-lg z-50 cursor-pointer"
        onClick={() => setOpen(o => !o)}
        aria-label="チャットボットを開く"
      >
        <svg width="28" height="28" fill="currentColor"><circle cx="14" cy="14" r="12" /></svg>
      </div>
      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[98vw] bg-white border rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-t-2xl">
            <span className="font-bold">MedReachサポート</span>
            <button className="text-white text-2xl" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto h-72">
            {messages.map((m, i) =>
              <div key={i} className={`mb-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-xl px-3 py-2 ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}>{m.text}</div>
              </div>
            )}
            {loading && <div className="text-gray-400 text-sm">・・・応答中・・・</div>}
          </div>
          <div className="p-4 border-t flex gap-2 flex-wrap">
            {quickReplies.map(q =>
              <button key={q} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs hover:bg-blue-200"
                onClick={() => handleSend(q)}>{q}</button>
            )}
          </div>
          <form className="flex gap-2 p-4 border-t" onSubmit={e => { e.preventDefault(); handleSend(input) }}>
            <input className="flex-1 border rounded px-2 py-1" value={input} onChange={e => setInput(e.target.value)} placeholder="質問を入力..." />
            <button type="submit" className="button-primary px-4 py-1">送信</button>
          </form>
        </div>
      )}
    </>
  )
}