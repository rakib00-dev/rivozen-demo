import Link from "next/link";
import { Reveal } from "../custom/reveal";
import { ArrowUpRight } from "lucide-react";
import { allColorsArray } from "@/utils/ColorsArray";

type colorRange = 0 | 1 | 2 | 3 | 4 | 5 | 6;

interface CommonCta {
  currentColor?: colorRange;
}

function CommonCta({ currentColor = 0 }) {
  return (
    <footer id="contact" className={`px-4 pb-8 md:px-6 `}>
      <Reveal
        className={`mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[${allColorsArray[currentColor].bgColor}] px-6 py-16 text-center text-secondary-foreground md:py-24`}
      >
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Your Growth Team{" "}
          <span className="font-serif italic">One Call Away.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-secondary-foreground/80">
          Get a free strategy consultation and discover how Rivozen&apos;s
          digital solutions can help your business grow - with no long-term
          contracts required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/book-a-call"
            className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary-foreground px-7 py-3 text-base font-medium text-secondary transition-transform hover:-translate-y-0.5"
          >
            Get a Free Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/why-us"
            className="group inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-7 py-3 text-base font-medium transition-colors bg-primary-foreground"
          >
            <span className="transition-transform group-hover:-translate-y-0.5">
              Why Us
            </span>
          </Link>
        </div>
      </Reveal>
    </footer>
  );
}

export default CommonCta;
