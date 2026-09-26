"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  Palette,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const plans = [
  {
    name: "Standard",
    monthly: 2995,
    yearly: 2495,
    desc: "One request at a time. Perfect for growing teams.",
    features: [
      "One active request",
      "Avg. 2-day delivery",
      "Unlimited brands",
      "Unlimited revisions",
      "Source files included",
    ],
    featured: false,
  },
  {
    name: "Pro",
    monthly: 4995,
    yearly: 4295,
    desc: "Two requests at a time. For fast-moving teams.",
    features: [
      "Two active requests",
      "Avg. next-day delivery",
      "Dedicated designer",
      "Unlimited brands & revisions",
      "Motion & illustration",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Custom",
    monthly: null,
    yearly: null,
    desc: "A scaled creative team built around your workflow.",
    features: [
      "Multiple active requests",
      "Dedicated design team",
      "Project manager",
      "Slack collaboration",
      "Custom onboarding",
    ],
    featured: false,
  },
];

const included = [
  {
    icon: Palette,
    title: "Professional creative work",
    description:
      "From brand assets and social content to UI, illustration, and motion.",
  },
  {
    icon: RefreshCw,
    title: "Unlimited revisions",
    description:
      "Keep refining your work until it feels right and meets your goals.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    description:
      "Stay productive with focused delivery times and a streamlined workflow.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    description:
      "Simple, direct communication without unnecessary meetings or complexity.",
  },
  {
    icon: Users,
    title: "Flexible collaboration",
    description: "Work with Rivozen as an extension of your existing team.",
  },
  {
    icon: Check,
    title: "Source files included",
    description:
      "Get the files you need to use, edit, and manage your creative work.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your plan",
    description:
      "Pick the level of creative support that best fits your team's current needs.",
  },
  {
    number: "02",
    title: "Send your request",
    description:
      "Share your brief, references, goals, and anything else that helps us understand the task.",
  },
  {
    number: "03",
    title: "We create",
    description:
      "Our designer works on your request and keeps the process moving with focused execution.",
  },
  {
    number: "04",
    title: "Review & refine",
    description:
      "Give us feedback and we'll make the necessary revisions until the work is ready.",
  },
];

const comparisons = [
  {
    feature: "Active requests",
    standard: "1",
    pro: "2",
    custom: "Multiple",
  },
  {
    feature: "Avg. delivery",
    standard: "2 days",
    pro: "Next day",
    custom: "Custom",
  },
  {
    feature: "Unlimited brands",
    standard: true,
    pro: true,
    custom: true,
  },
  {
    feature: "Unlimited revisions",
    standard: true,
    pro: true,
    custom: true,
  },
  {
    feature: "Source files",
    standard: true,
    pro: true,
    custom: true,
  },
  {
    feature: "Dedicated designer",
    standard: false,
    pro: true,
    custom: true,
  },
  {
    feature: "Motion & illustration",
    standard: false,
    pro: true,
    custom: true,
  },
  {
    feature: "Priority support",
    standard: false,
    pro: true,
    custom: true,
  },
  {
    feature: "Project manager",
    standard: false,
    pro: false,
    custom: true,
  },
  {
    feature: "Slack collaboration",
    standard: false,
    pro: false,
    custom: true,
  },
  {
    feature: "Custom onboarding",
    standard: false,
    pro: false,
    custom: true,
  },
];

const oneOffProjects = [
  "Brand identity",
  "Website design",
  "Landing pages",
  "UI/UX design",
  "Social media design",
  "Illustration & motion",
];

const faqs = [
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. Our plans are designed to stay flexible, so you can cancel when you no longer need ongoing creative support.",
  },
  {
    question: "How does the active request system work?",
    answer:
      "You can submit as many requests as you need, but the number of requests being actively worked on at the same time depends on your plan.",
  },
  {
    question: "How quickly will I receive my designs?",
    answer:
      "Standard requests typically average around 2 days on the Standard plan and next-day delivery on Pro. More complex projects may require additional time.",
  },
  {
    question: "Are revisions really unlimited?",
    answer:
      "Yes. We keep refining the work based on your feedback until the requested design is ready.",
  },
  {
    question: "Do you offer one-time projects?",
    answer:
      "Yes. If a subscription isn't right for you, we can discuss a one-off project based on your specific requirements.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. As your creative needs grow, you can move to a plan with more capacity and support.",
  },
  {
    question: "What's included in the Custom plan?",
    answer:
      "Custom is designed around your workflow. It can include multiple active requests, a dedicated design team, project management, Slack collaboration, and custom onboarding.",
  },
  {
    question: "Not sure which plan is right for me?",
    answer:
      "That's exactly what a discovery call is for. Tell us what you're working on and we'll help you figure out the best way to work together.",
  },
];

