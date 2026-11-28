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

export default function ContentCreative() {
  return (
    <>
      <CommonHeroSection
        smallHeading="Content & Creative"
        bigHeading={["Ready for Content", "That Actually Brings "]}
        bigHeadingItalic="in Customers?"
        paragraph="Tell us about your brand, your audience, and the content you need. RivoZen’s content and creative team will review what you have today and show you what to create next to attract, convince, and convert more customers."
        primaryBtn="Get a Free Content Audit"
        primaryBtnLink="/contact"
        secondaryBtn="Book A Call"
        secondaryBtnLink="/book-a-call"
      />

      <TwoSideCommonSection
        smallHeading="Your CONTENT & CREATIVE AGENCY"
        bigHeading="Content & Creative Services That Attract, "
        bigHeadingItalic="Convince, and Convert"
        paragraph="RivoZen is a content and creative agency that produces SEO-driven articles, product content, video, and ad creative for ecommerce brands and local businesses. Every piece is planned around a goal, whether that is ranking on Google, getting cited in AI search, or turning visitors into customers."
      />

      {/* cards section */}
      <CommonSection
        smallHeading="WHAT'S INCLUDED in Content and creative"
        bigHeading="Content Built to Do More "
        bigHeadingItalic="Than Look Good"
        paragraph="Content marketing means creating useful articles, videos, images, and copy that attract the right audience and move them toward buying. RivoZen plans and produces content and creative assets that rank on Google, get cited in AI search, and turn visitors into customers, not just fill your feed."
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
        smallHeading="OUR CONTENT PROCESS"
        bigHeading="From Research to Publish, Our Content Process"
        bigHeadingItalic=" Built to Perform 🚚"
        paragraph="Great content starts with research, not guesswork. Our four-step process plans, creates, and publishes content around your audience and goals, then measures what works."
        processList={process}
      />

      {/* clients reviews */}
      <CommonSection
        smallHeading="Customers stories"
        bigHeading="What It’s Like to Create Content"
        bigHeadingItalic=" with RivoZen 👇"
        paragraph="Ecommerce brands and local businesses work with RivoZen to publish content that gets found, builds trust, and turns readers into customers. Here is what the experience looks like."
        HeadingAlign="center"
        content={<ClientsReviewsCards />}
      />

      {/* faq section */}
      <CommonFaqSection
        bigHeading="Content & Creative Questions, "
        bigHeadingItalic="Answered"
        paragraph="Straight answers to what business owners ask most before working with RivoZen on content and creative."
        faqList={faqs}
      />

      {/* cta */}

      <CommonCta currentColor={2} />
    </>
  );
}

const process = [
  {
    title: "Research & Audience Insight",
    solution:
      "We study your audience, competitors, keywords, and existing content to find what your customers are searching for and where the biggest content gaps are.",
  },
  {
    title: "Strategy & Content Plan",
    solution:
      "We build a clear content roadmap with topics, formats, and a publishing calendar, each piece tied to a goal like ranking, leads, or sales.",
  },
  {
    title: "Creation & Review",
    solution:
      "Our team writes, designs, and produces your content, then shares drafts for your feedback. We refine until it matches your brand voice and goals.",
  },
  {
    title: "Publish, Measure & Improve",
    solution:
      "We publish across your website and channels, track performance, and update what works and what does not, so your content keeps growing in value.",
  },
];

const faqs = [
  {
    question: "What do content and creative services include?",
    answer: `Content and creative services include planning and producing the written, visual, and video assets your business uses to attract and convert customers. At RivoZen, this covers SEO articles, product and ecommerce content, video, ad creative, brand messaging, and a content strategy that ties it all together.`,
  },
  {
    question: "How much does content marketing cost?",
    answer:
      "Cost depends on content type, volume, and quality. A few blog posts cost far less than a monthly program with articles, video, and ad creative. Book a free call and we will recommend a plan after reviewing your goals.",
  },
  {
    question: "How long does it take for content to show results?",
    answer:
      "Content usually takes a few months to build traffic and rankings, while paid or social content can show engagement much faster. Results compound over time as you publish and update more. No honest agency can promise a fixed result in a fixed time.",
  },
  {
    question: "How often should I publish content?",
    answer:
      "Consistency matters more than volume. For most small businesses, a steady schedule you can maintain, such as a few quality articles per month, beats occasional bursts. We set a realistic publishing plan based on your goals, budget, and competition.",
  },
  {
    question: "Do you write content that ranks on Google and in AI search?",
    answer:
      "Yes, we create content built to rank and to be understood by AI tools like ChatGPT and Perplexity. That means clear structure, direct answers, strong entity signals, and proper schema markup. No one can guarantee rankings or AI citations, but this approach gives your content the best chance. See our SEO services.",
  },
  {
    question: "Will the content match my brand voice?",
    answer:
      "Yes. We start with a brand voice and messaging guide, then write and design to match it. You review drafts before anything is published, and we refine until it sounds like your business.",
  },
  {
    question: "Do you create video and ad creative too?",
    answer:
      "Yes. Besides written content, we produce short-form video, motion graphics, and ad creative for Google, Meta, and social platforms. This lets your content, ads, and social channels share one consistent look and message. See our paid advertising services.",
  },
  {
    question: "Who owns the content you create?",
    answer:
      "You do. Once a project is paid for, you own the content and creative assets we produce for you, and we hand over final files for your use.",
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
      title: "SEO Content & Blog Writing",
      description:
        "Search-led articles and service pages built around real customer questions, structured to rank on Google and be quoted by AI tools.",
    },
    {
      icon: "/services/69c66121f3b50821a0163bb8_🏆.avif",
      title: "Product & Ecommerce Content",
      description:
        "Product descriptions, category copy, and buying guides that help shoppers decide and help your store rank for what they search.",
    },
    {
      icon: "/services/69c6612157a7fd9f6e6f8a4c_🎯.avif",
      title: "Video & Motion Content",
      description:
        "Short-form videos, product demos, and motion graphics that grab attention on social, ads, and your website.",
    },
    {
      icon: "/services/69c661211f90401d86869f42_🎛️.avif",
      title: "Ad Creative & Social Content",
      description:
        "Scroll-stopping images, videos, and copy for Google, Meta, and social channels, designed from the start to perform in ads.",
    },
    {
      icon: "/services/69c661211c98fb7a418c3d59_🛡️.avif",
      title: "Brand Storytelling & Messaging",
      description:
        "Clear brand voice, messaging, and visual direction, so every piece of content feels consistent and builds trust across every channel.",
    },
    {
      icon: "/services/69c66121ad29b215144e535f_🧩.avif",
      title: "Content Strategy & Calendar",
      description:
        "A planned content roadmap tied to your goals and keywords, so every piece has a purpose instead of random posting.",
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
