import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import React from "react";

import { auth } from "@/entities/auth";

export async function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <NextAuthSessionProvider session={session}>
      {children}
    </NextAuthSessionProvider>
  );
}
