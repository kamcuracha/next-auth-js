import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

import { getUserByEmail } from "./mock/users"

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials === null) return null
        try {
          const user = getUserByEmail(credentials?.email)
          if (user) {
            const isMatch = user?.password === credentials?.password
            if (isMatch) {
              return user;
            } else {
              throw new Error("Check password")
            }
          } else {
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
})