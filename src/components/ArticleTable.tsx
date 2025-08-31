import { useSelector } from 'react-redux'
import { RootState } from '../features/store'
export default function ArticleTable() {
  const articles = useSelector((state: RootState) => state.articles.list)
  return (
    <table className="w-full border">
      <thead>
        <tr><th>タイトル</th><th>著者</th><th>状態</th><th>操作</th></tr>
      </thead>
      <tbody>
        {articles.map(a => (
          <tr key={a.id}>
            <td>{a.title}</td>
            <td>{a.author}</td>
            <td>{a.status}</td>
            <td>
              <button>編集</button>
              <button>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}