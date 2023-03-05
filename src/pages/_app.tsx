import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (loading) return <h4>Loading...</h4>
  return <Component {...pageProps} />
}

export default App
