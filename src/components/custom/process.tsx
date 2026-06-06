'use client'

import { Reveal, RevealStagger, RevealItem } from './reveal'

const steps = [
  {
    no: '01',
    title: 'Submit your request',
    desc: 'Tell us what you need, share references, and upload your brand assets in seconds.',
  },
  {
    no: '02',
    title: 'Designer gets to work',
    desc: 'We match your project with the right designer and begin immediately.',
  },
  {
    no: '03',
    title: 'Provide feedback',
    desc: 'Leave comments directly on the design. We iterate until it is exactly right.',
  },
  {
    no: '04',
    title: 'Files are delivered',
    desc: 'Receive final designs in every format you need, ready to ship across channels.',
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="bg-foreground px-4 py-20 text-background md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            From brief to delivery,{' '}
            <span className="font-serif italic text-background/70">
              made easy
            </span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <RevealItem
              key={s.no}
              className="bg-foreground p-7 transition-colors hover:bg-background/[0.04]"
            >
              <span className="text-sm font-medium text-primary">{s.no}</span>
              <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/60">
                {s.desc}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
