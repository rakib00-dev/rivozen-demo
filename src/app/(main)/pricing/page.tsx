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
import { allColorsArray } from "@/utils/ColorsArray";
import CommonProcessSection from "@/components/common/CommonProcessSection";
import OneOffProjects from "@/components/custom/pricingPage/OneOffProjects";
import CommonFaqSection from "@/components/common/CommonFaqSection";
import CommonCta from "@/components/common/CommonCta";

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
    title: "Choose Your Package",
    solution:
      "Pick the digital service package that fits your business needs and current goals.",
  },
  {
    title: "Share Your Goals",
    solution:
      "Tell us what you need, what you want to achieve, and where you need support.",
  },
  {
    title: "We Get to Work",
    solution:
      "RivoZen puts the right digital services into action with focused execution and clear communication.",
  },
  {
    title: "Review & Refine",
    solution:
      "Review the work, share your feedback, and we’ll make the necessary adjustments.",
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
    <>
      <CommonSection
        key={"plans[pricing]"}
        smallHeading="Plans & pricing"
        HeadingAlign="center"
        bigHeading="Choose the Right Digital "
        bigHeadingItalic="Service Package"
        paragraph="Simple, flexible pricing. Explore Rivozen’s digital service packages and choose the right fit for your business goals."
        contentClass="mt-12 grid gap-4"
        content={
          <>
            {" "}
            <Reveal className="text-center">
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
                          $
                          {(yearly
                            ? plan.yearly!
                            : plan.monthly
                          ).toLocaleString()}
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
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
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
          </>
        }
      />
      {/* <section
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
        </div>
      </section> */}
    </>
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
        <CommonHeroSection
          smallHeading="Digital Service Packages"
          bigHeading={["Simple pricing.", "Serious"]}
          bigHeadingItalic="creative work."
          paragraph="One clear monthly fee for ongoing digital support from Rivozen simple, flexible, and built around your business goals."
          Children={<HeroChildren />}
          primaryBtn="View plans"
          primaryBtnLink="#plans"
          secondaryBtn="Talk to us"
          secondaryBtnLink="/book-a-call"
        />

        {/* PRICING */}
        <PriceCards />

        {/* INCLUDED */}
        <CommonSection
          smallHeading="What's included"
          bigHeading="Everything Your Business Needs "
          bigHeadingItalic="to Move Forward"
          paragraph="Every Rivozen package combines practical digital services, clear communication, and flexible support."
          HeadingAlign="left"
          content={<Cards />}
        />

        {/* HOW IT WORKS */}
        <CommonProcessSection
          bigHeading="Simple from start "
          bigHeadingItalic="to finish. 🏁"
          paragraph="No complicated onboarding or unnecessary steps. Choose the right digital service package, share your goals, and let Rivozen take it from there."
          processList={steps}
        />

        {/* COMPARISON */}
        <CommonSection
          smallHeading="Compare plans"
          bigHeading="Choose the Digital Service Package That"
          bigHeadingItalic="Fits Your Goals"
          paragraph=""
          HeadingAlign="center"
          contentClass="mt-12 overflow-hidden rounded-2xl border border-border bg-card"
          content={
            <>
              <div className="min-w-180">
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
            </>
          }
        />

        {/* ONE-OFF PROJECTS */}
        <OneOffProjects />

        {/* FAQ */}
        <CommonFaqSection
          smallHeading="FAQ"
          bigHeading="Questions About Pricing & Digital"
          bigHeadingItalic="Service Packages?"
          paragraph="Everything you need to know before choosing a Rivozen package or requesting custom pricing."
          faqList={[
            {
              question: `What’s included in Rivozen’s digital service packages?`,
              answer:
                "Each package includes a selected range of digital services based on your chosen plan, such as SEO, paid advertising, website development, lead generation, and digital marketing support.",
            },
            {
              question: "How much do Rivozen’s digital service packages cost?",
              answer:
                "Pricing depends on the level of support and services you need. Explore our digital service packages or contact Rivozen for custom pricing based on your business goals.",
            },
            {
              question: "Can I get a custom package for my business?",
              answer:
                "Yes. Rivozen can create a custom digital service package based on your goals, priorities, required services, and level of support.",
            },
            {
              question:
                "Do you offer one-off projects without a monthly package?",
              answer:
                "Yes. Rivozen offers project-based support for specific needs such as website development, SEO, paid advertising, lead generation, content and creative, and AI workflow automation.",
            },
            {
              question: "Can I change or upgrade my package later?",
              answer:
                "Yes. Your needs can change as your business grows. You can discuss adjusting your services or moving to a package that better fits your current goals.",
            },
            {
              question: "Which services can I combine in a package?",
              answer:
                "You can combine relevant services based on your business needs, including SEO, paid advertising, website development, lead generation, content and creative, and digital marketing.",
            },
            {
              question:
                "Can Rivozen handle SEO, paid advertising, and website development together?",
              answer:
                "Yes. Rivozen provides multiple digital services under one flexible setup, allowing you to combine SEO, paid advertising, website development, and other services when needed.",
            },
            {
              question: "How does the Rivozen onboarding process work?",
              answer:
                "Getting started is simple. Choose a package or request custom pricing, share your goals and requirements, and Rivozen will help determine the right services and next steps.",
            },
            {
              question: "How can I get a custom digital marketing quote?",
              answer:
                "Simply contact Rivozen and share your business goals, required services, and project details. We’ll review your needs and provide a tailored pricing option.",
            },
          ]}
        />

        {/* FINAL CTA */}
        <CommonCta
          key={"cta[pricing_page]"}
          bigHeading="Not sure which plan is "
          bigHeadingItalic="right for you?"
          paragraph="Tell us what you’re working on, and RivoZen will help you find the right way to work together."
        />
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

const HeroChildren = () => {
  return (
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
        Flexible plans
      </div>

      <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
        Unlimited revisions
      </div>

      <div className="rounded-md border border-border bg-card px-4 py-2 text-sm">
        No surprises
      </div>
    </motion.div>
  );
};

const Cards = () => {
  return (
    <>
      {[
        {
          number: "01",
          icon: Target,
          title: "Full-Service Digital Support",
          description:
            "From web design and SEO, GEO, AEO to Meta Ads, Google Ads, and digital marketing.",
        },
        {
          number: "02",
          icon: Zap,
          title: "Unlimited Revisions",
          description:
            "Keep refining your work until it feels right and meets your goals.",
        },
        {
          number: "03",
          icon: Users,
          title: "Fast Turnaround",
          description:
            "Stay productive with focused delivery times and a streamlined workflow.",
        },
        {
          number: "04",
          icon: Sparkles,
          title: "Clear Communication",
          description:
            "Simple, direct communication without unnecessary meetings or complexity.",
        },
        {
          number: "05",
          icon: MessageCircle,
          title: "Flexible Collaboration",
          description:
            "Work with Rivozen as an extension of your existing team.",
        },
        {
          number: "06",
          icon: Check,
          title: "Source Files Included",
          description:
            "Get full access to design files, assets, and deliverables.",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        console.log({ i, color: allColorsArray[i]?.bgColor });
        return (
          <RevealItem
            key={item.number}
            className={`group rounded-2xl border border-border bg-[${allColorsArray[i]?.bgColor}] p-6 transition-colors hover:bg-muted/40 md:p-7`}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-black" />
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
