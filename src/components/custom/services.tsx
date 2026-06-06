'use client'

import { Reveal, RevealStagger, RevealItem } from './reveal'
import {
  Palette,
  Monitor,
  PenTool,
  Share2,
  Film,
  Presentation,
  Sparkles,
  Layers,
} from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, color systems, and complete guidelines that make you unforgettable.',
  },
  {
    icon: Monitor,
    title: 'Web & Product',
    desc: 'Landing pages, marketing sites, and product UI designed to convert.',
  },
  {
    icon: PenTool,
    title: 'Illustration',
    desc: 'Custom illustrations and icon sets crafted to match your voice.',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Scroll-stopping graphics and templates for every channel you run.',
  },
  {
    icon: Film,
    title: 'Motion Graphics',
    desc: 'Animations, explainers, and video edits that bring ideas to life.',
  },
  {
    icon: Presentation,
    title: 'Presentations',
    desc: 'Pitch decks and reports that command attention in the room.',
  },
  {
    icon: Sparkles,
    title: 'Display Ads',
    desc: 'High-performing ad creative built and resized for every platform.',
  },
  {
    icon: Layers,
    title: 'Print Design',
    desc: 'Packaging, merch, and editorial layouts, production-ready.',
  },
]

export function Services() {
  return (
    <section id="services" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            One studio for all your{' '}
            <span className="font-serif italic">creative needs</span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
