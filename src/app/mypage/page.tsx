'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useAuth } from '../../utils/authGuard'

export default function MyPage() {
  const { user } = useAuth()
  if (!user) return <div>ログインが必要です</div>
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-lg">
        <h1 className="text-2xl font-bold mb-6">マイページ</h1>
        <div className="bg-white rounded shadow p-6">
          <div className="mb-2">ユーザー名: {user.user_metadata?.name ?? user.email}</div>
          <div className="mb-2">メールアドレス: {user.email}</div>
          <div className="mb-2">登録日: {new Date(user.created_at).toLocaleDateString()}</div>
        </div>
        {/* 応募履歴やお気に入りもここで拡張可能 */}
      </main>
      <Footer />
    </>
  )
}