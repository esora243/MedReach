import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getArticleById } from '../../../utils/apiClient'

export default async function ArticleDetailPage({ params }) {
  const article = await getArticleById(params.id)
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600 mb-2">{article.summary}</p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />
        <div className="mt-8 text-sm text-gray-400">
          著者: {article.author} | 投稿日: {new Date(article.created_at).toLocaleDateString()}
        </div>
      </main>
      <Footer />
    </>
  )
}