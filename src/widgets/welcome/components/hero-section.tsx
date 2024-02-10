"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/shared/components/ui/button";
import { routes } from "@/shared/lib/routes";
import { cn } from "@/shared/lib/utils";

import { appearanceAnimationVariants } from "../lib";

const MotionLink = motion(Link);

export function HeroSection({ className }: { className?: string }) {
  return (
    <motion.section
      className={cn("container py-8", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-lg">
        <motion.h2
          variants={appearanceAnimationVariants}
          custom={1}
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Welcome to <span className="text-primary">DevMatch</span>!
        </motion.h2>

        <motion.h1
          variants={appearanceAnimationVariants}
          custom={2}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          «Where Tech Professionals <span className="text-primary">Unite</span>»
        </motion.h1>

        <motion.p
          variants={appearanceAnimationVariants}
          custom={3}
          className="mt-6"
        >
          Are you an IT professional seeking thrilling projects, collaboration
          prospects, or like-minded tech enthusiasts to network with?
        </motion.p>

        <div className="mt-6 flex w-fit items-center justify-center">
          <MotionLink
            variants={appearanceAnimationVariants}
            custom={4}
            className={buttonVariants({ size: "lg" })}
            href={routes.login}
          >
            Join us
          </MotionLink>

          <motion.div
            animate={{
              opacity: [0, 0.4],
              scale: [0.5, 2],
              transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5,
              },
            }}
            className="absolute -z-10 h-64 w-64 rounded-full bg-gradient-to-b from-pink-400 to-blue-400 opacity-0 blur-3xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