function PriceCards() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      id="plans"
      className="scroll-mt-24 border-y border-border px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Plans & pricing
          </p>

          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Choose the right level of{" "}
            <span className="font-serif italic text-primary">support.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Simple monthly pricing with no complicated contracts. Choose the
            plan that matches the pace and scale of your creative needs.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-lg border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                !yearly
                  ? "bg-primary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-colors ${
                yearly
                  ? "bg-primary text-secondary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Yearly{" "}
              <span
                className={
                  yearly ? "text-secondary-foreground/80" : "text-primary"
                }
              >
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
                  ? "border-primary bg-primary text-secondary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium">{plan.name}</h3>

                {plan.featured && (
                  <span className="rounded-full border border-white/50 bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                )}
              </div>

              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.featured
                    ? "text-secondary-foreground/80"
                    : "text-muted-foreground"
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
                          ? "text-secondary-foreground/70"
                          : "text-muted-foreground"
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

              <Button
                type="button"
                variant={plan.featured ? "secondary" : "default"}
                size="lg"
                className="mt-6 w-full"
                onClick={() => {
                  window.location.href = plan.monthly
                    ? "/contact"
                    : "/book-a-call";
                }}
              >
                {plan.monthly ? "Get started" : "Book a call"}
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured
                          ? "text-secondary-foreground"
                          : "text-primary"
                      }`}
                    />

                    <span
                      className={
                        plan.featured ? "text-secondary-foreground/90" : ""
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need something different?{" "}
            <button
              type="button"
              onClick={() => {
                window.location.href = "/book-a-call";
              }}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Let&apos;s talk about a custom plan.
            </button>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToPlans = () => {
    document.getElementById("plans")?.scrollIntoView({
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
                Pricing
              </motion.div>

              <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                {["Simple pricing.", "Serious"].map((word, index) => (
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
                  creative work.
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
                One flat monthly fee for ongoing creative support. No confusing
                quotes, no surprise fees, and no unnecessary complexity.
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
                  Flexible plans
                </div>

                <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                  Unlimited revisions
                </div>

                <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                  No surprises
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
                <Button type="button" size="lg" onClick={scrollToPlans}>
                  View plans
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={goToBooking}
                >
                  Talk to us
                </Button>
              </motion.div>
            </Reveal>
          </div>
        </section>

        {/* PRICING */}
        <PriceCards />

        {/* INCLUDED */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  What&apos;s included
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  Everything you need to{" "}
                  <span className="font-serif italic text-primary">
                    keep creating.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Every Rivozen plan is built around quality work, responsive
                  collaboration, and a process that keeps your team moving.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {included.map((item) => {
                const Icon = item.icon;

                return (
                  <RevealItem
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>

                    <h3 className="mt-7 text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="border-y border-border bg-muted/20 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    How it works
                  </p>

                  <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                    Simple from{" "}
                    <span className="font-serif italic text-primary">
                      start to finish.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                    No complicated onboarding or lengthy approval processes.
                    Send us what you need and we'll take it from there.
                  </p>
                </div>

                <RevealStagger className="grid gap-3">
                  {steps.map((step) => (
                    <RevealItem
                      key={step.number}
                      className="flex gap-5 rounded-2xl border border-border bg-card p-5 md:p-6"
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

        {/* COMPARISON */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Compare plans
              </p>

              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Find the right{" "}
                <span className="font-serif italic text-primary">fit.</span>
              </h2>
            </Reveal>

            <Reveal className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-4 border-b border-border bg-muted/40">
                  <div className="p-5 text-sm font-medium">Features</div>

                  <div className="p-5 text-center text-sm font-medium">
                    Standard
                  </div>

                  <div className="bg-primary p-5 text-center text-sm font-medium text-secondary-foreground">
                    Pro
                  </div>

                  <div className="p-5 text-center text-sm font-medium">
                    Custom
                  </div>
                </div>

                {comparisons.map((item) => (
                  <div
                    key={item.feature}
                    className="grid grid-cols-4 border-b border-border last:border-b-0"
                  >
                    <div className="p-5 text-sm font-medium">
                      {item.feature}
                    </div>

                    <ComparisonValue value={item.standard} />

                    <div className="bg-primary/5">
                      <ComparisonValue value={item.pro} />
                    </div>

                    <ComparisonValue value={item.custom} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ONE-OFF PROJECTS */}
        <section className="border-y border-border px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-10 lg:p-14">
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/bg-gradient.svg"
                    alt=""
                    fill
                    className="object-cover opacity-40"
                  />

                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
                </div>

                <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                      One-off projects
                    </p>

                    <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                      Not looking for an ongoing{" "}
                      <span className="font-serif italic text-primary">
                        plan?
                      </span>
                    </h2>

                    <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                      No problem. We also work with clients on individual
                      projects when a monthly subscription isn't the right fit.
                    </p>

                    <div className="mt-7">
                      <Button type="button" size="lg" onClick={goToBooking}>
                        Discuss a project
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <RevealStagger className="grid gap-3 sm:grid-cols-2">
                    {oneOffProjects.map((project) => (
                      <RevealItem
                        key={project}
                        className="flex items-center gap-3 rounded-xl border border-border bg-background/80 p-4 backdrop-blur-sm"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>

                        <span className="text-sm font-medium">{project}</span>
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  Questions about{" "}
                  <span className="font-serif italic text-primary">
                    pricing?
                  </span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Everything you need to know before choosing a plan.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <RevealItem
                    key={faq.question}
                    className="border-b border-border"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-medium md:text-lg">
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-10 leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* FINAL CTA */}
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
                    Let&apos;s work together
                  </p>

                  <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                    Not sure which plan is
                    <span className="block font-serif italic text-primary">
                      right for you?
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    Tell us what you&apos;re working on and we&apos;ll help you
                    figure out the best way to work together.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button type="button" size="lg" onClick={goToBooking}>
                      Book a 15-minute call
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

function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return (
      <div className="flex items-center justify-center p-5">
        {value ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-4 w-4 text-primary" />
          </div>
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-5 text-sm text-muted-foreground">
      {value}
    </div>
  );
}
