"use client";

import BookCalenderSection from "@/components/custom/BookACallPage/BookCalenderSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  MessageCircle,
  Sparkles,
  Video,
} from "lucide-react";

import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";

const services = [
  "Brand Identity",
  "Web Design",
  "UI/UX Design",
  "Social Media",
  "Marketing Design",
  "Product Design",
];

const steps = [
  {
    number: "01",
    title: "Tell us about your project",
    description:
      "Share what you're building, where you're stuck, and what you'd like to achieve.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Explore the possibilities",
    description:
      "We'll talk through your goals and figure out where our design team can add the most value.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Plan your next step",
    description:
      "If we're a good fit, we'll walk you through how we can work together.",
    icon: ArrowUpRight,
  },
];

const testimonials = [
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
];

const faqs = [
  {
    question: "Is the discovery call free?",
    answer:
      "Yes. The initial 30-minute discovery call is completely free and comes with no commitment.",
  },
  {
    question: "How long is the call?",
    answer:
      "The call typically takes around 30 minutes. We keep it focused so we can understand your needs without taking too much of your time.",
  },
  {
    question: "What should I prepare before the call?",
    answer:
      "Nothing formal is required. It's helpful to have an idea of what you're building, your biggest design challenges, and what you'd like to accomplish.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "We work across branding, websites, UI/UX, product design, social content, marketing materials, and ongoing creative support.",
  },
  {
    question: "What happens after the call?",
    answer:
      "We'll summarize what we discussed, recommend the best next step, and explain how our design subscription can fit into your workflow if we're a good match.",
  },
];

function clean(text: string) {
  return text.replace(/&apos;/g, "\u2019");
}

export default function BookCall() {
  const [selectedDate, setSelectedDate] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:30 AM");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const dates = [
    { day: "MON", date: "21" },
    { day: "TUE", date: "22" },
    { day: "WED", date: "23" },
    { day: "THU", date: "24" },
    { day: "FRI", date: "25" },
  ];

  const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-4 pb-16 pt-24 md:px-6 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Book a call
              </p>

              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                Let&apos;s talk about your{" "}
                <span className="font-serif italic">next project.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                Tell us what you&apos;re working on, where you&apos;re stuck,
                and what you want to achieve. We&apos;ll explore how our design
                team can help.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                  <Clock3 className="h-4 w-4 text-primary" />
                  30-minute call
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                  <Video className="h-4 w-4 text-primary" />
                  Video call
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  No commitment
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          BOOKING CARD
      ========================================================= */}
      <section className="px-4 pb-24 md:px-6 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* Left */}
                <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background">
                    <CalendarDays className="h-5 w-5 text-primary" />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                    Schedule a discovery call
                  </h2>

                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Pick a time that works for you. We&apos;ll use the call to
                    understand your goals and see if we&apos;re a good fit.
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Understand your design needs",
                      "Answer your questions",
                      "Discuss timelines and priorities",
                      "Explore how we can work together",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3 w-3" />
                        </span>

                        <span className="text-sm text-foreground/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-border pt-6">
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Meeting details
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Clock3 className="h-4 w-4 text-primary" />
                        30 minutes
                      </div>

                      <div className="flex items-center gap-3 text-sm">
                        <Video className="h-4 w-4 text-primary" />
                        Google Meet
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right / Calendar */}
                <div className="p-6 md:p-8 lg:p-10">
                  <div>
                    <p className="text-sm font-medium">Choose a date</p>

                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {dates.map((date, index) => {
                        const active = selectedDate === index;

                        return (
                          <button
                            key={date.date}
                            type="button"
                            onClick={() => setSelectedDate(index)}
                            className={`rounded-xl border px-2 py-4 text-center transition-all ${
                              active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:bg-muted"
                            }`}
                          >
                            <span className="block text-[10px] font-medium uppercase tracking-wider opacity-70">
                              {date.day}
                            </span>

                            <span className="mt-1 block text-lg font-semibold">
                              {date.date}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-medium">Available times</p>

                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {times.map((time) => {
                        const active = selectedTime === time;

                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                              active
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:bg-muted"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Continue with {selectedTime}
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.button>

                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    You&apos;ll confirm your details on the next step.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHAT HAPPENS
      ========================================================= */}
      <section className="border-y border-border bg-muted/30 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                What to expect
              </p>

              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                A simple conversation,{" "}
                <span className="font-serif italic">no sales pitch.</span>
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <RevealItem
                  key={step.number}
                  className="rounded-2xl border border-border bg-card p-6 md:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium text-primary">
                      {step.number}
                    </span>

                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <h3 className="mt-10 text-xl font-medium">{step.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                What we can help with
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Bring us your{" "}
                <span className="font-serif italic">biggest ideas.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                Whether you need a complete brand identity or ongoing design
                support, we can help bring your ideas to life.
              </p>
            </div>
          </Reveal>

          <RevealStagger className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem
                key={service}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-5 transition-colors hover:bg-muted/50"
              >
                <span className="font-medium">{service}</span>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section className="px-4 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                From our clients
              </p>

              <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Good work speaks{" "}
                <span className="font-serif italic">for itself.</span>
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <RevealItem
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <p className="flex-1 text-pretty leading-relaxed text-foreground/90">
                  “{clean(testimonial.quote)}”
                </p>

                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium">{testimonial.name}</p>

                  <p className="text-sm text-muted-foreground">
                    {clean(testimonial.role)}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="border-t border-border px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                FAQ
              </p>

              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Before you <span className="font-serif italic">book.</span>
              </h2>
            </div>
          </Reveal>

          <RevealStagger className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <RevealItem
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-muted/40 md:px-7 md:py-6"
                  >
                    <span className="font-medium md:text-lg">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border"
                    >
                      <ChevronDown className="h-4 w-4" />
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
                          height: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-6 pb-6 pt-5 md:px-7">
                          <p className="leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-4 pb-24 pt-8 md:px-6 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-10 md:py-24">
              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Ready when you are
                </p>

                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                  Have a project in{" "}
                  <span className="font-serif italic">mind?</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  Let&apos;s talk about what you&apos;re building and find out
                  how we can help.
                </p>

                <motion.a
                  href="#booking"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
                >
                  Book your call
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

// export default function BookACall() {
//   return (
//     <>
//       <BookCalenderSection />
//     </>
//   );
// }
