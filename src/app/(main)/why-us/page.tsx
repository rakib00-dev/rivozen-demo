"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const differentiators = [
  {
    number: "01",
    icon: Target,
    title: "Design with purpose",
    description:
      "We don't create things just to look good. Every design decision is made to support your brand, audience, and business goals.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Fast, focused execution",
    description:
      "We keep things moving without sacrificing quality. Less unnecessary back-and-forth and more time spent creating meaningful work.",
  },
  {
    number: "03",
    icon: Users,
    title: "A creative partner",
    description:
      "You get more than someone who completes tasks. We become an extension of your team and think alongside you.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Built around your brand",
    description:
      "We take the time to understand your identity, audience, and goals so the final work feels uniquely yours.",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "You shouldn't have to wonder what's happening with your project. We keep communication simple, direct, and transparent.",
  },
  {
    number: "06",
    icon: Check,
    title: "Quality without the overhead",
    description:
      "Professional creative work without unnecessary layers, complicated processes, or endless meetings.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by learning about your business, audience, challenges, and what you're trying to achieve.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We turn what we learn into a clear creative direction that gives the project purpose and consistency.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Our team designs and builds with attention to both the big picture and the smallest details.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Your feedback helps us polish the work until everything feels right and aligned with your goals.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "You receive a polished, practical solution that is ready to use, launch, and grow with your business.",
  },
];

const testimonials = [
  {
    quote:
      "We couldn't be happier with the results. The team understood our brief and delivered consistently high-quality work. The whole process has been smooth.",
    name: "Orlando Boquin",
    role: "Owner, Orbo Digital",
  },
  {
    quote:
      "Fast, communicative, and genuinely good designers. They are responsive, easy to work with, and deliver quality results quickly.",
    name: "Keren Fridman",
    role: "VP Marketing, Corsight",
  },
  {
    quote:
      "They've consistently delivered across a variety of projects, from social graphics to UI design. Communication is smooth and everything just works.",
    name: "Andrei Tiburca",
    role: "Co-Founder, Video Deck",
  },
];

export default function WhyUs() {
  const scrollToDifferentiators = () => {
    document.getElementById("difference")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToBooking = () => {
    window.location.href = "/book-a-call";
  };

  return (
    <SmoothScroll>
      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/bg-gradient.svg"
              alt=""
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground md:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Why Rivozen
              </motion.div>

              <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                {["More than", "a design"].map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      ease,
                      delay: 0.08 * index,
                    }}
                    className="mr-3 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}

                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease,
                    delay: 0.24,
                  }}
                  className="inline-block font-serif italic text-primary"
                >
                  partner.
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
                className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                We combine thoughtful design, clear communication, and focused
                execution to help ambitious businesses turn ideas into work that
                matters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.4,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                  Strategy first
                </div>

                <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                  Design driven
                </div>

                <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                  Built to last
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.48,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button
                  type="button"
                  size="lg"
                  onClick={scrollToDifferentiators}
                >
                  Why choose us
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={goToBooking}
                >
                  Book a call
                </Button>
              </motion.div>
            </Reveal>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section
          id="difference"
          className="scroll-mt-24 border-y border-border px-4 py-20 md:px-6 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  What makes us different
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  The difference is in the{" "}
                  <span className="font-serif italic text-primary">
                    details.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Good work is important. But how you get there matters too.
                  We've built our process around making collaboration easier,
                  clearer, and more effective.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item) => {
                const Icon = item.icon;

                return (
                  <RevealItem
                    key={item.number}
                    className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted/40 md:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <span className="text-sm text-muted-foreground">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* APPROACH */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Our approach
                  </p>

                  <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                    Simple process.
                    <span className="block font-serif italic text-primary">
                      Better work.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                    We don't believe great projects need complicated processes.
                    Our approach keeps things focused from the first
                    conversation to the final delivery.
                  </p>
                </div>

                <RevealStagger className="grid gap-3">
                  {steps.map((step) => (
                    <RevealItem
                      key={step.number}
                      className="group flex gap-5 rounded-2xl border border-border bg-card p-5 md:p-6"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                        {step.number}
                      </span>

                      <div>
                        <h3 className="font-semibold">{step.title}</h3>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EXPECTATIONS */}
        <section className="border-y border-border bg-muted/20 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    What you can expect
                  </p>

                  <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                    Working together should feel{" "}
                    <span className="font-serif italic text-primary">
                      easy.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    From the first conversation to the final handoff, we aim to
                    make every part of the experience straightforward and
                    collaborative.
                  </p>
                </div>

                <RevealStagger className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Clear communication",
                    "Reliable timelines",
                    "Thoughtful design",
                    "Responsive collaboration",
                    "Consistent quality",
                    "Attention to detail",
                  ].map((item) => (
                    <RevealItem
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </div>

                      <span className="text-sm font-medium">{item}</span>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  Client perspective
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  Don't just take our{" "}
                  <span className="font-serif italic text-primary">
                    word for it.
                  </span>
                </h2>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <RevealItem
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        viewBox="0 0 20 20"
                        className="h-4 w-4 fill-current text-primary"
                        aria-hidden="true"
                      >
                        <path d="M10 1.5l2.63 5.32 5.87.85-4.25 4.14 1 5.85L10 14.9l-5.25 2.76 1-5.85L1.5 7.67l5.87-.85L10 1.5z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                    {testimonial.quote}
                  </p>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-medium">{testimonial.name}</p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 md:px-6 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 px-6 py-16 text-center md:px-10 md:py-24">
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/bg-gradient.svg"
                    alt=""
                    fill
                    className="object-cover opacity-60"
                  />

                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
                </div>

                <div className="relative mx-auto max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Let's work together
                  </p>

                  <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                    Ready to build something
                    <span className="block font-serif italic text-primary">
                      better?
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    Tell us what you're working on and let's see how we can turn
                    your ideas into something meaningful.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button size="lg" type="button" onClick={goToBooking}>
                      Book a call
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
