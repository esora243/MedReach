import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from './apiClient'

export function useAuth() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => { listener?.subscription?.unsubscribe() }
  }, [])

  function logout() {
    supabase.auth.signOut()
    setUser(null)
    router.push('/')
  }

  return { user, logout }
}