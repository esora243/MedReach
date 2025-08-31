'use client'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getJobById } from '../../../utils/apiClient'
import JobApplyForm from '../../../components/JobApplyForm'
import { useEffect, useState } from 'react'

export default function JobDetailPage({ params }) {
  const [job, setJob] = useState(null)
  useEffect(() => {
    getJobById(params.id).then(setJob)
  }, [params.id])
  if (!job) return <div>Loading...</div>
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <p className="mb-4">{job.description}</p>
        <ul className="mb-4 text-sm text-gray-500">
          <li>勤務地: {job.location}</li>
          <li>年収: {job.salary}</li>
        </ul>
        <JobApplyForm jobId={job.id} />
      </main>
      <Footer />
    </>
  )
}