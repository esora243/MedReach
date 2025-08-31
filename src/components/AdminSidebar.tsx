import Link from 'next/link'

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-900 text-white flex flex-col p-6">
      <nav>
        <ul className="space-y-4">
          <li><Link href="/admin">ダッシュボード</Link></li>
          <li><Link href="/admin/articles">記事管理</Link></li>
          <li><Link href="/admin/jobs">求人管理</Link></li>
          <li><Link href="/admin/transfers">譲渡管理</Link></li>
          <li><Link href="/admin/users">ユーザー管理</Link></li>
          <li><Link href="/admin/logs">操作ログ</Link></li>
        </ul>
      </nav>
    </aside>
  )
}