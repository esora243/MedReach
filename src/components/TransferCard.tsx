import Link from 'next/link'

export default function TransferCard({ transfer }) {
  return (
    <div className="card flex flex-col h-full">
      <img src={transfer.image || '/images/transfer-default.jpg'} alt={transfer.title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold mb-2">{transfer.title}</h3>
      <p className="text-gray-600 flex-1">{transfer.summary}</p>
      <Link href={`/transfers/${transfer.id}`} className="mt-4 inline-block text-blue-700 font-semibold hover:underline">詳細を見る</Link>
    </div>
  )
}