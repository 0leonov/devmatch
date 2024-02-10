import NextAuth from "next-auth";

import { authConfig } from "@/entities/auth";

const { auth } = NextAuth(authConfig);

/** 
No overload matches this call.
  Overload 1 of 4, '(args_0: GetServerSidePropsContext): Promise<Session | null>', gave the following error.
    Argument of type '(req: NextAuthRequest) => null' is not assignable to parameter of type 'GetServerSidePropsContext'.
  Overload 2 of 4, '(args_0: (req: NextAuthRequest) => void | Response | Promise<void | Response>): AppRouteHandlerFn', gave the following error.
    Argument of type '(req: NextAuthRequest) => null' is not assignable to parameter of type '(req: NextAuthRequest) => void | Response | Promise<void | Response>'.
      Type 'null' is not assignable to type 'void | Response | Promise<void | Response>'.ts(2769)
*/
export default auth((req) => {
  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
