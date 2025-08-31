import Link from 'next/link'

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-3">{job.title}</h3>
      <p className="text-gray-700 mb-2">{job.description.slice(0, 80)}...</p>
      <ul className="text-sm text-gray-500 mb-4">
        <li>勤務地: {job.location}</li>
        <li>年収: {job.salary}</li>
      </ul>
      <Link href={`/jobs/${job.id}`} className="button-primary mt-auto">詳細を見る</Link>
    </div>
  )
}