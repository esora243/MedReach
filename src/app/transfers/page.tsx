import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TransferCard from '../../components/TransferCard'
import { getFeaturedTransfers } from '../../utils/apiClient'

export default async function TransferListPage() {
  const transfers = await getFeaturedTransfers()
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="section-title">クリニック譲渡一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transfers.map(t => <TransferCard key={t.id} transfer={t} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}