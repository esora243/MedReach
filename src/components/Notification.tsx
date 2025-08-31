import { useEffect, useState } from 'react'

export default function Notification({ message, type = 'success', duration = 3000 }) {
  const [show, setShow] = useState(!!message)
  useEffect(() => {
    setShow(!!message)
    if (message) {
      const timer = setTimeout(() => setShow(false), duration)
      return () => clearTimeout(timer)
    }
  }, [message, duration])
  if (!show) return null
  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded shadow-lg ${type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
      {message}
    </div>
  )
}