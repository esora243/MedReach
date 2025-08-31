import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../features/store'
import { deleteJob } from '../features/jobsSlice'

export default function AdminJobTable() {
  const jobs = useSelector((state: RootState) => state.jobs.list)
  const dispatch = useDispatch()
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>タイトル</th>
          <th>勤務地</th>
          <th>年収</th>
          <th>状態</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr key={job.id}>
            <td>{job.title}</td>
            <td>{job.location}</td>
            <td>{job.salary}</td>
            <td>{job.status}</td>
            <td>
              <Link href={`/jobs/${job.id}`} className="text-blue-600">詳細</Link>
              <Link href={`/admin/jobs/edit/${job.id}`} className="ml-2 text-blue-600">編集</Link>
              <button className="ml-2 text-red-600" onClick={() => dispatch(deleteJob(job.id))}>削除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}