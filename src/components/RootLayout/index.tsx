import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root_container">
      <Header />
      <div className="content">
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
