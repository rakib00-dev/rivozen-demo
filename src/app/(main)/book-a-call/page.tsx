"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check, ChevronDown, Clock3, Video } from "lucide-react";

import Cal from "@calcom/embed-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";

const ease = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*                              PAGE DATA                                     */
/* -------------------------------------------------------------------------- */

const steps = [
  {
    number: "01",
    title: "Tell us about your project",
    description:
      "Give us a quick overview of what you're building, what you need, and where you're stuck.",
  },
  {
    number: "02",
    title: "Talk through your goals",
    description:
      "We'll discuss your priorities, ideas, challenges, and what a successful outcome looks like.",
  },
  {
    number: "03",
    title: "Find the right next step",
    description:
      "If we're a good fit, we'll explain how we can help and what working together could look like.",
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
      "Great value to pay a flat monthly fee and get an entire design team, instead of hiring one designer who would cost more.",
    name: "Joe Howard",
    role: "Founder, WP Buffs",
  },
  {
    quote:
      "They've consistently delivered across a variety of projects, from social graphics to UI design. Communication is smooth and everything just works.",
    name: "Andrei Tiburca",
    role: "Co-Founder, Video Deck",
  },
  {
    quote:
      "Switching to the dedicated designer plan gave us a steady flow of quality designs that align perfectly with our agency's needs.",
    name: "Jaylen Bledsoe",
    role: "CEO, The Potter's House",
  },
  {
    quote:
      "I've been very happy with the additional colleagues who assist with our design projects. The experience keeps us coming back.",
    name: "Jeanette Knutti",
    role: "CEO, Moxie Marketing",
  },
];

const faqs = [
  {
    question: "How long is the call?",
    answer:
      "The discovery call is 15 minutes. It's intentionally short and focused so we can understand what you're working on and determine whether we're a good fit.",
  },
  {
    question: "What should I prepare before the call?",
    answer:
      "Nothing formal is required. It helps to have a basic idea of what you're building, what you need help with, and any important deadlines or goals.",
  },
  {
    question: "Is the call free?",
    answer:
      "Yes. The initial 15-minute discovery call is completely free and there is no obligation to work together afterward.",
  },
  {
    question: "What happens after the call?",
    answer:
      "If we're a good fit, we'll recommend the most suitable way to work together and explain the next steps clearly.",
  },
  {
    question: "Can I reschedule my call?",
    answer:
      "Yes. Cal.com handles scheduling and allows you to manage your booked meeting, including rescheduling when available.",
  },
];

/* -------------------------------------------------------------------------- */
/*                              BOOKING SECTION                               */
/* -------------------------------------------------------------------------- */

