import React from "react";

import { PublicHeader } from "@/widgets/public-header";
import { SignInForm } from "@/widgets/sign-in-form";

export default function Login() {
  return (
    <>
      <PublicHeader />

      <main className="p-8 sm:pt-32">
        <SignInForm className="mx-auto" />
      </main>
    </>
  );
}
