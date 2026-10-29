import { Reveal, RevealStagger } from "../custom/reveal";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const HeadingAlignLeft = "place-items-start text-left";
const HeadingAlignCenter = "place-items-center text-center";
const HeadingAlignRight = "place-items-end text-right";

type HeadingAlignType = "left" | "center" | "right";

const headingAlignClasses: Record<HeadingAlignType, string> = {
  left: "place-items-start text-left",
  center: "place-items-center text-center",
  right: "place-items-end text-right",
};

interface CommonSection {
  smallHeading: string;
  bigHeading: string;
  bigHeadingItalic: string;
  HeadingAlign?: HeadingAlignType;
  paragraph?: string;
  arrow?: boolean;
  contentClass?: string;
  content: React.ReactElement;
}

// TODO: Have to add for all section type like right side link, section header content position etc.

const CommonSection = ({
  smallHeading = "Small Heading",
  bigHeading = "Here is your big heading",
  bigHeadingItalic = "Italic Part",
  HeadingAlign = "left",
  paragraph = `Every Rivozen plan is built around quality work, responsive collaboration, and a process that keeps your team moving.`,
  contentClass,
  arrow = false,
  content,
}: CommonSection) => {
  return (
    <section id="work" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="grid place-items-center gap-6">
          <div className={`grid w-full ${headingAlignClasses[HeadingAlign]}`}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              {smallHeading}
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {bigHeading}{" "}
              <span className="font-serif italic">{bigHeadingItalic}</span>
            </h2>

            {paragraph && (
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            )}
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

        <RevealStagger
          className={
            contentClass
              ? `${contentClass}`
              : `mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3`
          }
        >
          {content}
        </RevealStagger>
      </div>
    </section>
  );
};

export default CommonSection;
