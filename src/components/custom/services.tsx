"use client";

import { Reveal, RevealStagger, RevealItem } from "./reveal";
import {
  Palette,
  Monitor,
  PenTool,
  Share2,
  Film,
  Presentation,
  Sparkles,
  Layers,
} from "lucide-react";

const services = [
  // {
  //   icon: Palette,
  //   title: "Brand Identity",
  //   desc: "Logos, color systems, and complete guidelines that make you unforgettable.",
  // },

  {
    icon: Monitor,
    title: "Web Design & Development",
    desc: "Landing pages, marketing sites, and product UI designed to convert.",
  },
  {
    icon: Presentation,
    title: "SEO",
    desc: "Search engine optimization that improves rankings, increases relevant organic traffic, and drives sustainable long-term growth.",
  },
  {
    icon: Sparkles,
    title: "Paid Advertising",
    desc: `Google Ads and Meta Ads campaigns built to drive qualified traffic and leads, and increase sales and ROI.`,
  },
  {
    icon: PenTool,
    title: "CRO",
    desc: "key touchpoints-designed to increase conversions and maximize the value of every visitor.",
  },
  {
    icon: Palette,
    title: "Content & Creative",
    desc: `Strategic content, engaging visuals, video editing, and creative assets designed to achive your marketing goals.`,
  },
  {
    icon: Share2,
    title: "Email & SMS Marketing",
    desc: `Personalized and automated campaigns designed to nurture leads, build stronger customer relationships, increase retention, and drive repeat sales.`,
  },
  {
    icon: Film,
    title: "Social Media Marketing",
    desc: `Strategic social media management and targeted campaigns designed to build your brand.`,
  },

  {
    icon: Layers,
    title: "Business Growth Strategy",
    desc: `A tailored digital marketing roadmap that aligns SEO, paid media, and content with your business goals for focused, sustainable growth.`,
  },
];

export function Services() {
  return (
    <section id="services" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            One Agency for All Your Digital{" "}
            <span className="font-serif italic">Growth Needs</span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
