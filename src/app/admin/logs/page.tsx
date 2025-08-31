'use client'
import AdminSidebar from '../../../components/AdminSidebar'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../../features/store'

export default function AdminLogsPage() {
  const logs = useSelector((state: RootState) => state.logs.list)
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-gray-50">
        <Header />
        <main className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">操作ログ</h1>
          <ul className="space-y-2">
            {logs.map(log => (
              <li key={log.id} className="bg-white rounded shadow px-4 py-2 text-sm">
                {log.timestamp} - {log.user} - {log.action}
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  )
}