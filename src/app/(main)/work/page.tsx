"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealItem, RevealStagger } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";

const projects = [
  {
    title: "Northwind",
    category: "Brand Identity",
    description:
      "A complete visual identity designed to give a growing lifestyle brand a confident and recognizable presence.",
    image: "/work-brand.png",
    span: "lg:col-span-7",
    sizes: "(min-width: 1024px) 58vw, 100vw",
  },
  {
    title: "Flowstate",
    category: "Web & Product",
    description:
      "A conversion-focused digital experience designed around clarity, usability, and a strong visual system.",
    image: "/work-web.png",
    span: "lg:col-span-5",
    sizes: "(min-width: 1024px) 42vw, 100vw",
  },
  {
    title: "Bloom Co.",
    category: "Social & Content",
    description:
      "A flexible social design system built to keep content consistent, engaging, and instantly recognizable.",
    image: "/work-social.png",
    span: "lg:col-span-5",
    sizes: "(min-width: 1024px) 42vw, 100vw",
  },
  {
    title: "Wander",
    category: "Illustration",
    description:
      "A playful illustration direction created to bring personality and visual storytelling into the brand.",
    image: "/work-illustration.png",
    span: "lg:col-span-7",
    sizes: "(min-width: 1024px) 58vw, 100vw",
  },
];

const categories = [
  "All",
  "Brand Identity",
  "Web & Product",
  "Social & Content",
  "Illustration",
];

const moreProjects = [
  {
    title: "Arc Studio",
    category: "Brand Identity",
  },
  {
    title: "Morrow",
    category: "Web Design",
  },
  {
    title: "Cedar",
    category: "Social & Content",
  },
  {
    title: "Field Notes",
    category: "Illustration",
  },
];

const testimonials = [
  {
    quote:
      "Rivozen understood the direction immediately and turned it into something much stronger than we imagined.",
    name: "Sarah Mitchell",
    role: "Founder, Northwind",
  },
  {
    quote:
      "The process was clear, fast, and collaborative. Every detail felt intentional.",
    name: "Daniel Brooks",
    role: "Product Lead, Flowstate",
  },
  {
    quote:
      "We finally have a visual identity that feels consistent across everything we do.",
    name: "Maya Chen",
    role: "Creative Director, Bloom Co.",
  },
];

export default function WorkPage() {
  return (
    <SmoothScroll>
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-32 pb-16 md:px-6 md:pt-44 md:pb-24">
          <Image
            src="/bg-gradient.svg"
            alt=""
            fill
            priority
            className="pointer-events-none object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-primary/5" />

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <div className="mb-6 inline-flex rounded-md border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground md:text-sm">
                Selected work
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                Work that makes
                <br />
                <span className="font-serif italic text-primary">
                  brands matter.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                A selection of identities, digital experiences, and creative
                systems built to help ambitious brands stand out and move
                forward.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg">
                  <Link href="#featured-work">
                    Explore our work
                    <ArrowRight />
                  </Link>
                </Button>

                <Button variant="outline" size="lg">
                  <Link href="/book-a-call">
                    Start a project
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Categories */}
        <section className="border-y border-border bg-muted/30 px-4 py-5 md:px-6">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  index === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Work */}
        <section id="featured-work" className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Featured work
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  A few things we’ve
                  <span className="font-serif italic"> made.</span>
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Every project starts with a problem and ends with a creative
                  solution built around the people who need it.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-6 lg:grid-cols-12">
              {projects.map((project) => (
                <RevealItem key={project.title} className={project.span}>
                  <Link href="/contact" className="group block">
                    <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-border bg-card">
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.category}`}
                        fill
                        sizes={project.sizes}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-6 pt-20">
                        <div className="flex items-end justify-between gap-4 text-white">
                          <div>
                            <p className="text-sm text-white/70">
                              {project.category}
                            </p>
                            <h3 className="mt-1 text-2xl font-semibold">
                              {project.title}
                            </h3>
                          </div>

                          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight className="size-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Case Study */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[420px]">
                    <Image
                      src="/work-web.png"
                      alt="Featured Flowstate project"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      Case study
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                      Building a digital experience around clarity.
                    </h2>

                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      Flowstate needed a digital presence that could communicate
                      a complex product in a simple, confident way. We created a
                      flexible visual system and website focused on clarity,
                      conversion, and usability.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6">
                      <div>
                        <p className="text-2xl font-semibold">42%</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Increase in engagement
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-semibold">3.2x</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Faster content workflow
                        </p>
                      </div>
                    </div>

                    <Button className="mt-8 w-fit" variant="outline">
                      <Link href="/contact">
                        View case study
                        <ExternalLink />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* More Work */}
        <section className="bg-muted/30 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    More work
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                    More ideas.
                    <br />
                    <span className="font-serif italic">More impact.</span>
                  </h2>
                </div>

                <p className="max-w-md text-muted-foreground">
                  Different industries, different challenges, one consistent
                  goal: creating work that has a reason to exist.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2">
              {moreProjects.map((project, index) => (
                <RevealItem key={project.title}>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-muted"
                  >
                    <div>
                      <p className="text-sm text-muted-foreground">
                        0{index + 1} / {project.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex size-11 items-center justify-center rounded-full border border-border transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Client perspective
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  Good work speaks.
                  <br />
                  <span className="font-serif italic">
                    Great clients do too.
                  </span>
                </h2>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <RevealItem key={testimonial.name}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="text-primary">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      “{testimonial.quote}”
                    </p>

                    <div className="mt-8 border-t border-border pt-5">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-20 md:px-6 md:pb-28">
          <Reveal>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-24">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Have something in mind?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Let’s create something
                <span className="font-serif italic"> worth remembering.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                Tell us what you’re building, where you’re going, and what you
                need help with.
              </p>

              <Button size="lg" className="mt-8">
                <Link href="/book-a-call">
                  Start a conversation
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </main>
    </SmoothScroll>
  );
}
