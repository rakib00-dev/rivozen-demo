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

export default function PaidAdvertising() {
  return (
    <>
      <CommonHeroSection
        smallHeading="Web Design"
        bigHeading={["Ready to Turn Ad Spend "]}
        bigHeadingItalic="Into Customers?"
        paragraph="Tell us about your business, your current ads, and your goals. RivoZen’s paid advertising team will review your campaigns and show you where your budget can work harder."
        primaryBtn="Get a Ads Audit Quote"
        primaryBtnLink="/contact"
        secondaryBtn="Book A Call"
        secondaryBtnLink="/book-a-call"
      />

      <TwoSideCommonSection
        smallHeading="GOOGLE & META ADS AGENCY"
        bigHeading="Paid Advertising Services That Turn Clicks"
        bigHeadingItalic="Into Customers"
        paragraph="RivoZen is a paid advertising agency that plans, launches, and optimizes Google Ads and Meta Ads for ecommerce brands and local businesses. We focus on the right audience, strong creative, and clear tracking, so every dollar of your ad budget works toward leads and sales."
      />

      {/* cards section */}
      <CommonSection
        smallHeading="What is included"
        bigHeading="Paid Ads Built to Do More "
        bigHeadingItalic="Than Get Clicks"
        paragraph="Paid advertising means paying to show your ads to the right people on platforms like Google and Meta, and only paying for the attention you get. RivoZen plans, launches, and optimizes these campaigns so your budget brings in qualified leads and sales, not just traffic."
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
        smallHeading="Ads Process"
        bigHeading="From Audit to Optimization, Our Ad Process "
        bigHeadingItalic="Built for ROI 🚚"
        paragraph="Good paid advertising is tested and refined, not set and forgotten. Our four-step process starts with tracking and strategy, then keeps improving results week after week."
        processList={process}
      />

      {/* clients reviews */}
      <CommonSection
        smallHeading="Customers stories"
        bigHeading="What It’s Like to Run Ads with "
        bigHeadingItalic="RivoZen Paid 👇"
        HeadingAlign="center"
        paragraph="Ecommerce brands and local businesses work with RivoZen to run smarter Google and Meta campaigns, track what matters, and turn ad spend into leads and sales. Here is what the experience looks like."
        content={<ClientsReviewsCards />}
      />

      {/* faq section */}
      <CommonFaqSection
        bigHeading="Paid Advertising Questions,"
        bigHeadingItalic=" Answered"
        paragraph="Straight answers to what business owners ask most before running Google Ads and Meta Ads with RivoZen."
        faqList={faqs}
      />

      {/* cta */}

      <CommonCta
        currentColor={4}
        bigHeading="Ready to Make Every Ad Dollar"
        bigHeadingItalic=" Work Harder?"
        paragraph="Get a free ad audit from RivoZen. We will review your current campaigns, tracking, and targeting, then show you where your budget is being wasted and where it can grow, with no long-term contract required."
        primaryBtn="Get a Free Ad Audit"
        primaryBtnLink="/book-a-call"
        secondaryBtn="See Our Ad Results"
        secondaryBtnLink="/work"
      />
    </>
  );
}

const process = [
  {
    title: "Audit & Goal Setting",
    solution:
      "We review your current ad accounts, website, and tracking, then define clear goals like cost per lead, sales, or return on ad spend (ROAS), so we know what success looks like.",
  },
  {
    title: "Strategy & Campaign Setup",
    solution:
      "We choose the right platforms and campaign types, build your audiences and keywords, create ad copy and creative, and set up accurate conversion tracking before spending your budget.",
  },
  {
    title: "Launch & Testing",
    solution:
      "We launch your campaigns and test ad variations, audiences, and landing pages, so we quickly learn what works instead of guessing.",
  },
  {
    title: "Optimize & Scale",
    solution:
      "We cut waste, shift budget to your best-performing campaigns, and scale what works, with regular reports on spend, leads, sales, and ROAS.",
  },
];

