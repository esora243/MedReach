'use client'
import AdminSidebar from '../../../components/AdminSidebar'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import AdminJobTable from '../../../components/AdminJobTable'

export default function AdminJobsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">求人管理</h1>
            <Link href="/jobs/new" className="button-primary">新規求人追加</Link>
          </div>
          <AdminJobTable />
        </main>
        <Footer />
      </div>
    </div>
  )
}