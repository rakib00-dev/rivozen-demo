import PageWebsiteHero from "@/components/custom/services/website/PageWebsiteHero";
import CommonSection from "@/components/common/CommonSection";
import TwoSideCommonSection from "@/components/common/TwoSideCommonSection";
import { Reveal, RevealItem, RevealStagger } from "@/components/custom/reveal";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  Palette,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import CommonFaqSection from "@/components/common/CommonFaqSection";
import { allColorsArray } from "@/utils/ColorsArray";
import CommonProcessSection from "@/components/common/CommonProcessSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/custom/stats";
import CommonCta from "@/components/common/CommonCta";

export default function WebDesignPage() {
  return (
    <>
      <PageWebsiteHero />
      <TwoSideCommonSection
        smallHeading="WEB DESIGN & DEVELOPMENT AGENCY"
        bigHeading="Web Design & Development That Makes Your First Impression Count"
        bigHeadingItalic="on Every Screen"
        paragraph="RivoZen designs and builds fast, mobile-first, SEO-ready websites for ecommerce brands and local businesses. Whether you need a Shopify store, a WordPress site, or a custom Next.js build, we create a digital storefront that looks sharp on every device and turns visitors into customers."
      />
      {/* cards section */}
      <CommonSection
        smallHeading="WHY Rivozen for WEB & technologies"
        bigHeading="Websites Designed to Do More "
        bigHeadingItalic="Than Look Good"
        paragraph="Every website RivoZen builds is mobile-first, fast-loading, and SEO-ready from day one. We combine clean design with technical performance, so your site ranks on Google and turns visitors into customers."
        HeadingAlign="center"
        content={<Cards />}
      />
      {/* Selected Work */}
      <section className="px-4 py-20 md:px-6 md:py-28 ">
        <div className="mx-auto max-w-6xl bg-white p-15 rounded-2xl">
          <Reveal className="grid w-full">
            <div className="grid place-items-center text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {`Results that speaks`}
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl w-[60%]">
                A trusted creative partner for
                <span className="font-serif italic">{"growing brands"}</span>
              </h2>
            </div>
            <div className="border-b mb-10">
              <Stats />
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                  Selected work
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  See the work
                  <span className="font-serif italic"> in action.</span>
                </h2>
              </div>
              <Button variant={"link"} href="/work">
                See More{" "}
                <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
              </Button>
            </div>
          </Reveal>

          <RevealStagger className="mt-10 grid gap-5 md:grid-cols-2">
            <RevealItem>
              <Link href="/work" className="group block">
                <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-border">
                  <Image
                    src="/work-brand.png"
                    alt="Northwind brand identity"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Northwind</h3>
                    <p className="text-sm text-muted-foreground">
                      Brand Identity
                    </p>
                  </div>

                  <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                </div>
              </Link>
            </RevealItem>

            <RevealItem>
              <Link href="/work" className="group block">
                <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-border">
                  <Image
                    src="/work-web.png"
                    alt="Flowstate web design"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Flowstate</h3>
                    <p className="text-sm text-muted-foreground">
                      Web & Product
                    </p>
                  </div>

                  <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45" />
                </div>
              </Link>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>
      {/* Process Section */}
      <CommonProcessSection
        smallHeading="OUR WEB DESIGN PROCESS"
        bigHeading="Design made easy, from brief to "
        bigHeadingItalic=" delivery 🚚"
        paragraph="A clear four-step process takes your website from first conversation to live launch, with SEO, speed, and conversion built in at every stage."
        processList={process}
      />
      {/* clients reviews */}
      <CommonSection
        smallHeading="Customers stories"
        bigHeading="What it's like to work with"
        bigHeadingItalic=" Rivozen 👇"
        HeadingAlign="center"
        content={<ClientsReviewsCards />}
      />
      {/* faq section */}
      <CommonFaqSection
        bigHeading="Common questions you"
        bigHeadingItalic="may ask"
        paragraph=""
        faqList={faqs}
      />
      {/* cta */}
      <CommonCta currentColor={0} />{" "}
    </>
  );
}

