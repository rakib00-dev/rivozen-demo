"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "../custom/reveal";

interface FAQ {
  question: string;
  answer: string;
}

interface CommonFaqSection {
  smallHeading?: string;
  bigHeading: string;
  bigHeadingItalic: string;
  paragraph: string;
  faqList: FAQ[];
}

export default function CommonFaqSection({
  faqList,

  smallHeading = "Frequently asked questions",
  bigHeading,
  bigHeadingItalic,
  paragraph,
}: CommonFaqSection) {
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
              {smallHeading}
            </p>

            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {bigHeading}{" "}
              <span className="font-serif italic">{bigHeadingItalic}</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          </div>
        </Reveal>

        {/* FAQ Items */}
        <RevealStagger className="mt-12 space-y-3">
          {faqList.map((faq, index) => {
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
