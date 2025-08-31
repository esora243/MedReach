import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../features/store'
import { deleteTransfer } from '../features/transfersSlice'

export default function AdminTransferTable() {
  const transfers = useSelector((state: RootState) => state.transfers.list)
  const dispatch = useDispatch()
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>案件名</th>
          <th>診療科目</th>
          <th>所在地</th>
          <th>譲渡価格</th>
          <th>状態</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {transfers.map(t => (
          <tr key={t.id}>
            <td>{t.title}</td>
            <td>{t.department}</td>
            <td>{t.location}</td>
            <td>{t.price}</td>
            <td>{t.status}</td>
            <td>
              <Link href={`/transfers/${t.id}`} className="text-blue-600">詳細</Link>
              <Link href={`/admin/transfers/edit/${t.id}`} className="ml-2 text-blue-600">編集</Link>
              <button className="ml-2 text-red-600" onClick={() => dispatch(deleteTransfer(t.id))}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}