'use client'
import AdminSidebar from '../../../components/AdminSidebar'
import AdminArticleTable from '../../../components/AdminArticleTable'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function AdminArticlesPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">記事管理</h1>
            <Link href="/articles/new" className="button-primary">新規記事追加</Link>
          </div>
          <AdminArticleTable />
        </main>
        <Footer />
      </div>
    </div>
  )
}