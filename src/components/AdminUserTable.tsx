import { useSelector } from 'react-redux'
import { RootState } from '../features/store'

export default function AdminUserTable() {
  const users = useSelector((state: RootState) => state.users.list)
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>ユーザー名</th>
          <th>メールアドレス</th>
          <th>権限</th>
          <th>登録日</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>{new Date(u.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}