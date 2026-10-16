"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "./reveal";
import CommonFaqSection from "../common/CommonFaqSection";

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
  return (
    <CommonFaqSection
      faqList={faqs}
      bigHeading="Things you need to"
      bigHeadingItalic="know"
      paragraph="Have questions about choosing a Digital Service Agency? Here are answers to the questions business owners ask us most often at Rivozen."
    />
  );
}
