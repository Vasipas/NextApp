import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import RootLayout from '@/components/RootLayout'
import Loader from '@/components/Loader'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
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

  if (loading)
    return (
      <div className="root_container">
        <Loader />
      </div>
    )
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </SessionProvider>
  )
}

export default App
