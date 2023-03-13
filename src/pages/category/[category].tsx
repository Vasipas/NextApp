import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx
  const session = await getSession(ctx)
  if (!session) {
    return { redirect: { destination: '/' }, props: {} }
  }
  return { props: { params, session } }
}

const CategoryPage = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="category__container">{String(params.category).toUpperCase()} Category Page</div>
  )
}

export default CategoryPage
