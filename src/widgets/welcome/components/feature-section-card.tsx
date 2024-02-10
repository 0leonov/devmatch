import React from "react";

import { cn } from "@/shared/lib/utils";

export function FeatureSectionCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("bg-secondary rounded-xl p-12 text-center", className)}>
      <h2 className="text-secondary-foreground text-4xl tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="text-muted-foreground mt-8">{description}</p>
    </div>
  );
}
