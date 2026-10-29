import Link from "next/link";
import { Reveal } from "../custom/reveal";
import { ArrowUpRight } from "lucide-react";
import { allColorsArray } from "@/utils/ColorsArray";

type colorRange = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface CommonCta {
  currentColor?: colorRange;
  bigHeading?: string;
  bigHeadingItalic?: string;
  paragraph?: string;
  primaryBtn?: string;
  primaryBtnLink?: string;
  secondaryBtn?: string;
  secondaryBtnLink?: string;
  secondaryBtnState?: boolean;
}

function CommonCta({
  currentColor = 0,
  bigHeading = "Your Growth Team",
  bigHeadingItalic = "One Call Away.",
  paragraph = "Get a free strategy consultation and discover how Rivozen&apos;s digital solutions can help your business grow - with no long-term contracts required.",
  primaryBtn = "Get a Free Consultation",
  primaryBtnLink = "/book-a-call",
  secondaryBtn = "Why Us",
  secondaryBtnLink = "/why-us",
  secondaryBtnState = true,
}: CommonCta) {
  return (
    <footer id="contact" className={`px-4 pb-8 md:px-6 `}>
      <Reveal
        className={`mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[${allColorsArray[currentColor]?.bgColor}] px-6 py-16 text-center text-secondary-foreground md:py-24`}
      >
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {bigHeading}{" "}
          <span className="font-serif italic">{bigHeadingItalic}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-secondary-foreground/80">
          {paragraph}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={primaryBtnLink}
            className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary-foreground px-7 py-3 text-base font-medium text-secondary transition-transform hover:-translate-y-0.5"
          >
            {primaryBtn}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {secondaryBtnState && (
            <Link
              href={secondaryBtnLink}
              className="group inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-7 py-3 text-base font-medium transition-colors bg-primary-foreground"
            >
              <span className="transition-transform group-hover:-translate-y-0.5">
                {secondaryBtn}
              </span>
            </Link>
          )}
        </div>
      </Reveal>
    </footer>
  );
}

export default CommonCta;
