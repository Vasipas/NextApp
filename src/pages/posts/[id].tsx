import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx
  return { props: { params } }
}

const Post = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{params.id}</div>
}

export default Post
