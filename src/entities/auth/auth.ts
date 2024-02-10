import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { type Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

import { prisma } from "@/entities/prisma";
import { routes } from "@/shared/lib/routes";

import { authConfig } from "./auth-config";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }

      const { username, bio, birthdate, role, registrationCompleted, email } =
        await prisma.user.findFirstOrThrow({ where: { id: token.sub } });

      return {
        ...token,
        username,
        bio,
        birthdate,
        role,
        registrationCompleted,
        email,
      };
    },
    async session({ session, token }: { session: Session; token?: JWT }) {
      const user = {
        ...session.user,
        username: token?.username,
        bio: token?.bio,
        birthdate: token?.birthdate,
        role: token?.role,
        registrationCompleted: token?.registrationCompleted,
        email: token?.email,
      };

      return {
        ...session,
        user,
      };
    },
  },
  pages: { signIn: routes.login },
  session: { strategy: "jwt" },
  ...authConfig,
});