function BookingSection() {
  return (
    <section
      id="booking"
      className="scroll-mt-24 bg-[#f7f5f2] px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal className="flex w-full justify-center text-center">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              Schedule a call
            </p>

            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Schedule a discovery call
            </h2>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Pick a time that works for you. The call takes just 15 minutes and
              is a simple way to talk through your project and see if Rivozen is
              the right fit.
            </p>
          </div>
        </Reveal>

        {/* Booking card */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              {/* Left information panel */}
              <div className="relative overflow-hidden border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
                {/* Background */}
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/bg-gradient.svg"
                    alt=""
                    fill
                    className="object-cover opacity-60"
                  />

                  <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />
                </div>

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Video className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    15-minute discovery call
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A quick conversation to understand your project, answer your
                    questions, and figure out the best way forward.
                  </p>

                  {/* Details */}
                  <div className="mt-8 space-y-5">
                    <div className="flex gap-3">
                      <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-sm font-medium">15 minutes</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Short, focused conversation
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Video className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-sm font-medium">Online meeting</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Meet remotely via video call
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-sm font-medium">No commitment</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Just an initial conversation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Small note */}
                  <div className="mt-10 rounded-2xl bg-muted/50 p-5">
                    <p className="text-sm font-medium">
                      Not sure if we&apos;re a fit?
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      That&apos;s exactly what the discovery call is for. Tell
                      us what you&apos;re working on and we&apos;ll take it from
                      there.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cal.com */}
              <div className="min-h-162.5 w-full bg-background sm:min-h-175">
                <Cal
                  namespace="15min"
                  calLink="rivozen/15min"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "650px",
                    overflow: "hidden",
                  }}
                  config={{
                    layout: "month_view",
                    useSlotsViewOnSmallScreen: "true",
                  }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function BookCall() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SmoothScroll>
      <main className="overflow-hidden">
        {/* ================================================================== */}
        {/* HERO                                                               */}
        {/* ================================================================== */}

        <section
          id="top"
          className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-44"
        >
          {/* Background */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <Image
              alt=""
              src="/bg-gradient.svg"
              width={0}
              height={0}
              className="h-full w-full object-cover"
              priority
            />

            <span className="absolute left-0 top-0 h-full w-svw bg-linear-to-b from-primary/10 to-primary/5" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease,
                }}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground md:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Book a call
              </motion.div>

              {/* Heading */}
              <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
                {["Let's talk about", "your next"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease,
                      delay: 0.08 * i,
                    }}
                    className="mr-3 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                    delay: 0.24,
                  }}
                  className="inline-block font-serif italic text-primary"
                >
                  project.
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.32,
                }}
                className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                Tell us what you&apos;re working on, where you&apos;re stuck,
                and what you want to achieve. We&apos;ll explore how Rivozen can
                help.
              </motion.p>

              {/* Pills */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.4,
                }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm">
                  <Clock3 className="h-4 w-4 text-primary" />
                  15-minute call
                </div>

                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm">
                  <Video className="h-4 w-4 text-primary" />
                  Video call
                </div>

                <div className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  No commitment
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease,
                  delay: 0.48,
                }}
                className="mt-8"
              >
                <Button type="button" size="lg" onClick={scrollToBooking}>
                  Choose a time
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================== */}
        {/* BOOKING                                                            */}
        {/* ================================================================== */}

        <BookingSection />

        {/* ================================================================== */}
        {/* WHAT HAPPENS                                                       */}
        {/* ================================================================== */}

        <section className="border-y border-border px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  What happens next
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  A simple{" "}
                  <span className="font-serif italic text-primary">
                    conversation.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  No complicated process. Just a short conversation to
                  understand where you are and where you want to go.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <RevealItem
                  key={step.number}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="text-sm font-medium text-primary">
                    {step.number}
                  </p>

                  <h3 className="mt-8 text-xl font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* ================================================================== */}
        {/* TESTIMONIALS                                                       */}
        {/* ================================================================== */}

        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Customer reviews
              </p>

              <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Why teams choose{" "}
                <span className="font-serif italic text-primary">Rivozen</span>
              </h2>
            </Reveal>

            <RevealStagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <RevealItem
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  {/* Stars */}
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

                  {/* Quote */}
                  <p className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
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

        {/* ================================================================== */}
        {/* FAQ                                                                */}
        {/* ================================================================== */}

        <section className="border-y border-border px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  Before we{" "}
                  <span className="font-serif italic text-primary">talk.</span>
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  A few quick answers to common questions about the discovery
                  call.
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
                        transition={{
                          duration: 0.2,
                        }}
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

        {/* ================================================================== */}
        {/* FINAL CTA                                                          */}
        {/* ================================================================== */}

        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 px-6 py-16 text-center md:px-10 md:py-24">
                {/* Background */}
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
                    Ready when you are
                  </p>

                  <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                    Have something
                    <span className="block font-serif italic text-primary">
                      in mind?
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    Let&apos;s spend 15 minutes talking about it. No pressure,
                    no complicated process - just a straightforward
                    conversation.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button size="lg" type="button" onClick={scrollToBooking}>
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

// export default function BookACall() {
//   return (
//     <>
//       <BookCalenderSection />
//     </>
//   );
// }
