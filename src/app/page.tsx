import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import JobCard from '../components/JobCard'
import TransferCard from '../components/TransferCard'
import Chatbot from '../components/Chatbot'
import { getFeaturedArticles, getFeaturedJobs, getFeaturedTransfers } from '../utils/apiClient'

export default async function HomePage() {
  const articles = await getFeaturedArticles()
  const jobs = await getFeaturedJobs()
  const transfers = await getFeaturedTransfers()

  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">新着記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">求人情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map(j => <JobCard key={j.id} job={j} />)}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">クリニック譲渡</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transfers.map(t => <TransferCard key={t.id} transfer={t} />)}
          </div>
        </section>
      </main>
      <Chatbot />
      <Footer />
    </>
  )
}