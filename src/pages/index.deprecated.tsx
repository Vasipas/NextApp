import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import '@/styles/index.scss'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>Hello</main>
      <Link href="/posts">Go to posts</Link>
    </>
  )
}

export default Home