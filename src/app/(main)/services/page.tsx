"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  Globe,
  Palette,
  PenTool,
  Sparkles,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealItem, RevealStagger } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Build a visual identity that feels distinctive, consistent, and aligned with where your brand is going.",
    icon: Palette,
    features: [
      "Logo & visual identity",
      "Typography & color systems",
      "Brand guidelines",
      "Marketing collateral",
    ],
    bgColor: "bg-[var(--secondary-purple)]",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Create digital experiences that look exceptional, communicate clearly, and turn attention into action.",
    icon: Globe,
    features: [
      "Website design",
      "Landing pages",
      "Responsive experiences",
      "Design systems",
    ],
    bgColor: "bg-[var(--secondary-blue)]",
  },
  {
    number: "03",
    title: "Product & UI/UX",
    description:
      "Turn complex products into intuitive experiences that are easy to understand and enjoyable to use.",
    icon: Blocks,
    features: [
      "Product interfaces",
      "UX flows",
      "Wireframes & prototypes",
      "Component systems",
    ],
    bgColor: "bg-[var(--secondary-green)]",
  },
  {
    number: "04",
    title: "Social & Content",
    description:
      "Give your content a recognizable visual language that makes every post feel like part of the same brand.",
    icon: Sparkles,
    features: [
      "Social media design",
      "Campaign creative",
      "Content systems",
      "Ad creative",
    ],
    bgColor: "bg-[var(--secondary-rose)]",
  },
  {
    number: "05",
    title: "Illustration & Motion",
    description:
      "Add personality and movement to your brand through custom illustration, animation, and visual storytelling.",
    icon: PenTool,
    features: [
      "Custom illustration",
      "Motion graphics",
      "Animated assets",
      "Visual storytelling",
    ],
    bgColor: "bg-[var(--secondary-yellow)]",
  },
];

const problems = [
  {
    title: "Your brand feels inconsistent.",
    solution:
      "We build a clear brand identity and visual system so your business looks intentional and professional across every channel - web, social, SEO and ads.",
  },
  {
    title: "Your website isn't converting.",
    solution:
      "We combine web design, development, and CRO to simplify the experience, strengthen your visual hierarchy, and turn more visitors into leads and sales.",
  },
  {
    title: "Your marketing isn't driving growth.",
    solution:
      "We become an extension of your team - running SEO, GEO, AEO, paid advertising, and content & creative campaigns that deliver measurable, sustainable growth.",
  },
  {
    title: "You have a great idea but don't know where to start.",
    solution:
      "We turn early ideas into a clear business growth strategy and a practical roadmap. aligning design, marketing, and execution from day one. ",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, goals, and current digital presence. No obligation to move forward.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We build a tailored growth strategy identifying the right channels, from SEO to paid advertising, based on your business goals and target market.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We turn strategy into execution - website design, branding, and content built with a focus on clarity, conversion, and impact.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We collaborate, test, and optimize continuously refining performance across design & development, marketing, and content until everything delivers results.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "You get transparent reporting on traffic, leads, Sales and ROI polished final assets and a clear path to sustainable growth. ",
  },
];

const expectations = [
  "Clear communication",
  "Data driven strategy",
  "Measurable results",
  "Reliable timelines",
  "Responsive collaboration",
  "Transparent reporting",
];

const faqs = [
  {
    question: "Do you work with startups and small teams?",
    answer:
      "Yes. We work with startups, small teams, and growing businesses across ecommerce and local industries - building digital strategies that fit your budget and scale as you grow. ",
  },
  {
    question: "Can I hire Rivozen for a single project?",
    answer:
      "Yes. Whether you need a one-off website, brand identity, or marketing campaign, or ongoing support across SEO, GEO, AEO, paid advertising, and content, we can work with you from strategy to final delivery. ",
  },
  {
    question: "Can you work with an existing brand?",
    answer:
      "Absolutely. We can refresh your current brand identity, improve your website design, or build on your existing marketing to drive better, measurable results.",
  },
  {
    question: "How does the process start?",
    answer:
      "It starts with a free strategy consultation, where we learn about your business, audience, and goals - with no obligation to move forward.",
  },
  {
    question: "What digital services does Rivozen offer?",
    answer:
      "We offer Web Design & Development, SEO, Paid Advertising, CRO, Content & Creative, Email & SMS Marketing, Social Media Marketing, and Business Growth Strategy - all under one roof. ",
  },
  {
    question: "Do you offer both SEO and paid advertising together?",
    answer:
      "Yes. We often combine SEO and paid advertising to drive both long-term organic growth and immediate, qualified traffic and leads.",
  },
  {
    question: "How long does it take to see SEO and marketing results?",
    answer:
      "Paid advertising can generate leads within days, while SEO typically shows measurable improvements in rankings and organic traffic within 3–6 months, depending on your industry and competition. ",
  },
  {
    question: "Will I own my website, content, and ad accounts?",
    answer:
      "Yes. You retain full ownership of your website, content, source files, and advertising accounts - there's no vendor lock-in.",
  },
  {
    question: "Do you work with businesses in specific locations, or globally?",
    answer:
      "We work with ecommerce brands and local businesses both locally and globally, adapting our strategy to your specific market and audience.",
  },
  // { question: "", answer: "" },
];

