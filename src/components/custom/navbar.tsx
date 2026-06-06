'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${scrolled ? 'fixed': 'absolute'} transition-all duration-300 inset-x-0 top-0 z-50 px-4 pt-4 md:px-6`}>
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-5 py-3 transition-colors duration-300 ${
          true
            ? 'border-border bg-background/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-danger" aria-hidden />
           <Image
              src="/rivozen_black.png"
              alt="hero section"
              width={40}
              height={40}
              style={{ width: 'auto', height: 'auto' }}
              className="w-[38rem]"
            />
          <span className="text-lg font-semibold tracking-tight max-md:hidden">Rivozen</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#pricing"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Log in
          </Link>
          <Link
            href="#pricing"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-7">
              <span className="text-lg font-semibold text-background">
                Rivozen
              </span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-16 flex flex-col gap-2 px-6">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-4xl font-medium tracking-tight text-background"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="absolute inset-x-6 bottom-10">
              <Link
                href="#pricing"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-background py-4 text-base font-medium text-foreground"
              >
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
