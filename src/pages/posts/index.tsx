import { useSession } from 'next-auth/react'

const PostsIndexPage = () => {
  const { data: session, status } = useSession({ required: true })
  if (status === 'authenticated') {
    return <div>Posts Index Page</div>
  }
  return <div> Please, login</div>
}

export default PostsIndexPage
