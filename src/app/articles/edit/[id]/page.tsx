'use client'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import ArticleEditor from '../../../../components/ArticleEditor'
import { getArticleById, updateArticle } from '../../../../utils/apiClient'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditArticlePage({ params }) {
  const [article, setArticle] = useState(null)
  const router = useRouter()
  useEffect(() => {
    getArticleById(params.id).then(setArticle)
  }, [params.id])
  async function handleSubmit(updated) {
    await updateArticle(params.id, updated)
    router.push('/admin/articles')
  }
  if (!article) return <div>Loading...</div>
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">記事編集</h1>
        <ArticleEditor article={article} onSubmit={handleSubmit} />
      </main>
      <Footer />
    </>
  )
}