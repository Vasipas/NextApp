import { ReactNode } from 'react'

const PostsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>Posts Layout</div>
      <div>{children}</div>
      <footer>Posts Layout</footer>
    </>
  )
}

export default PostsLayout
