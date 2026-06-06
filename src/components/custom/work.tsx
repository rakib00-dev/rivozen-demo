'use client'

import Image from 'next/image'
import { Reveal, RevealStagger, RevealItem } from './reveal'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Northwind',
    category: 'Brand Identity',
    image: '/work-brand.png',
    span: 'lg:col-span-7',
  },
  {
    title: 'Flowstate',
    category: 'Web & Product',
    image: '/work-web.png',
    span: 'lg:col-span-5',
  },
  {
    title: 'Bloom Co.',
    category: 'Social Media',
    image: '/work-social.png',
    span: 'lg:col-span-5',
  },
  {
    title: 'Wander',
    category: 'Illustration',
    image: '/work-illustration.png',
    span: 'lg:col-span-7',
  },
]

export function Work() {
  return (
    <section
      id="work"
      className="px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Selected work
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Work we&apos;re{' '}
              <span className="font-serif italic">proud of</span>
            </h2>
          </div>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-1.5 text-sm font-medium"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {projects.map((p) => (
            <RevealItem key={p.title} className={p.span}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.title} — ${p.category}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {p.category}
                    </p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
