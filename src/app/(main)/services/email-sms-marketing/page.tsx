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

export default function EmailSmsMarketing() {
  return (
    <>
      <CommonHeroSection
        smallHeading="Email & SMS Marketing"
        bigHeading={["Ready to Turn", " One-Time Buyers Into"]}
        bigHeadingItalic="Repeat Customers?"
        paragraph="Tell us about your store or business, your current customer list, and your goals. RivoZen’s email and SMS team will review what you have today and show you where automated messages can bring more repeat sales."
        primaryBtn="Get a Free Email & SMS Audit"
        primaryBtnLink="/contact"
        secondaryBtn="Book A Call"
        secondaryBtnLink="/book-a-call"
      />

      <TwoSideCommonSection
        smallHeading="EMAIL & SMS MARKETING AGENCY"
        bigHeading="Email & SMS Marketing Services That Turn"
        bigHeadingItalic="Customers Into Repeat Buyers"
        paragraph="RivoZen is an email and SMS marketing agency that builds automated flows and campaigns for ecommerce brands and local businesses. From welcome series and abandoned cart messages to win-back campaigns, we help you earn more from the customers and subscribers you already have, with consent and deliverability built in."
      />

      {/* cards section */}
      <CommonSection
        smallHeading="What you got"
        bigHeading="Email and SMS Built to Do More Than Fill Inboxes, "
        bigHeadingItalic="They Bring Customers Back"
        paragraph="Email and SMS marketing means sending permission-based messages directly to your customers’ inboxes and phones, such as promotions, reminders, and follow-ups. RivoZen builds the automated flows and campaigns that turn first-time buyers into repeat customers, and keeps your sender reputation healthy while doing it."
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
        bigHeading="Design made easy, from brief to"
        bigHeadingItalic=" delivery 🚚"
        paragraph=""
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

      <CommonCta currentColor={3} />
    </>
  );
}

const process = [
  {
    title: "Your brand feels inconsistent.",
    solution:
      "We build a clear brand identity and visual system so your business looks intentional and professional across every channel - web, social, SEO and ads.",
  },
  {
    title: "Your website isn't converting.",
    solution:
      "We combine web design, development, and CRO to simplify the experience, strengthen your visual hierarchy, and turn more visitors into leads and sales.",
  },
  {
    title: "Your marketing isn't driving growth.",
    solution:
      "We become an extension of your team - running SEO, GEO, AEO, paid advertising, and content & creative campaigns that deliver measurable, sustainable growth.",
  },
  {
    title: "You have a great idea but don't know where to start.",
    solution:
      "We turn early ideas into a clear business growth strategy and a practical roadmap. aligning design, marketing, and execution from day one. ",
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
      title: "Welcome & Onboarding Flows",
      description:
        "A timed series of messages that introduces your brand to new subscribers and guides them toward their first purchase.",
    },
    {
      icon: "/services/69c66121f3b50821a0163bb8_🏆.avif",
      title: "Abandoned Cart & Browse Recovery",
      description:
        "Automated reminders that bring back shoppers who left items behind or viewed products without buying.",
    },
    {
      icon: "/services/69c6612157a7fd9f6e6f8a4c_🎯.avif",
      title: "Post-Purchase & Win-Back Flows",
      description:
        "Follow-ups that thank customers, ask for reviews, suggest what to buy next, and re-engage people who have gone quiet.",
    },
    {
      icon: "/services/69c661211f90401d86869f42_🎛️.avif",
      title: "Campaigns & SMS Marketing",
      description:
        "Targeted email and SMS campaigns for launches, offers, and seasonal events, sent to the right segment at the right time",
    },
    {
      icon: "/services/69c661211c98fb7a418c3d59_🛡️.avif",
      title: "List Growth & Segmentation",
      description:
        "Signup forms, popups, and smart segments that grow your subscriber list with consent and make every message more relevant.",
    },
    {
      icon: "/services/69c66121ad29b215144e535f_🧩.avif",
      title: "Deliverability & Compliance",
      description:
        "Authentication setup (SPF, DKIM, DMARC), list hygiene, and clear opt-in and unsubscribe handling, so your messages reach the inbox and respect the rules.",
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
