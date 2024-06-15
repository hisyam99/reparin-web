import { AuthOptions, DefaultSession, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongo/client";
import bcrypt from "bcryptjs";

interface CustomProfile extends DefaultSession {
  sub: string;
  name: string;
  email: string;
  picture: string;
  role?: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}

export const auth: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user && user.role) {
        token.role = user.role;
      }

      if (trigger === "update" && session?.name) {
        token.name = session.name;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const client = await clientPromise;
        const db = client.db();

        // Fetch user by email
        const user = await db.collection("users").findOne({
          email: credentials.email,
        });

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        const customProfile: CustomProfile = {
          ...profile,
          role: profile.role ?? "user",
        };

        return {
          id: customProfile.sub,
          name: customProfile.name,
          email: customProfile.email,
          image: customProfile.picture,
          role: customProfile.role,
        };
      },
    }),
  ],
};

export default auth;
