"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const faqs = [
  {
    question: "What digital services does RivoZen offer?",
    answer: `Rivozen provides a wide range of digital services, including Website Design & Development, SEO, Paid Advertising, Social Media Marketing, Content & Creative, Email & SMS Marketing, Conversion Rate Optimization, and Business Growth Strategy plus additional support as your business evolves.`,
  },
  {
    question:
      "Do you design and develop websites for ecommerce and local businesses?",
    answer:
      " Yes. We build websites ranging from business websites and landing pages to full ecommerce stores  including platforms like Shopify. Every website is designed to be modern, responsive, and user-friendly, tailored to your business, audience, and goals.",
  },
  {
    question: "Is the initial consultation really free?",
    answer:
      "Yes. Your first strategy consultation is completely free, with no obligation to move forward.",
  },
  {
    question: "How much does a Digital Service Agency cost?",
    answer:
      "Pricing depends on the scope and mix of services your business needs. After understanding your goals, we provide a custom quote based on your specific requirements.",
  },
  {
    question: "How long does it take to see SEO and marketing results?",
    answer:
      "Yes Timelines vary depending on your industry, competition, website, and chosen services. SEO typically takes longer to build momentum, while paid advertising can generate data and traffic much sooner.",
  },
  {
    question: "Do you offer both SEO and paid advertising together?",
    answer: `Yes. We can combine SEO and paid advertising to support both short-term traffic and long-term organic growth.`,
  },
  {
    question: "Will I own my website, content, and ads accounts?",
    answer: `Yes. Your website, content, and advertising accounts remain yours. We work on your behalf while keeping ownership and access with your business.`,
  },
  {
    question: "Do you work with businesses in specific locations, or globally?",
    answer: `Yes. We work with ecommerce brands, local businesses, and growing companies both locally and internationally wherever your business needs digital growth. `,
  },
  {
    question: "How do you measure and report results?",
    answer: `We track relevant metrics such as traffic, leads, conversions, revenue, and ROI, and provide transparent reporting so you can clearly see what's working.`,
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Things you need to <span className="font-serif italic">know</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Have questions about choosing a Digital Service Agency? Here are
              answers to the questions business owners ask us most often at
              Rivozen.{" "}
            </p>
          </div>
        </Reveal>

        {/* FAQ Items */}
        <RevealStagger className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <RevealItem
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-muted/40 md:px-7 md:py-6"
                >
                  <span className="text-base font-medium md:text-lg">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
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
                        <p className="max-w-3xl leading-relaxed text-muted-foreground">
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
  );
}
