'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import Link from 'next/link'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pt-32 pb-16 md:px-6 md:pt-44"
    >
      <div className='absolute left-0 top-0'>
        <Image alt='bg-overlay' src={'/bg-gradient.svg'} width={0} height={0} className='w-full h-full'/>
        <span className='bg-linear-to-b from-primary/10 to-primary/.5 h-full w-svw absolute top-0'></span>
      </div>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs md:text-sm text-muted-foreground"
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
          <Link
            href="#pricing"
            className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-7 py-3.5 text-base font-medium text-secondary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#work"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-7 py-3.5 text-base font-medium transition-colors hover:bg-secondary"
          >
            See our work
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.45 }}
        className="mx-auto mt-16 max-w-6xl"
      >
        <div className="relative aspect-16/8 overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            src="https://cdn.prod.website-files.com/69b15b68fb5a0ea0e6ef48b2/69f034d0beee479e7ee2414e_Frame%202147223617-p-800.png"
            alt="A collage of design work including app UI, branding and illustration"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* <video height="280" allow="autoplay" className="rounded-lg shadow-2xl bg-center w-full h-full" controls autoplay loop style="opacity: 1; transform: none;">
          <source src="./assets/videos/saurov.mp4" type="video/mp4"/>
        </video> */}
      </motion.div>
    </section>
  )
}
