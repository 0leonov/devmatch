import { UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      username: string | null;
      bio: string | null;
      birthdate: Date | null;
      role: UserRole;
      registrationCompleted: Date | null;
      email: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string | null;
    bio: string | null;
    birthdate: Date | null;
    role: UserRole;
    registrationCompleted: Date | null;
    email: string | null;
  }
}
