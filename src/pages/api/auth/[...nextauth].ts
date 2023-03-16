/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { compare } from "bcryptjs";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  session: {
      strategy: "jwt" as SessionStrategy,
      maxAge: 3000,
   },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: "Credentials",
      credentials: {
        username: { label: "Login", type: "text", placeholder: "Please, enter your username or email" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials, _req) => {
        const client = await clientPromise;
        try {
          
          const db = await client.db();
          const users = await db.collection('users')
          const userExists = await users.findOne({email: credentials?.username})
            if (userExists && credentials) {
                const passwordCheck = await compare(credentials.password, userExists.password);
                if (passwordCheck) {
                return {
                    id: credentials.password,
                    email: credentials.username,
                    username: credentials.username,
                    password: credentials.password,
                };
              }
            }
            return null; // Add this line to satisfy the `authorize` typings
        } catch (e) {
            // const errorMessage = e.response.data.message;
            // throw new Error(errorMessage);
            return null;
        }
    }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET_KEY as string
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;  // Setting token in session
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth/signin'
  },
  adapter: MongoDBAdapter(clientPromise),
}
export default NextAuth(authOptions)