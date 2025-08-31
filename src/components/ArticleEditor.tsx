import { useState } from 'react'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function ArticleEditor({ article = {}, onSubmit }) {
  const [title, setTitle] = useState(article.title || '')
  const [body, setBody] = useState(article.body || '')
  const [tags, setTags] = useState(article.tags ? article.tags.join(',') : '')
  const [summary, setSummary] = useState(article.summary || '')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({
      ...article,
      title, body, summary,
      tags: tags.split(',').map(s => s.trim()).filter(Boolean)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full border p-2 rounded" value={title} onChange={e => setTitle(e.target.value)} placeholder="記事タイトル" required />
      <input className="w-full border p-2 rounded" value={summary} onChange={e => setSummary(e.target.value)} placeholder="概要" required />
      <input className="w-full border p-2 rounded" value={tags} onChange={e => setTags(e.target.value)} placeholder="タグ(カンマ区切り)" />
      <div>
        <label className="block mb-1 font-semibold">本文</label>
        <ReactQuill value={body} onChange={setBody} className="bg-white" />
      </div>
      <button className="button-primary" type="submit">保存</button>
    </form>
  )
}