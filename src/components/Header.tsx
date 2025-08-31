import Link from 'next/link'
import { useAuth } from '../utils/authGuard'

export default function Header() {
  const { user, logout } = useAuth()
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <img src="/icons/logo.svg" className="h-8 w-8" alt="MedReach" />
          MedReach
        </Link>
        <nav>
          <ul className="flex gap-8 text-lg">
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/articles">ブログ</Link></li>
            <li><Link href="/jobs">求人</Link></li>
            <li><Link href="/transfers">クリニック譲渡</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
            {user?.role === 'admin' && <li><Link href="/admin">管理</Link></li>}
          </ul>
        </nav>
        <div>
          {user ? (
            <>
              <span className="mr-2">{user.email}</span>
              <button onClick={logout} className="bg-white text-blue-900 px-3 py-1 rounded">ログアウト</button>
            </>
          ) : (
            <Link href="/login" className="bg-white text-blue-900 px-3 py-1 rounded">ログイン</Link>
          )}
        </div>
      </div>
    </header>
  )
}