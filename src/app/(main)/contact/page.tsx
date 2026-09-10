"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  Clock3,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    question: "What should I include in my message?",
    answer:
      "A brief overview of your project, what you need help with, your goals, and any important timeline or budget information is enough to get started.",
  },
  {
    question: "How quickly will you respond?",
    answer:
      "We typically respond within 1–2 business days. If your project sounds like a good fit, we'll follow up with the next steps.",
  },
  {
    question: "I'm not sure what service I need. Can I still contact you?",
    answer:
      "Absolutely. Tell us what you're trying to achieve and we'll help you figure out the right direction.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes. Rivozen works remotely with clients and teams around the world.",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "We read your message",
    description:
      "We'll take a look at your project, goals, and what you're looking to achieve.",
  },
  {
    number: "02",
    title: "We get back to you",
    description:
      "We'll reply with any questions and suggest the best way to move forward.",
  },
  {
    number: "03",
    title: "We start the conversation",
    description:
      "If it makes sense, we'll schedule a quick call and discuss your project in more detail.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this to your backend / email service later.
    console.log(formData);
  };

  const scrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SmoothScroll>
      <main className="overflow-hidden">
        {/* ================================================================ */}
        {/* HERO                                                             */}
        {/* ================================================================ */}

        <section
          id="top"
          className="relative overflow-hidden px-4 pt-32 pb-20 md:px-6 md:pt-44 md:pb-28"
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
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground md:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Get in touch
            </motion.div>

            <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
              {["Have a", "project", "in mind?"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease,
                    delay: 0.08 * i,
                  }}
                  className={`mr-3 inline-block ${
                    i === 2 ? "font-serif italic text-primary" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease,
                delay: 0.32,
              }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              Tell us a little about what you&apos;re building, what you need,
              and where you want to go. We&apos;ll take it from there.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease,
                delay: 0.4,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button type="button" size="lg" onClick={scrollToContact}>
                Start a conversation
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>

              <Button
                type="button"
                size="lg"
                variant="outline"
                // asChild={false}
                onClick={() => {
                  window.location.href = "/book-a-call";
                }}
              >
                Book a call
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* CONTACT FORM                                                      */}
        {/* ================================================================ */}

        <section
          id="contact-form"
          className="scroll-mt-24 px-4 pb-20 md:px-6 md:pb-28"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
                  {/* Left */}
                  <div className="relative overflow-hidden border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
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
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                        Let&apos;s talk
                      </p>

                      <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                        Let&apos;s make something{" "}
                        <span className="font-serif italic">great.</span>
                      </h2>

                      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                        Have an idea, a project, or a design challenge? Send us
                        a message and we&apos;ll get back to you with the next
                        steps.
                      </p>

                      <div className="mt-10 space-y-7">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                            <Mail className="h-4 w-4 text-primary" />
                          </div>

                          <div>
                            <p className="text-sm font-medium">Email</p>

                            <a
                              href="mailto:hello@rivozen.com"
                              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              hello@rivozen.com
                            </a>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                            <Clock3 className="h-4 w-4 text-primary" />
                          </div>

                          <div>
                            <p className="text-sm font-medium">Response time</p>

                            <p className="mt-1 text-sm text-muted-foreground">
                              Usually within 1–2 business days
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                            <MapPin className="h-4 w-4 text-primary" />
                          </div>

                          <div>
                            <p className="text-sm font-medium">
                              Working remotely
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                              Available for clients worldwide
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 border-t border-border pt-6">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          Prefer a conversation?
                        </p>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          If you&apos;d rather talk through your project, you
                          can book a 15-minute discovery call.
                        </p>

                        <Link
                          href="/book-a-call"
                          className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                        >
                          Book a 15-minute call
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="mb-8">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                        Start a project
                      </p>

                      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                        Tell us about it.
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                          >
                            Name
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                          >
                            Email
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            className="h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-sm font-medium"
                        >
                          Company
                          <span className="ml-1 text-muted-foreground">
                            (optional)
                          </span>
                        </label>

                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="service"
                            className="mb-2 block text-sm font-medium"
                          >
                            What can we help with?
                          </label>

                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="h-11 w-full appearance-none rounded-lg border border-border bg-background px-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                          >
                            <option value="">Select a service</option>
                            <option value="brand">Brand identity</option>
                            <option value="web">Web design</option>
                            <option value="product">Product / UI design</option>
                            <option value="ongoing">
                              Ongoing design support
                            </option>
                            <option value="other">Something else</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="budget"
                            className="mb-2 block text-sm font-medium"
                          >
                            Budget
                            <span className="ml-1 text-muted-foreground">
                              (optional)
                            </span>
                          </label>

                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="h-11 w-full appearance-none rounded-lg border border-border bg-background px-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                          >
                            <option value="">Select a range</option>
                            <option value="under-1000">Under $1,000</option>
                            <option value="1000-3000">$1,000 – $3,000</option>
                            <option value="3000-5000">$3,000 – $5,000</option>
                            <option value="5000-plus">$5,000+</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-sm font-medium"
                        >
                          Tell us about your project
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="A little about your project, goals, timeline, or anything else we should know..."
                          className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-3 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto"
                        >
                          Send inquiry
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-xs leading-relaxed text-muted-foreground">
                        By submitting this form, you&apos;re simply starting a
                        conversation. No commitment required.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================ */}
        {/* WHAT HAPPENS NEXT                                                 */}
        {/* ================================================================ */}

        <section className="border-y border-border px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  What happens next
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  From your message to{" "}
                  <span className="font-serif italic">the next step.</span>
                </h2>

                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  No complicated process. Just a straightforward conversation
                  about what you&apos;re building.
                </p>
              </div>
            </Reveal>

            <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
              {nextSteps.map((step) => (
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

        {/* ================================================================ */}
        {/* BOOK A CALL                                                       */}
        {/* ================================================================ */}

        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-0">
                  <Image
                    src="/bg-gradient.svg"
                    alt=""
                    fill
                    className="object-cover opacity-70"
                  />

                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />
                </div>

                <div className="relative px-6 py-16 text-center md:px-10 md:py-20">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Prefer to talk?
                  </p>

                  <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                    Sometimes it&apos;s easier to{" "}
                    <span className="font-serif italic text-primary">
                      talk.
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    Book a 15-minute discovery call and tell us what you&apos;re
                    working on. No pressure, just a conversation.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button
                      type="button"
                      size="lg"
                      onClick={() => {
                        window.location.href = "/book-a-call";
                      }}
                    >
                      Book a 15-minute call
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================ */}
        {/* FAQ                                                               */}
        {/* ================================================================ */}

        <section className="px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                  FAQ
                </p>

                <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                  A few quick answers.
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
                  Everything you need to know before getting in touch.
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

        {/* ================================================================ */}
        {/* FINAL CTA                                                         */}
        {/* ================================================================ */}

        <section className="px-4 pb-24 md:px-6 md:pb-32">
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
                </div>

                <div className="relative mx-auto max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    Get started
                  </p>

                  <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                    Good things start with a{" "}
                    <span className="font-serif italic text-primary">
                      conversation.
                    </span>
                  </h2>

                  <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    Tell us what you&apos;re working on and let&apos;s figure
                    out where to take it.
                  </p>

                  <div className="mt-8 flex justify-center">
                    <Button type="button" size="lg" onClick={scrollToContact}>
                      Start a conversation
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
