import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SHOPI</div>
      <nav className="header_nav">
        <li className="list-item">
          <Link href="/posts/first">first</Link>
        </li>
        <li className="list-item">
          <Link href="/posts/second">second</Link>
        </li>
        <li className="list-item">
          <Link href="/posts/third">third</Link>
        </li>
        <li className="list-item">
          <Link href="/posts/fourth">fourth</Link>
        </li>
      </nav>
      <div className="auth">Auth</div>
    </header>
  )
}

export default Header
