'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-32 pb-16 md:px-6 md:pt-44"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-primary text-primary"
              />
            ))}
          </span>
          Rated 4.9/5 by 2,000+ teams
        </motion.div>

        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
          {['On-demand', 'design,', 'without'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.08 * i }}
              className="mr-3 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="inline-block font-serif italic text-primary"
          >
            the headaches.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.32 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Rivozen is a subscription-based creative studio powered by talented
          designers and dedicated support. Unlimited requests, one flat monthly
          fee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
          >
            See our work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.45 }}
        className="mx-auto mt-16 max-w-6xl"
      >
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            src="/hero-collage.png"
            alt="A collage of design work including app UI, branding and illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
