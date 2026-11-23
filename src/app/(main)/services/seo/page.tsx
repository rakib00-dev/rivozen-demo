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
import CommonHeroSection from "@/components/common/CommonHeroSection";

export default function SEO() {
  return (
    <>
      <CommonHeroSection
        smallHeading="Get Rank in Search"
        bigHeading={["Ready to Rank on ", "Google and"]}
        bigHeadingItalic="in AI Search?"
        paragraph="Tell us about your website, your market, and your goals. RivoZen’s SEO team will review where you stand today and show you the fastest opportunities to grow organic traffic and leads. "
        primaryBtn="Get a Free SEO Audit"
        primaryBtnLink="/contact"
        secondaryBtn="Book A Call"
        secondaryBtnLink="/book-a-call"
      />

      <TwoSideCommonSection
        smallHeading="SEO, GEO & AEO AGENCY"
        bigHeading="SEO Services That Get You Found on Google "
        bigHeadingItalic="and in AI Search"
        paragraph="RivoZen is an SEO, GEO, AEO agency that helps ecommerce brands and local businesses grow organic traffic, rank on Google, and get recommended by AI tools like ChatGPT, Perplexity, and Google AI Overviews. From technical fixes to content and local SEO, we focus on the traffic that turns into leads and sales."
      />

      {/* cards section */}
      <CommonSection
        smallHeading="WHAT'S INCLUDED"
        bigHeading="SEO Built to Do More Than  "
        bigHeadingItalic="Chase Rankings"
        paragraph="SEO services are the work that helps your website show up when customers search on Google, Bing, and now AI tools like ChatGPT and Perplexity. RivoZen covers the technical fixes, content, local presence, and AI-search optimization that bring in qualified traffic, leads, and sales, not just higher positions."
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
        smallHeading="Ranking Process"
        bigHeading="From Audit to Growth, Our SEO Process "
        bigHeadingItalic="Built for Results 📈"
        paragraph="Good SEO is a repeating cycle, not a one-time fix. Our four-step process starts with a full audit and keeps improving rankings, traffic, and leads month after month."
        processList={process}
      />

      {/* clients reviews */}
      <CommonSection
        smallHeading="Customers stories"
        bigHeading="What It’s Like to Grow with "
        bigHeadingItalic="RivoZen SEO 👇"
        paragraph="Ecommerce brands and local businesses work with RivoZen to rank higher, earn more organic traffic, and turn searches into customers. Here is what the experience looks like."
        HeadingAlign="center"
        content={<ClientsReviewsCards />}
      />

      {/* faq section */}
      <CommonFaqSection
        bigHeading="Common questions how "
        bigHeadingItalic="to get ranked"
        paragraph=""
        faqList={faqs}
      />

      {/* cta */}

      <CommonCta
        currentColor={2}
        bigHeading="Ready to Grow Your Traffic on Google and "
        bigHeadingItalic="in AI Search?"
        paragraph="Get a free SEO audit from RivoZen. We will review your site’s technical health, content, and search visibility, then show you the biggest opportunities to grow organic traffic and leads, with no long-term contract required."
        primaryBtn="Get a Free SEO Audit"
        secondaryBtn="See Our SEO Works"
        secondaryBtnLink="/work"
      />
    </>
  );
}

const process = [
  {
    title: "SEO Audit & Research",
    solution:
      "We audit your site’s technical health, content, and backlinks, then research your keywords, competitors, and customer search intent to find the fastest opportunities.",
  },
  {
    title: "Strategy & Roadmap",
    solution:
      "We build a clear, prioritized SEO roadmap tied to your business goals, covering keyword targets, page plans, local SEO, and AI-search (GEO and AEO) opportunities.",
  },
  {
    title: "Execution & Optimization",
    solution:
      "We fix technical issues, optimize your pages, publish search-focused content, and strengthen your authority, working step by step through the roadmap.",
  },
  {
    title: "Tracking & Growth",
    solution:
      "We track rankings, organic traffic, leads, and revenue, share clear reports, and keep refining the strategy as search results and AI answers change.",
  },
];

