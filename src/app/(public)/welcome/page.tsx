import React from "react";

import { PublicHeader } from "@/widgets/public-header";
import { FeatureSection, Footer, HeroSection } from "@/widgets/welcome";

export default function Welcome() {
  return (
    <div>
      <main className="flex min-h-screen flex-col">
        <PublicHeader />

        <HeroSection className="flex grow items-center" />
      </main>

      <FeatureSection />

      <Footer />
    </div>
  );
}
