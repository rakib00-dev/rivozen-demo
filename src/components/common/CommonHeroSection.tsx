"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../custom/reveal";
import { Button } from "../ui/button";

export const ease = [0.22, 1, 0.36, 1] as const;

interface CommonHeroSection {}

export default function CommonHeroSection({}: CommonHeroSection) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-32 pb-20 md:px-6 md:pt-44 md:pb-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <Image
          alt=""
          src="/bg-gradient.svg"
          width={0}
          loading="eager"
          height={0}
          className="h-full w-full object-cover"
          priority
        />

        <span className="absolute left-0 top-0 h-full w-svw bg-linear-to-b from-primary/10 to-primary/5" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground md:text-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Get in touch
        </motion.div>

        <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
          {["Have a", "project", "in mind?"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease,
                delay: 0.08 * i,
              }}
              className={`mr-3 inline-block ${
                i === 2 ? "font-serif italic text-primary" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease,
            delay: 0.32,
          }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Tell us a little about what you&apos;re building, what you need, and
          where you want to go. We&apos;ll take it from there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease,
            delay: 0.4,
          }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button type="button" size="lg" variant={"btn"} onClick={() => {}}>
            Start a conversation
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>

          <Button
            // href="/book-a-call"
            type="button"
            // size="lg"
            variant="btn_outline"
            // asChild={false}
          >
            Book a call
            {/* <ArrowUpRight className="ml-1 h-4 w-4" /> */}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
