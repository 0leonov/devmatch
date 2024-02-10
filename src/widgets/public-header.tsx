import Link from "next/link";
import React from "react";

import { auth } from "@/entities/auth";
import { ThemeToggle } from "@/features/theming";
import { DevMatchLogo, GitHubLogo } from "@/shared/components/icons";
import { buttonVariants } from "@/shared/components/ui/button";
import { routes } from "@/shared/lib/routes";

export async function PublicHeader() {
  const session = await auth();

  return (
    <header className="container flex items-center justify-between py-8">
      <Link href={session ? routes.home : routes.welcome}>
        <DevMatchLogo className="h-10 w-10" />
      </Link>

      <div className="flex gap-2">
        <Link
          href="https://github.com/0leonov/devmatch"
          target="_blank"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <GitHubLogo className="h-4 w-4" />
        </Link>

        <ThemeToggle variant="ghost" />
      </div>
    </header>
  );
}
