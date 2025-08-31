import Link from 'next/link'

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col h-full">
      <img src={article.image || '/images/article-default.jpg'} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold mb-2">{article.title}</h3>
      <p className="text-gray-600 flex-1">{article.summary}</p>
      <Link href={`/articles/${article.id}`} className="mt-4 inline-block text-blue-700 font-semibold hover:underline">続きを読む</Link>
    </div>
  )
}