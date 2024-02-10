import Link from "next/link";
import React from "react";

import { GitHubSignInButton } from "@/features/sign-in";
import { routes } from "@/shared/lib/routes";
import { cn } from "@/shared/lib/utils";

export function SignInForm({ className }: { className?: string }) {
  return (
    <form className={cn("max-w-sm space-y-2", className)}>
      <GitHubSignInButton className="w-full" />

      <p className="text-muted-foreground text-center text-sm">
        By continuing you agree to our{" "}
        <Link
          href={routes.terms}
          className="font-medium underline-offset-4 hover:underline"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href={routes.terms}
          className="font-medium underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
