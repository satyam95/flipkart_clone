import type {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        if (email !== "john@gmail.com" || password !== "1234") {
          throw new Error("invalid credentials");
        } 
        return {
          id: "1234",
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