const process = [
  {
    title: "Discovery & Strategy",
    solution:
      "We learn about your business, audience, competitors, and goals. Then we map your site structure, keywords, and conversion paths so the website is planned around results, not just looks.",
  },
  {
    title: "Design & Prototype",
    solution:
      "We design mobile-first layouts and clickable prototypes in your brand style. You review and request revisions before a single line of code is written.",
  },
  {
    title: "Development & SEO Setup",
    solution:
      "We build your site on Shopify, WordPress, or Next.js with clean code, fast load times, schema markup, and on-page SEO configured from the start.",
  },
  {
    title: "Launch & Optimize",
    solution:
      "After testing across devices and browsers, we launch your site, connect analytics, and keep improving speed, rankings, and conversion rate with real data.",
  },
];

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
];

const ClientsReviewsCards = () => {
  const testimonials = [
    {
      quote:
        "Rivozen understood the direction immediately and turned it into something much stronger than we imagined.",
      name: "Sarah Mitchell",
      role: "Founder, Northwind",
    },
    {
      quote:
        "The process was clear, fast, and collaborative. Every detail felt intentional.",
      name: "Daniel Brooks",
      role: "Product Lead, Flowstate",
    },
    {
      quote:
        "We finally have a visual identity that feels consistent across everything we do.",
      name: "Maya Chen",
      role: "Creative Director, Bloom Co.",
    },
  ];

  return (
    <>
      {" "}
      {testimonials.map((testimonial, i) => (
        <RevealItem key={testimonial.name}>
          <div
            className={`h-full rounded-2xl border border-border bg-[${allColorsArray[i].bgColor}] p-6`}
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={"font-bold"}>
                  ★
                </span>
              ))}
            </div>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              “{testimonial.quote}”
            </p>

            <div className="mt-8 border-t border-border pt-5">
              <p className="font-medium">{testimonial.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        </RevealItem>
      ))}
    </>
  );
};

const Cards = () => {
  const included = [
    {
      icon: "/services/69c661209face95c278b48d3_⚡.avif",
      title: "Mobile-First Responsive Design",
      description:
        "Your website is designed for phones first, then scaled up for tablets and desktops, so every customer gets a smooth experience on any screen.",
    },
    {
      icon: "/services/69c66121f3b50821a0163bb8_🏆.avif",
      title: "Fast-Loading, Core Web Vitals Optimized",
      description:
        "We optimize images, code, and hosting to meet Google’s Core Web Vitals thresholds, because faster pages rank better and convert more visitors.",
    },
    {
      icon: "/services/69c6612157a7fd9f6e6f8a4c_🎯.avif",
      title: "SEO-Ready from Day One",
      description:
        "Clean code, proper heading structure, schema markup, meta tags, and URL planning are built in from the start, not added as an afterthought.",
    },
    {
      icon: "/services/69c661211f90401d86869f42_🎛️.avif",
      title: "Conversion-Focused UX",
      description:
        "Clear layouts, strong calls to action, and simple checkout or contact flows guide visitors toward buying, booking, or enquiring.",
    },
    {
      icon: "/services/69c661211c98fb7a418c3d59_🛡️.avif",
      title: "Built on the Right Platform",
      description:
        "We build with Shopify, WordPress, or custom Next.js, depending on your goals, budget, and how much you want to manage yourself.",
    },
    {
      icon: "/services/69c66121ad29b215144e535f_🧩.avif",
      title: "You Own Everything",
      description:
        "You get full access to your website files, content, domain, and hosting accounts, with documentation and training so you are never locked in.",
    },
  ];
  return (
    <>
      {included.map((item) => {
        const Icon = item.icon;

        return (
          <RevealItem
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Image
                src={item.icon}
                alt="Cards Icons"
                height={40}
                width={40}
                className="h-10 w-10 text-primary"
              />
            </div>

            <h3 className="mt-7 text-lg font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </RevealItem>
        );
      })}
    </>
  );
};
