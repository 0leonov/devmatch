"use client";

import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/shared/lib/utils";

import { appearanceAnimationVariants, featureSectionCards } from "../lib";
import { FeatureSectionCard } from "./feature-section-card";

export function FeatureSection({ className }: { className?: string }) {
  return (
    <section className={cn("container py-8", className)}>
      <motion.ul
        className="mx-auto grid max-w-[58rem] gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {featureSectionCards.map(({ title, description }, index) => (
          <motion.li
            key={title}
            variants={appearanceAnimationVariants}
            custom={index}
          >
            <FeatureSectionCard
              title={title}
              description={description}
              className="mx-auto h-full max-w-md"
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
