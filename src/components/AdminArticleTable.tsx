import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../features/store'
import { deleteArticle } from '../features/articlesSlice'

export default function AdminArticleTable() {
  const articles = useSelector((state: RootState) => state.articles.list)
  const dispatch = useDispatch()
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>公開状態</th>
          <th>著者</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(article => (
          <tr key={article.id}>
            <td>{article.title}</td>
            <td>{article.status}</td>
            <td>{article.author}</td>
            <td>
              <Link href={`/admin/articles/edit/${article.id}`} className="text-blue-600">編集</Link>
              <button className="ml-2 text-red-600" onClick={() => dispatch(deleteArticle(article.id))}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}