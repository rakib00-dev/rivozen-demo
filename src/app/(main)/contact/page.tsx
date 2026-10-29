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
  Target,
  Zap,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger, RevealItem } from "@/components/custom/reveal";
import { SmoothScroll } from "@/components/custom/smooth-scroll";
import CommonHeroSection from "@/components/common/CommonHeroSection";
import CommonSection from "@/components/common/CommonSection";
import { allColorsArray } from "@/utils/ColorsArray";
import CommonCta from "@/components/common/CommonCta";
import { FaqSection } from "@/components/custom/Faq";
import CommonFaqSection from "@/components/common/CommonFaqSection";

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
        <CommonHeroSection
          smallHeading="Get in touch"
          bigHeading={["Have a", "project"]}
          bigHeadingItalic="in mind?"
          paragraph="Tell us what you're working on, what you need, and where you want to take your business. The Rivozen team will take it from there."
          primaryBtn="Start a conversation"
          primaryBtnLink="#contact-form"
          secondaryBtn="Book a call"
          secondaryBtnLink="/book-a-call"
        />

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
                        loading="eager"
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
                        Have an idea, a project, or a growth challenge in mind?
                        Tell Rivozen what you&apos;re looking to achieve, and
                        we&apos;ll get back to you with the right next steps.
                      </p>

                      <div className="mt-10 space-y-7">
                        <div className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card">
                            <Mail className="h-4 w-4 text-primary" />
                          </div>

                          <div>
                            <p className="text-sm font-medium">Email</p>

                            <a
                              href="mailto:info@rivozen.com"
                              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              info@rivozen.com
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
                          can book a 15-minute discovery call with our Rivozen
                          team.
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

        <CommonSection
          key={"contact_page"}
          smallHeading="What happens next"
          bigHeading="From Your Message to The"
          bigHeadingItalic="Right Next Step"
          paragraph="No complicated process. Just a clear conversation about your business, your goals, and how RivoZen can help."
          HeadingAlign="left"
          content={<Cards />}
        />

        {/* ================================================================ */}
        {/* FAQ                                                               */}
        {/* ================================================================ */}

        <CommonFaqSection
          smallHeading="FAQ"
          bigHeading="A Few Questions and "
          bigHeadingItalic="Answered"
          paragraph="Everything you need to know before reaching out to Rivozen."
          key={"FAQ[contact_page]"}
          faqList={[
            {
              question: "How Do I Get Started with RivoZen?",
              answer:
                "Simply fill out the contact form or book a 15-minute discovery call. Tell us a little about your business and what you’re looking to achieve, and we’ll take it from there.",
            },
            {
              question: " Is the Initial Consultation Free?",
              answer:
                "Yes. The initial consultation is completely free, with no obligation to move forward.",
            },
            {
              question: "How Quickly Will I Hear Back After Contacting You?",
              answer:
                "We aim to respond within 24 hours on business days. Response times may vary depending on the nature of your inquiry.",
            },
            {
              question: "What Should I Include in My Message?",
              answer:
                "Share a little about your business, your goals, the challenge you’re facing, and the type of help you’re looking for. You don’t need to have everything figured out.",
            },
            {
              question: "What Happens After I Submit the Contact Form?",
              answer:
                "We’ll review your message and follow up if we need any additional information. If your project is a good fit, we’ll discuss the next steps together.",
            },
            {
              question: "Can I Book a Call Instead of Filling Out the Form?",
              answer:
                "Absolutely. If you prefer a direct conversation, you can book a 15-minute discovery call and talk through your project with our team.",
            },
            {
              question: "I’m Not Sure Which Service I Need. Can You Help?",
              answer:
                "Of course. You can start by telling us about your goals or challenges. We’ll help you explore which digital solutions may be the right fit for your business.",
            },
            {
              question:
                "Can I Contact RivoZen About an Existing Project or Website?",
              answer:
                "Yes. Whether you’re starting something new or looking to improve an existing website, campaign, or digital setup, you can reach out and tell us what you’re working with.",
            },
            {
              question: "Do You Work with Businesses Outside Your Local Area?",
              answer:
                "Yes. RivoZen can work remotely with businesses in different locations, making it possible to collaborate regardless of where your business is based.",
            },
          ]}
        />

        {/* ================================================================ */}
        {/* BOOK A CALL                                                       */}
        {/* ================================================================ */}

        <CommonCta
          bigHeading="Let’s Talk About "
          bigHeadingItalic="What’s Next"
          paragraph="Have a project, growth goal, or digital challenge to discuss? Book a 15-minute discovery call with Rivozen and tell us what you’re working on. No pressure, just a focused conversation about your goals."
          currentColor={0}
          key={"cta[contact_page]"}
          primaryBtn="Book A call"
          secondaryBtnState={false}
        />
      </main>
    </SmoothScroll>
  );
}

const Cards = () => {
  return (
    <>
      {[
        {
          number: "01",
          icon: Target,
          title: "We Review Your Message",
          description:
            "We’ll take a look at your project, goals, and the digital services you’re looking for.",
        },
        {
          number: "02",
          icon: Zap,
          title: "We Get Back to You",
          description:
            "We’ll respond with any questions to fully understand your needs.",
        },
        {
          number: "03",
          icon: Users,
          title: "We Plan the Next Step",
          description:
            "If we’re a good fit, we’ll outline a clear plan  timeline, approach, and how RivoZen can help you grow.",
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <RevealItem
            key={item.number}
            className={`group rounded-2xl border border-border bg-[${allColorsArray.reverse()[i]?.bgColor}] p-6 transition-colors hover:bg-muted/40 md:p-7`}
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
