import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { data: 'Posts Page' } }
}

const PostsPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <h3>{data}</h3>
    </main>
  )
}

export default PostsPage
