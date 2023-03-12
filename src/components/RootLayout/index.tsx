import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default RootLayout
