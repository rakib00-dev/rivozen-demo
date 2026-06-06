import { CtaFooter } from "@/components/custom/cta-footer";
import { Hero } from "@/components/custom/hero";
import { Marquee } from "@/components/custom/marquee";
import { Navbar } from "@/components/custom/navbar";
import { Pricing } from "@/components/custom/pricing";
import { Process } from "@/components/custom/process";
import { Services } from "@/components/custom/services";
import { SmoothScroll } from "@/components/custom/smooth-scroll";
import { Stats } from "@/components/custom/stats";
import { Testimonials } from "@/components/custom/testimonials";
import { Work } from "@/components/custom/work";

export default function Page() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <Pricing />
        <CtaFooter />
      </main>
    </SmoothScroll>
  )
}