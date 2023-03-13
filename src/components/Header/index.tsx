import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../../../public/lotus-flower.png'

const Header = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header__logo" onClick={goHome}>
          <Image src={Logo} alt="logo" width={45} height={45} />
          <p className="logo__title">Lotus</p>
        </div>
        <div className="header__nav">
          <ul className="nav">
            <li className="nav__list-item">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="nav__list-item">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="nav__list-item">
              <Link href="/about">About</Link>
            </li>
            <li className="nav__list-item">
              <Link href="/category">Categories</Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="header__auth"
          onClick={() => (session ? signOut() : signIn())}
        >
          {session ? `Sign Out, ${session.user?.name?.split(' ')[0]}` : 'Sign In'}
        </button>
      </header>
    </div>
  )
}

export default Header
