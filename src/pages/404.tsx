import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFoundPage = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => router.push('/'), 3000)
  }, [router])
  return <div>Not found</div>
}

export default NotFoundPage
