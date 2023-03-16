import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'

const SignIn = ({
  providers,
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="content-wrapper content-wrapper--column">
      {Object.values(providers).map((provider) => {
        if (provider.id === 'credentials') {
          return (
            <div className="signup" key={provider.name}>
              <form method="post" action="/api/auth/callback/credentials">
                <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                <p className="signup__title">Sign In</p>
                <div className="signup__field">
                  <div className="input">
                    <p className="input__label">Login</p>
                    <input type="text" name="username" className="input__field" />
                  </div>
                </div>
                <div className="signup__field">
                  <div className="input">
                    <p className="input__label">Password</p>
                    <input type="password" name="password" className="input__field" />
                  </div>
                </div>
                <div className="button-submit">
                  <button type="submit" className="button button--confirm">
                    Login
                  </button>
                </div>
              </form>
            </div>
          )
        }
        return (
          <div key={provider.name}>
            <div className="button-submit">
              <button
                type="button"
                className="button button--social-login"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [], csrfToken: await getCsrfToken(context) },
  }
}

export default SignIn
