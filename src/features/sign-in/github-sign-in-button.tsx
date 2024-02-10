"use client";

import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

import { GitHubLogo } from "@/shared/components/icons";
import { Button, type ButtonProps } from "@/shared/components/ui/button";

export function GitHubSignInButton({
  text = "Continue with GitHub",
  ...props
}: ButtonProps & { text?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    setIsLoading(true);
    signIn("github");
  }

  return (
    <Button {...props} onClick={() => handleClick()} disabled={isLoading}>
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <GitHubLogo className="mr-2 h-4 w-4" />
      )}
      {text}
    </Button>
  );
}
