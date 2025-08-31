import Header from '../../components/Header'
import Footer from '../../components/Footer'
import JobCard from '../../components/JobCard'
import { getFeaturedJobs } from '../../utils/apiClient'

export default async function JobListPage() {
  const jobs = await getFeaturedJobs()
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="section-title">求人情報一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </main>
      <Footer />
    </>
  )
}