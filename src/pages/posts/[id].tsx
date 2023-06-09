import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx
  const session = await getSession(ctx)
  if (!session) {
    return { redirect: { destination: '/login' }, props: {} }
  }
  return { props: { params, session } }
}

const Post = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{params}</div>
}

export default Post
