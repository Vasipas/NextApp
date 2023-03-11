import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <div>Root Layout header</div>
        {children}
        <div>Root layout footer</div>
      </body>
    </html>
  )
}

export default RootLayout
