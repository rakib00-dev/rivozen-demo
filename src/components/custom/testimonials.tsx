'use client'

import { Reveal, RevealStagger, RevealItem } from './reveal'
import { Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'We couldn&apos;t be happier with the results. The team understood our brief and delivered consistently high-quality work. The whole process has been smooth.',
    name: 'Orlando Boquin',
    role: 'Owner, Orbo Digital',
  },
  {
    quote:
      'Fast, communicative, and genuinely good designers. They are responsive, easy to work with, and deliver quality results quickly.',
    name: 'Keren Fridman',
    role: 'VP Marketing, Corsight',
  },
  {
    quote:
      'Great value to pay a flat monthly fee and get an entire design team, instead of hiring one designer who would cost more.',
    name: 'Joe Howard',
    role: 'Founder, WP Buffs',
  },
  {
    quote:
      'They&apos;ve consistently delivered across a variety of projects, from social graphics to UI design. Communication is smooth and everything just works.',
    name: 'Andrei Tiburca',
    role: 'Co-Founder, Video Deck',
  },
  {
    quote:
      'Switching to the dedicated designer plan gave us a steady flow of quality designs that align perfectly with our agency&apos;s needs.',
    name: 'Jaylen Bledsoe',
    role: 'CEO, The Potter&apos;s House',
  },
  {
    quote:
      'I&apos;ve been very happy with the additional colleagues who assist with our design projects. The experience keeps us coming back.',
    name: 'Jeanette Knutti',
    role: 'CEO, Moxie Marketing',
  },
]

function clean(s: string) {
  return s.replace(/&apos;/g, '\u2019')
}

export function Testimonials() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Customer reviews
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Why teams choose{' '}
            <span className="font-serif italic">Rivozen</span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <RevealItem
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {clean(r.quote)}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium">{r.name}</p>
                <p className="text-sm text-muted-foreground">
                  {clean(r.role)}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
