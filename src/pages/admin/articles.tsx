import AdminSidebar from '../../components/AdminSidebar'
import ArticleTable from '../../components/ArticleTable'
export default function AdminArticlesPage() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">記事管理</h1>
        <ArticleTable />
      </main>
    </div>
  )
}