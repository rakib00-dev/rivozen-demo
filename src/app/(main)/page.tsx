import { CtaFooter } from "@/components/custom/cta-footer";
import { FaqSection } from "@/components/custom/Faq";
import { Hero } from "@/components/custom/hero";
import { Marquee } from "@/components/custom/marquee";
import { Navbar } from "@/components/custom/navbar";
import { Pricing } from "@/components/custom/pricing";
import { Process } from "@/components/custom/process";
import { Reveal } from "@/components/custom/reveal";
import { Services } from "@/components/custom/services";
import { SmoothScroll } from "@/components/custom/smooth-scroll";
import { Stats } from "@/components/custom/stats";
import { Testimonials } from "@/components/custom/testimonials";
import { Work } from "@/components/custom/work";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <SmoothScroll>
      {/* <Navbar /> */}
      {/* <main> */}
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Pricing />
      <FaqSection />
      <InLineCta />
      {/* <CtaFooter /> */}
      {/* </main> */}
    </SmoothScroll>
  );
}

function InLineCta() {
  return (
    <footer id="contact" className={`px-4 pb-8 md:px-6 `}>
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-secondary-foreground md:py-24">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          A full creative team,{" "}
          <span className="font-serif italic">at your fingertips.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-secondary-foreground/80">
          Start today and get your first design back as soon as tomorrow. Pause
          or cancel anytime.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#pricing"
            className="group inline-flex items-center justify-center gap-1.5 rounded-lg bg-secondary-foreground px-7 py-3 text-base font-medium text-secondary transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg border border-primary-foreground/30 px-7 py-3 text-base font-medium transition-colors bg-primary-foreground hover:bg-primary-foreground/10"
          >
            Book a call
          </Link>
        </div>
      </Reveal>
    </footer>
  );
}
