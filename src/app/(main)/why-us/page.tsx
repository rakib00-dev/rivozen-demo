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
import CommonHeroSection from "@/components/common/CommonHeroSection";
import CommonSection from "@/components/common/CommonSection";
import CommonProcessSection from "@/components/common/CommonProcessSection";
import TwoSideCommonSection from "@/components/common/TwoSideCommonSection";
import { allColorsArray } from "@/utils/ColorsArray";
import CommonCta from "@/components/common/CommonCta";

const ease = [0.22, 1, 0.36, 1] as const;

const differentiators = [
  {
    number: "01",
    icon: Target,
    title: "Strategy Before Execution",
    description:
      "We start with your goals, audience, and challenges before deciding what to do. Every action has a clear purpose.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Solutions Built Around You",
    description:
      "From websites and SEO to paid advertising and creative services, we create solutions that fit your business instead of forcing you into a fixed formula.",
  },
  {
    number: "03",
    icon: Users,
    title: "Clear & Honest Communication",
    description:
      "You always know what we’re working on, why it matters, and what comes next. No confusing jargon or unnecessary complexity.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Focused on Meaningful Growth",
    description:
      "We focus on work that supports real business goals, better visibility, stronger customer experiences, and more opportunities to grow.",
  },
  {
    number: "05",
    icon: MessageCircle,
    title: "One Partner, Multiple Solutions",
    description:
      "Instead of managing multiple specialists, you can bring your digital needs together with one reliable partner.",
  },
  {
    number: "06",
    icon: Check,
    title: "Built for Long-Term Value",
    description:
      "We focus on creating digital assets and strategies that continue to support your business beyond a single campaign or project.",
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

        <CommonHeroSection
          smallHeading="Why Rivozen"
          bigHeading={["More than", "a digital"]}
          bigHeadingItalic="partner."
          paragraph="At Rivozen, we combine thoughtful design, clear communication, and focused execution to deliver custom digital solutions that help ecommerce brands and local businesses move forward with confidence."
          Children={
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease,
                delay: 0.4,
              }}
              className="flex flex-wrap gap-3"
            >
              <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                Strategy first
              </div>

              <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                Conversion Focused
              </div>

              <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
                Results Measured
              </div>
            </motion.div>
          }
          primaryBtn="Why choose us"
          primaryBtnLink="#difference"
          secondaryBtn="Book a call"
          secondaryBtnLink="/book-a-call"
        />

        {/* DIFFERENTIATORS */}
        <CommonSection
          smallHeading="What Makes Us Different"
          bigHeading="What Makes "
          bigHeadingItalic="Rivozen Different?"
          paragraph="We don’t believe in one size fits all solutions. Every business has different goals, challenges, and opportunities so we take the time to understand what matters and build our approach around it."
          HeadingAlign="left"
          content={<Cards />}
        />

        {/* APPROACH */}
        <CommonProcessSection
          smallHeading="Our Approach"
          bigHeading="A Smarter Approach to "
          bigHeadingItalic="Digital Growth"
          paragraph="Good digital work starts with understanding. We take a clear, thoughtful approach to every project from understanding your goals to building solutions that create lasting value."
          processList={[
            {
              title: "Understand",
              solution:
                "We learn about your business, audience, goals, and challenges before deciding on the right direction.",
            },
            {
              title: "Plan",
              solution:
                "We turn insights into a clear strategy, prioritizing the actions that can make the biggest difference.",
            },
            {
              title: "Build",
              solution:
                "We bring the strategy to life through thoughtful design, reliable technology, and focused digital execution.",
            },
            {
              title: "Optimize",
              solution:
                "We review performance, identify opportunities, and continuously refine the work to help your business move forward.",
            },
            {
              title: "Grow",
              solution:
                "The goal isn’t simply to complete a project. It’s to build a stronger digital foundation for continued growth.",
            },
          ]}
        />

        {/* EXPECTATIONS */}
        <TwoSideCommonSection
          smallHeading="What you can expect"
          bigHeading="What You Can Expect"
          bigHeadingItalic="From Rivozen"
          paragraph="Working with Rivozen means having a digital partner that values clarity, consistency, and quality at every stage of the project."
          Children={
            <>
              {[
                "Clear communication",
                "Thoughtful Solutions",
                "Reliable Timelines",
                "Consistent Quality",
                "Responsive Collaboration",
                "Focused Execution",
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
            </>
          }
        />

        {/* TESTIMONIALS */}
        <CommonSection
          smallHeading="Client perspective"
          bigHeading="What Our Clients Say About Working "
          bigHeadingItalic="With Rivozen 👇"
          HeadingAlign="center"
          content={<ClientsReviewsCards />}
        />

        {/* CTA */}
        <CommonCta
          bigHeading="Have a Digital Project in Mind? Let’s"
          bigHeadingItalic="Make It Happen."
          paragraph="Tell us what you’re working on, and let’s build the right digital solution with Rivozen."
          currentColor={0}
          secondaryBtn="Contact"
          secondaryBtnLink="/contact"
        />

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

const Cards = () => {
  return (
    <>
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
    </>
  );
};

const ClientsReviewsCards = () => {
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

  return (
    <>
      {" "}
      {testimonials.map((testimonial, i) => (
        <RevealItem key={testimonial.name}>
          <div
            className={`h-full rounded-2xl border border-border bg-[${allColorsArray[i].bgColor}] p-6`}
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={"font-bold"}>
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
    </>
  );
};
