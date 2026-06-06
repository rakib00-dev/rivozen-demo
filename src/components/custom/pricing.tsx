'use client'

import { useState } from 'react'
import { Reveal } from './reveal'
import { Check, ArrowUpRight } from 'lucide-react'

const plans = [
  {
    name: 'Standard',
    monthly: 2995,
    yearly: 2495,
    desc: 'One request at a time. Perfect for growing teams.',
    features: [
      'One active request',
      'Avg. 2-day delivery',
      'Unlimited brands',
      'Unlimited revisions',
      'Source files included',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    monthly: 4995,
    yearly: 4295,
    desc: 'Two requests at a time. For fast-moving teams.',
    features: [
      'Two active requests',
      'Avg. next-day delivery',
      'Dedicated designer',
      'Unlimited brands & revisions',
      'Motion & illustration',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Custom',
    monthly: null,
    yearly: null,
    desc: 'A scaled creative team built around your workflow.',
    features: [
      'Multiple active requests',
      'Dedicated design team',
      'Project manager',
      'Slack collaboration',
      'Custom onboarding',
    ],
    featured: false,
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            One flat fee.{' '}
            <span className="font-serif italic">No surprises.</span>
          </h2>

          <div className="mt-8 inline-flex items-center gap-1 rounded-lg border border-border bg-card p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                !yearly
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                yearly
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              Yearly{' '}
              <span className={yearly ? 'text-primary-foreground/80' : 'text-primary'}>
                -15%
              </span>
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.08}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.featured
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.featured
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                }`}
              >
                {plan.desc}
              </p>

              <div className="mt-6">
                {plan.monthly ? (
                  <p className="flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      ${(yearly ? plan.yearly! : plan.monthly).toLocaleString()}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured
                          ? 'text-primary-foreground/70'
                          : 'text-muted-foreground'
                      }`}
                    >
                      /month
                    </span>
                  </p>
                ) : (
                  <p className="text-4xl font-semibold tracking-tight">
                    Let&apos;s talk
                  </p>
                )}
              </div>

              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {plan.monthly ? 'Get started' : 'Book a call'}
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured
                          ? 'text-primary-foreground'
                          : 'text-primary'
                      }`}
                    />
                    <span
                      className={
                        plan.featured ? 'text-primary-foreground/90' : ''
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
