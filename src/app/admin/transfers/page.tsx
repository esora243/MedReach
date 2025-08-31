'use client'
import AdminSidebar from '../../../components/AdminSidebar'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import AdminTransferTable from '../../../components/AdminTransferTable'

export default function AdminTransfersPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">クリニック譲渡管理</h1>
            <Link href="/transfers/new" className="button-primary">新規譲渡案件追加</Link>
          </div>
          <AdminTransferTable />
        </main>
        <Footer />
      </div>
    </div>
  )
}