"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const faqs = [
  {
    question: "How does the design subscription work?",
    answer:
      "You get access to a dedicated design team for a flat monthly fee. Simply send us your design requests, and our team works through them one by one, keeping you updated throughout the process.",
  },
  {
    question: "How quickly will I receive my designs?",
    answer:
      "Most design requests are completed within a few business days. The exact timeline depends on the complexity of the request, but we always aim to keep things moving quickly.",
  },
  {
    question: "Can I request multiple designs at once?",
    answer:
      "Yes. You can add as many requests to your queue as you need. We work through them in priority order so you always know what is being worked on next.",
  },
  {
    question: "What types of design work do you offer?",
    answer:
      "We can help with branding, social media graphics, UI/UX design, landing pages, presentations, marketing materials, advertisements, and many other digital design needs.",
  },
  {
    question: "Do I get a dedicated designer?",
    answer:
      "Yes. You will work with a dedicated design team that becomes familiar with your brand, preferences, and workflow, making collaboration easier over time.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. There are no long-term contracts. You can cancel your subscription whenever you need, and you will continue to have access until the end of your current billing period.",
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
              Everything you need to{" "}
              <span className="font-serif italic">know</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Have questions about our design subscription? Here are some of the
              most common questions we get from teams.
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
