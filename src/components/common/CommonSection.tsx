import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "../custom/reveal";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const CommonSection = ({
  smallHeading = "Small Heading",
  bigHeading = "Here is your big heading",
  bigHeadingItalic = "Italic Part",
  arrow = false,
  content,
}: {
  smallHeading: string;
  bigHeading: string;
  bigHeadingItalic: string;
  arrow?: boolean;
  content: React.ReactElement;
}) => {
  return (
    <section id="work" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {smallHeading}
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {bigHeading}{" "}
              <span className="font-serif italic">{bigHeadingItalic}</span>
            </h2>
          </div>
          {arrow && (
            <a
              href="#pricing"
              className="group inline-flex items-center gap-1.5 text-sm font-medium"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </Reveal>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {content}
        </RevealStagger>
      </div>
    </section>
  );
};

export default CommonSection;
