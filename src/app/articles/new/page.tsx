'use client'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import ArticleEditor from '../../../components/ArticleEditor'
import { createArticle } from '../../../utils/apiClient'
import { useRouter } from 'next/navigation'

export default function NewArticlePage() {
  const router = useRouter()
  async function handleSubmit(article) {
    await createArticle({ ...article, status: 'draft', created_at: new Date().toISOString() })
    router.push('/admin/articles')
  }
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">新規記事投稿</h1>
        <ArticleEditor onSubmit={handleSubmit} />
      </main>
      <Footer />
    </>
  )
}