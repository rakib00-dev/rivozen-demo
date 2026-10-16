"use client";

import { Reveal } from "../custom/reveal";
import { motion } from "framer-motion";
import { ease } from "../custom/hero";
import Image from "next/image";

interface TwoSideCommonSection {
  smallHeading?: string;
  bigHeading?: string;
  bigHeadingItalic?: string;
  paragraph?: string;
  primaryBtn?: string;
  primaryBtnLink?: string;
  secondaryBtn?: string;
  secondaryBtnLink?: string;
  Children?: React.ReactNode;
}

export default function TwoSideCommonSection({
  smallHeading = "Your Digital Storefront",
  bigHeading = "Make your first impression count, on every",
  bigHeadingItalic = "every screen",
  paragraph = `Tell us a little about what you&apos;re building, what you need, and where you want to go. We&apos;ll take it from there. about what you&apos;re building, what you need, and where you want to go.`,
  primaryBtn = "Start a conversation",
  primaryBtnLink = "/contact",
  secondaryBtn = "Book A Call",
  secondaryBtnLink = "/book-a-call",
  Children,
}: TwoSideCommonSection) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-32 pb-20 md:px-6 md:pt-40"
    >
      {/* Background */}
      <div className="mx-auto max-w-6xl">
        {/* main contents */}
        <Reveal delay={0.5} className="flex justify-center max-md:gap-5">
          <div className="relative mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-sm font-medium uppercase tracking-[0.18em] text-primary"
            >
              {smallHeading}
            </motion.div>
            {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground md:text-sm"
          >
            <span className="relative grid place-items-center h-3 w-3">
              <span className="absolute h-1.5 w-1.5 rounded-full bg-primary z-5"></span>
              <span className="absolute h-3.5 w-3.5 rounded-full bg-primary z-2 greenBallAnimation"></span>
            </span>
            {smallHeading}
          </motion.div> */}

            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl ">
              <motion.span className="mr-3 inline-block">
                {bigHeading}
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease,
                  delay: 0.24,
                }}
                className="inline-block font-serif italic"
              >
                {bigHeadingItalic}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease,
                delay: 0.32,
              }}
              className="mt-5 max-w-md leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </motion.p>

            {Children && (
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
                {Children}
              </motion.div>
            )}
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-xl md:max-w-[450px]">
            <Image
              src="/work-brand.png"
              alt="Showcase of our work and services"
              fill
              sizes="(max-width: 768px) 280px, 350px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>{" "}
    </section>
  );
}
