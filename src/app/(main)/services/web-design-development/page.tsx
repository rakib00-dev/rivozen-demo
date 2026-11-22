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
        paragraph="Ecommerce brands and local businesses trust RivoZen to design and develop websites that load fast, rank well, and convert. Here is what working with us feels like."
        HeadingAlign="center"
        content={<ClientsReviewsCards />}
      />
      {/* faq section */}
      <CommonFaqSection
        bigHeading="Common questions you"
        bigHeadingItalic="may ask"
        paragraph="Quick answers to what business owners ask most before starting a website project with RivoZen."
        faqList={faqs}
      />
      {/* cta */}
      <CommonCta
        bigHeading="Ready for a Website That Brings "
        bigHeadingItalic="in Customers?"
        paragraph="Book a free website consultation with RivoZen. We will review your current site, share quick wins, and map out a design and development plan for your ecommerce store or local business, with no long-term contract required."
        currentColor={0}
        secondaryBtn="See Our Work"
        secondaryBtnLink="/work"
      />{" "}
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
    question: "What does a web design and development agency do?",
    answer: `A web design and development agency plans, designs, and builds websites that look professional, load fast, and help a business get customers. At RivoZen, this includes site structure, UX design, development on Shopify, WordPress, or Next.js, on-page SEO setup, and post-launch optimization.`,
  },
  {
    question: "Do you build websites for ecommerce and local businesses?",
    answer:
      "Yes. RivoZen designs and develops online stores for ecommerce brands and lead-generation websites for local businesses such as clinics, restaurants, and service providers. Ecommerce sites focus on product pages and checkout, while local sites focus on enquiries, bookings, and local SEO.",
  },
  {
    question: "Which platforms do you build websites on?",
    answer:
      "We build on Shopify for ecommerce, WordPress for content-driven and local business sites, and custom Next.js for brands that need maximum speed and flexibility. We recommend the platform after understanding your goals, budget, and how much you want to manage yourself.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Website cost depends on the number of pages, platform, custom features, and content needs. A simple business website costs far less than a custom ecommerce store. [“RivoZen projects start from $499.”] Book a free call and we will give you a clear quote after understanding your scope.",
  },
  {
    question: "How long does it take to design and build a website?",
    answer:
      "Most business websites take around 4 to 8 weeks from kickoff to launch, while larger ecommerce builds can take longer. Timeline depends on page count, features, and how quickly content and feedback are shared.",
  },
  {
    question: "Will my website be fast and SEO-ready?",
    answer:
      "Yes. Every RivoZen website is built with clean code, optimized images, proper heading structure, schema markup, and mobile-first design. We aim to meet Google’s Core Web Vitals “good” thresholds: LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1. For ongoing rankings, our SEO services take over after launch.",
  },
  {
    question:
      "Can you redesign my existing website without losing my Google rankings?",
    answer:
      "Yes. Before a redesign, we audit your current rankings and URLs, then set up 301 redirects, preserve high-performing content, and keep your metadata and internal links intact. This protects your existing traffic while improving design, speed, and conversions.",
  },
  {
    question: "Will I own my website, and do you offer support after launch?",
    answer:
      "Yes, you own your website, content, domain, and hosting accounts, and we hand over full access with documentation. After launch, we offer optional maintenance, speed monitoring, and conversion improvements, so your site keeps performing as your business grows.",
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
