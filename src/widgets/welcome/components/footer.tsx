import Link from "next/link";
import React from "react";

import { DevMatchLogo } from "@/shared/components/icons";

import { footerContent } from "../lib";

export function Footer() {
  return (
    <footer className="container py-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-32">
        {footerContent.map(({ title, links }) => (
          <div key={title}>
            <h2>{title}</h2>

            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-4">
        <DevMatchLogo className="h-6 w-6" />

        <div className="text-sm">
          <p>Copyright © 2024 Artyom Leonov</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