const faqs = [
  {
    question: "What do SEO services include?",
    answer: `SEO services include everything that helps your website rank in search results: technical fixes, keyword research, on-page optimization, content, local SEO, link building, and reporting. At RivoZen, we also optimize for AI search so your brand can be understood and cited by tools like ChatGPT and Perplexity.`,
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes a few months to show meaningful movement, and results keep building over time. Timing depends on your site’s current health, competition, and how much content and optimization is needed. [“most clients see early movement within 3 to 6 months.”] No honest agency can promise a specific ranking or date.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "SEO cost depends on your website size, competition, and goals. A local business needs a different scope than a large ecommerce store. [“RivoZen SEO plans start from $250 per month.”] Book a free call and we will recommend a plan after reviewing your site.",
  },
  {
    question: "What is the difference between SEO, GEO, and AEO?",
    answer:
      "SEO helps your pages rank in traditional search results like Google. AEO (answer engine optimization) structures content to give direct answers for featured snippets and voice search. GEO (generative engine optimization) helps AI tools like ChatGPT, Perplexity, and Google AI Overviews understand and cite your brand. All three rely on the same foundation: clear, trustworthy, well-structured content.",
  },
  {
    question:
      "Can you help my business appear in ChatGPT and AI search results?",
    answer:
      "We can improve how likely your brand is to be understood and cited by AI tools, but no one can guarantee a mention. We do this by strengthening your content, schema markup, brand entity signals, and mentions across trusted sources. Strong traditional SEO remains the base, because AI tools often draw from the same sources that rank well.",
  },
  {
    question: "Do you offer local SEO for small businesses?",
    answer:
      "Yes. Local SEO covers your Google Business Profile, local citations, review strategy, and location pages, so nearby customers find you in Google Maps and local search. It suits clinics, restaurants, home services, and any business that serves customers in a specific area.",
  },
  {
    question: "Do you do SEO for ecommerce stores?",
    answer:
      "Yes. Ecommerce SEO covers category and product page optimization, site structure, filters, duplicate content, page speed, and structured data, so your store ranks for what shoppers search before they buy. We work with Shopify, WooCommerce, and custom stores.",
  },
  {
    question: "Should I invest in SEO or paid ads?",
    answer:
      "SEO builds long-term, compounding traffic, while paid ads bring faster, but ongoing paid, traffic. Many businesses use ads for immediate leads while SEO grows in the background. We can recommend the right mix after reviewing your goals and budget, and you can read about our paid advertising services.",
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
      title: "Technical SEO Foundation",
      description:
        "We audit and fix crawlability, indexing, site speed, Core Web Vitals, and structured data, so search engines can find, understand, and trust your pages.",
    },
    {
      icon: "/services/69c66121f3b50821a0163bb8_🏆.avif",
      title: "Ecommerce SEO",
      description:
        "Category pages, product pages, filters, and duplicate-content issues are optimized so your store ranks for what shoppers actually search before buying.",
    },
    {
      icon: "/services/69c6612157a7fd9f6e6f8a4c_🎯.avif",
      title: "Local SEO",
      description:
        "We optimize your Google Business Profile, local citations, reviews, and location pages, so nearby customers find you in Maps and local results.",
    },
    {
      icon: "/services/69c661211f90401d86869f42_🎛️.avif",
      title: "Content That Ranks and Converts",
      description:
        "Keyword research and search-intent-led content, from service pages to blog posts, written to answer real customer questions and lead to action.",
    },
    {
      icon: "/services/69c661211c98fb7a418c3d59_🛡️.avif",
      title: "GEO & AEO for AI Search",
      description:
        "We structure your content with clear answers, strong entity signals, and schema markup, so AI tools and answer engines can understand and cite your brand.",
    },
    {
      icon: "/services/69c66121ad29b215144e535f_🧩.avif",
      title: "Transparent Reporting",
      description:
        "You see what is working through clear reports on organic traffic, rankings, leads, and revenue, tied to your business goals instead of vanity metrics.",
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