const faqs = [
  {
    question: "What do paid advertising services include?",
    answer: `Paid advertising services include planning, launching, and managing ad campaigns on platforms like Google and Meta. This covers audience and keyword research, ad copy and creative, conversion tracking, budget management, testing, and regular reporting. RivoZen handles all of it, so you focus on running your business.`,
  },
  {
    question: "How much does paid advertising management cost?",
    answer:
      "Cost has two parts: your ad spend (paid to Google or Meta) and the agency’s management fee. The right budget depends on your industry, competition, and goals. Book a free call and we will recommend a budget after reviewing your goals.",
  },
  {
    question: "How much should I spend on ads?",
    answer:
      "Start with a budget large enough to gather real data, usually several weeks of consistent spend, then scale what works. The right amount depends on your product price, profit margin, and target cost per lead or sale. We help you set a realistic starting budget rather than guess.",
  },
  {
    question: "How long does it take for paid ads to work?",
    answer:
      "Paid ads can start bringing traffic within days of launch, but they usually need a few weeks of testing and optimization before results stabilize. Unlike SEO, ads stop when the budget stops. No honest agency can promise a fixed result in a fixed time.",
  },
  {
    question: "Google Ads or Meta Ads: which is better for my business?",
    answer:
      "Google Ads reaches people actively searching for what you sell, so it suits high-intent leads and purchases. Meta Ads (Facebook and Instagram) reaches people while they browse, so it suits discovery, brand awareness, and visual products. Many businesses use both together, and we recommend the mix after reviewing your goals and budget.",
  },
  {
    question: "Do I own my ad accounts and data?",
    answer:
      "Yes. Your ad accounts, pixels, and data stay in your name, and we work inside them as managers. If you ever leave, you keep full access to your campaigns, audiences, and history.",
  },
  {
    question: "How do you measure ad performance?",
    answer:
      "We track the metrics that tie to your business: leads, sales, cost per lead, cost per acquisition, and return on ad spend (ROAS). We set up conversion tracking before launch, so reports show real results instead of clicks and impressions alone.",
  },
  {
    question: "Should I invest in paid ads or SEO?",
    answer:
      "Paid ads bring faster results but stop when you stop paying, while SEO builds slower, compounding traffic over time. Many businesses use ads for immediate leads while SEO grows in the background. If you want long-term organic growth too, see our SEO services.",
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
      title: "Google Ads Management",
      description:
        "Search, Shopping, and Performance Max campaigns that reach people already searching for what you sell, with keywords, bids, and ad copy refined by real data.",
    },
    {
      icon: "/services/69c66121f3b50821a0163bb8_🏆.avif",
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Targeted campaigns that put your brand in front of the right audiences on Facebook and Instagram, with creative built to stop the scroll and drive action.",
    },
    {
      icon: "/services/69c6612157a7fd9f6e6f8a4c_🎯.avif",
      title: "Remarketing & Retargeting",
      description:
        "We bring back visitors who viewed your products or services but did not buy, using tailored ads at the moments they are most likely to convert.",
    },
    {
      icon: "/services/69c661211f90401d86869f42_🎛️.avif",
      title: "Ecommerce & Local Campaigns",
      description:
        "Product feed and shopping campaigns for online stores, and location-based campaigns for local businesses, so your budget reaches customers who can actually buy from you.",
    },
    {
      icon: "/services/69c661211c98fb7a418c3d59_🛡️.avif",
      title: "Conversion Tracking & Analytics",
      description:
        "We set up accurate tracking for purchases, calls, and form leads, so every campaign decision is based on real results instead of guesses.",
    },
    {
      icon: "/services/69c66121ad29b215144e535f_🧩.avif",
      title: "Transparent Reporting & Ownership",
      description:
        "You own your ad accounts and data, and see clear reports on spend, leads, sales, and ROAS, with no hidden fees or locked-in access.",
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
