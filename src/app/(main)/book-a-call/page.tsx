"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronsRight,
  Clock3,
  MessageCircle,
  Target,
  Video,
} from "lucide-react";

import Cal from "@calcom/embed-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";
import CommonHeroSection from "@/components/common/CommonHeroSection";
import CommonSection from "@/components/common/CommonSection";
import CommonCards from "@/components/common/CommonCards";
import { ClientsReviewsCards } from "../services/business-growth-strategy/page";
import CommonFaqSection from "@/components/common/CommonFaqSection";

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
              PICK A TIME
            </p>

            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Schedule Your Free 15-Minute{" "}
              <span className="font-serif italic">{"Strategy Call"}</span>
            </h2>

            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Pick a time that works for you. In 15 minutes, we will talk
              through your goals, look at where you are today, and see whether
              RivoZen is the right fit, with no pressure to buy.
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
                    loading="eager"
                  />

                  <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />
                </div>

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Video className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                    What happens in your 15 minutes
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A short, focused video call to understand your business,
                    answer your questions, and point you to the best next step.
                  </p>

                  {/* Details */}
                  <div className="mt-8 space-y-5">
                    <div className="flex gap-3">
                      <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-sm font-medium">15 minutes</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Short and focused, so it fits easily into your day
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Video className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-sm font-medium">
                          Google Meet video call
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          You will get the meeting link by email once you book
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-sm font-medium">No obligation</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Just an initial conversation, with no sales pressure
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Small note */}
                  <div className="mt-10 rounded-2xl bg-muted/50 p-5">
                    <p className="text-sm font-medium">
                      Not sure we are the right fit?
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      That is exactly what this call is for. Tell us what you
                      are working on, and we will tell you honestly whether we
                      can help.
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

        <CommonHeroSection
          smallHeading="Book a call"
          bigHeading={["Book a Free Strategy Call and Let’s Plan"]}
          bigHeadingItalic="Your Next Step"
          paragraph="Tell us what you are working on, where you are stuck, and what you want to achieve. In 15 minutes, RivoZen will help you see which channel to focus on first, whether that is SEO, ads, content, a new website, or automation."
          Children={
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
              className="flex flex-wrap gap-3"
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
                No obligation
              </div>
            </motion.div>
          }
          primaryBtn="Choose a time"
          primaryBtnLink="#booking"
          secondaryBtn="See Our Services"
          secondaryBtnLink="/services"
        ></CommonHeroSection>

        {/* ================================================================== */}
        {/* BOOKING                                                            */}
        {/* ================================================================== */}

        <BookingSection />

        {/* ================================================================== */}
        {/* WHAT HAPPENS                                                       */}
        {/* ================================================================== */}
        <CommonSection
          smallHeading="WHAT HAPPENS ON THE CALL"
          bigHeading="What to Expect From Your "
          bigHeadingItalic="Strategy Call"
          paragraph="No complicated process. In 15 minutes, we will learn about your business, talk through your goals, and agree on the best next step, whether that is working with us or not. "
          HeadingAlign="left"
          content={
            <CommonCards
              cards={[
                {
                  number: "01",
                  icon: MessageCircle,
                  title: "Tell us about your business",
                  description:
                    "When you book, share a quick overview of what you do, what you want to achieve, and where you feel stuck. This helps us come prepared and use your 15 minutes well.",
                },
                {
                  number: "02",
                  icon: Target,
                  title: "Talk through your goals",
                  description:
                    "On the call, we will discuss your priorities, challenges, and what a successful result looks like for you. We may ask about your website, current marketing, and budget range.",
                },
                {
                  number: "03",
                  icon: ChevronsRight,
                  title: "Leave with a clear next step",
                  description:
                    "You will finish with a clear idea of where to focus first. If we are a good fit, we will explain how we could help. If not, we will tell you honestly and point you in a better direction.",
                },
              ]}
            />
          }
        />

        {/* ================================================================== */}
        {/* TESTIMONIALS                                                       */}
        {/* ================================================================== */}
        <CommonSection
          smallHeading="CUSTOMER REVIEWS"
          bigHeading="What It’s Like to Work"
          bigHeadingItalic="With RivoZen 👇"
          paragraph="Ecommerce brands and local businesses come to RivoZen for clear advice, honest communication, and work they can measure. Here is what they say."
          HeadingAlign="center"
          content={<ClientsReviewsCards key={"reviews[book-a-call]"} />}
        />

        {/* ================================================================== */}
        {/* FAQ                                                                */}
        {/* ================================================================== */}
        <CommonFaqSection
          smallHeading="STRATEGY CALL FAQ"
          bigHeading="Before We"
          bigHeadingItalic="Talk"
          paragraph="A few quick answers to common questions about the free strategy call."
          faqList={[
            {
              answer: "How long is the call?",
              question:
                "The call is 15 minutes. That is long enough to understand your business and goals, and short enough to fit easily into your day. If we need more time, we can suggest a follow-up call.",
            },
            {
              answer: "What should I prepare before the call?",
              question:
                "You do not need to prepare much. It helps to have your website address, a rough idea of your goals, and any marketing you are already running, such as ads, email, or social media. If you have not started anything yet, that is completely fine.",
            },
            {
              answer: "Is the call free?",
              question:
                "Yes, the strategy call is free, and there is no obligation to work with us afterward. ",
            },
            {
              answer: "What happens after the call?",
              question:
                "After the call, we will send a short summary by email with the next step we discussed. If you want to go ahead, we will suggest a plan and quote. If not, there is no pressure and no follow-up chasing. ",
            },
            {
              answer: "Can I reschedule my call?",
              question:
                "Yes. Your booking confirmation email includes a link to reschedule or cancel, and you can do it any time before the call. If something comes up last minute, just let us know. ",
            },
            {
              answer: "Who will I speak with?",
              question:
                "You will speak with [a RivoZen strategist / the founder / a senior team member], not a salesperson reading a script.",
            },
            {
              answer: "Do I need to be ready to hire an agency?",
              question:
                "No. Many people book a call while they are still researching, and that is fine. We will give you honest advice on where to focus, whether or not you end up working with us.",
            },
            {
              answer: "What if I do not have a website or ad account yet?",
              question:
                "That is common for new businesses, and you can still book. We will talk about what to set up first and in what order, so you can start on a solid base. Our web design services and growth strategy can help if you want support.",
            },
          ]}
        />

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
                    loading="eager"
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
