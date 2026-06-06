'use client'

import Image from 'next/image'
import { Reveal } from './reveal'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const cols = [
  {
    title: 'Studio',
    links: ['Services', 'Work', 'Process', 'Pricing', 'Careers'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Help center', 'Brand assets', 'Changelog'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Terms', 'Privacy'],
  },
]

export function CtaFooter() {
  return (
    <footer id="contact" className="px-4 pb-8 md:px-6">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-secondary-foreground md:py-24">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          A full creative team,{' '}
          <span className="font-serif italic">at your fingertips.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-secondary-foreground/80">
          Start today and get your first design back as soon as tomorrow.
          Pause or cancel anytime.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#pricing"
            className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary-foreground px-7 py-3 text-base font-medium text-secondary transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-7 py-3 text-base font-medium transition-colors bg-primary-foreground hover:bg-primary-foreground/10"
          >
            Book a call
          </Link>
        </div>
      </Reveal>

      <div className="mx-auto mt-16 max-w-6xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              {/* <span className="h-3 w-3 rounded-full bg-primary" aria-hidden /> */}
                <Image
                  src="/rivozen_black.png"
                  alt="hero section"
                  width={40}
                  height={40}
                  style={{ width: 'auto', height: 'auto' }}
                  className="w-[38rem]"
                />
              <span className="text-lg font-semibold tracking-tight">
                Rivozen
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              On-demand graphic and web design for ambitious brands.
              Unlimited requests, one flat fee.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Rivozen Studio. All rights reserved.</p>
          <p>Designed with care, delivered on time.</p>
        </div>
      </div>
    </footer>
  )
}
