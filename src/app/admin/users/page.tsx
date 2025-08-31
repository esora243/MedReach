'use client'
import AdminSidebar from '../../../components/AdminSidebar'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import AdminUserTable from '../../../components/AdminUserTable'

export default function AdminUsersPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">ユーザー管理</h1>
          <AdminUserTable />
        </main>
        <Footer />
      </div>
    </div>
  )
}