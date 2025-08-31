'use client'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { getTransferById } from '../../../utils/apiClient'
import TransferApplyForm from '../../../components/TransferApplyForm'
import { useEffect, useState } from 'react'

export default function TransferDetailPage({ params }) {
  const [transfer, setTransfer] = useState(null)
  useEffect(() => {
    getTransferById(params.id).then(setTransfer)
  }, [params.id])
  if (!transfer) return <div>Loading...</div>
  return (
    <>
      <Header />
      <main className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-2xl font-bold mb-2">{transfer.title}</h1>
        <p className="mb-4">{transfer.summary}</p>
        <ul className="mb-4 text-sm text-gray-500">
          <li>診療科目: {transfer.department}</li>
          <li>所在地: {transfer.location}</li>
          <li>譲渡価格: {transfer.price}</li>
        </ul>
        <TransferApplyForm transferId={transfer.id} />
      </main>
      <Footer />
    </>
  )
}