import AdminSidebar from '../../components/AdminSidebar'

export default function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">管理ダッシュボード</h1>
        <ul className="grid md:grid-cols-3 gap-8">
          <li className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">記事管理</h2>
            <p>記事の追加・編集・削除・公開/非公開切り替え</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">求人管理</h2>
            <p>求人情報の管理・応募状況確認</p>
          </li>
          <li className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">譲渡管理</h2>
            <p>クリニック譲渡案件の管理・申し込み状況確認</p>
          </li>
        </ul>
      </main>
    </div>
  )
}