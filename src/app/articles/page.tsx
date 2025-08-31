import ArticleCard from '../../components/ArticleCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { getFeaturedArticles } from '../../utils/apiClient'

export default async function ArticleListPage() {
  const articles = await getFeaturedArticles()
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="section-title">ドクターズブログ一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}