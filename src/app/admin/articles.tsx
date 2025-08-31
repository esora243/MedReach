import AdminSidebar from '@/components/AdminSidebar';
import AdminArticleTable from '@/components/AdminArticleTable';

export default function AdminArticles() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-4">記事管理</h1>
        <AdminArticleTable />
      </main>
    </div>
  );
}