export default function ServicesPage() {
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
                What we do
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                Digital solutions
                <br />
                <span className="font-serif italic text-primary">
                  built to grow.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                From digital marketing, web design and development to SEO, paid
                advertising, and content & creative. we help ecommerce brands
                and local businesses turn strategy into measurable growth.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg">
                  <Link href="#services">
                    Explore services
                    <ArrowRight />
                  </Link>
                </Button>

                <Button variant="outline" size="lg">
                  <Link href="/book-a-call">
                    Book a Free Consultation <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Core services
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  Everything you need to
                  <span className="font-serif italic"> move forward.</span>
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  Flexible creative support for brands that want to look better,
                  communicate better, and grow with confidence.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <RevealItem
                    key={service.title}
                    className={`${index === services.length - 1 ? "md:col-span-2" : ""}`}
                  >
                    <div
                      className={`group h-full rounded-2xl border border-border p-7 transition-colors hover:bg-muted md:p-8 ${service.bgColor}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-background">
                          <Icon className="size-5" />
                        </div>

                        <span className="text-sm text-muted-foreground">
                          {service.number}
                        </span>
                      </div>

                      <h3 className="mt-7 text-2xl font-semibold">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <ArrowRight className="size-3" />
                            </span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* Problems / Solutions */}
        <section className="bg-muted/30 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    What can we help with?
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                    Start with the
                    <span className="font-serif italic"> Challenge.</span>
                  </h2>

                  <p className="mt-5 leading-relaxed text-muted-foreground">
                    You don't need to know exactly which digital service you
                    need. Tell us what's holding your growth back, and we'll
                    help figure out the right strategy. From web design &
                    development to Digital marketing, SEO and paid advertising.
                  </p>
                </div>

                <div className="grid gap-4">
                  {problems.map((problem, index) => (
                    <div
                      key={problem.title}
                      className="rounded-2xl border border-border bg-card p-6"
                    >
                      <div className="flex gap-5">
                        <span className="text-sm text-primary">
                          0{index + 1}
                        </span>

                        <div>
                          <h3 className="text-xl font-semibold">
                            {problem.title}
                          </h3>

                          <p className="mt-2 leading-relaxed text-muted-foreground">
                            {problem.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Our process
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  Simple process.
                  <br />
                  <span className="font-serif italic">Measurable results.</span>
                </h2>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  No unnecessary complexity. Just a clear digital strategy
                  process designed to keep your business growth moving.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-14 grid gap-0 md:grid-cols-5">
              {process.map((step) => (
                <RevealItem key={step.number}>
                  <div className="border-l border-border p-6 first:border-l-0">
                    <span className="text-sm font-medium text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Why Rivozen */}
        <section className="px-4 pb-20 md:px-6 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[420px]">
                    <Image
                      src="/work-brand.png"
                      alt="Rivozen brand identity work"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-12 lg:p-16">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      Why Rivozen
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                      A digital growth partner,{" "}
                      <span className="font-serif italic">
                        {" "}
                        not just a vendor.
                      </span>
                    </h2>

                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      We care about the strategy behind the work, not just how
                      it looks. Every decision - from web design & development
                      to SEO, SMM, Content & creative and paid advertising - is
                      made to help your business grow with confidence and
                      connect with the right customers.{" "}
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {expectations.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="size-3.5" />
                          </span>

                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Ways to Work Together */}
        <section className="bg-muted/30 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Ways to work together
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  The right setup for{" "}
                  <span className="font-serif italic">your online growth.</span>
                </h2>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-5 md:grid-cols-2">
              <RevealItem>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Blocks className="size-5" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    Ongoing Digital Support{" "}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    A flexible growth partner for businesses that need
                    consistent SEO, AEO, GEO, design & development and marketing
                    support - without the cost and complexity of building an
                    internal team.
                  </p>

                  <Link
                    href="/pricing"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Explore pricing
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </RevealItem>

              <RevealItem>
                <div className="h-full rounded-2xl border border-border bg-card p-8">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Video className="size-5" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold">
                    One-off Projects{" "}
                  </h3>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Need a website, brand identity, or a specific marketing
                    campaign? We can work with you from strategy to final
                    delivery.
                  </p>

                  <Link
                    href="/book-a-call"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Discuss a project
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </RevealItem>
            </RevealStagger>
          </div>
        </section>

        {/* Selected Work */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                    Selected work
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                    See the work
                    <span className="font-serif italic"> in action.</span>
                  </h2>
                </div>

                <Button variant="outline">
                  <Link href="/work">
                    View all work
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2">
              <RevealItem>
                <Link href="/work" className="group block">
                  <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-border">
                    <Image
                      src="/work-brand.png"
                      alt="Northwind brand identity"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Northwind</h3>
                      <p className="text-sm text-muted-foreground">
                        Brand Identity
                      </p>
                    </div>

                    <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                  </div>
                </Link>
              </RevealItem>

              <RevealItem>
                <Link href="/work" className="group block">
                  <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-border">
                    <Image
                      src="/work-web.png"
                      alt="Flowstate web design"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Flowstate</h3>
                      <p className="text-sm text-muted-foreground">
                        Web & Product
                      </p>
                    </div>

                    <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                  </div>
                </Link>
              </RevealItem>
            </RevealStagger>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  A few things you
                  <span className="font-serif italic">
                    {" "}
                    might be wondering.
                  </span>
                </h2>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((faq) => (
                <RevealItem key={faq.question}>
                  <details className="group p-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                      {faq.question}

                      <span className="text-2xl font-light text-muted-foreground transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <Reveal>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-12 md:py-24">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Let's work together
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Have a project?
                <br />
                <span className="font-serif italic">Let's make it happen.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                Tell us what you're working on and we'll figure out the best way
                to help.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg">
                  <Link href="/book-a-call">
                    Book a 15-minute call
                    <ArrowRight />
                  </Link>
                </Button>

                <Button variant="outline" size="lg">
                  <Link href="/contact">
                    Send a message
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </SmoothScroll>
  );
}
