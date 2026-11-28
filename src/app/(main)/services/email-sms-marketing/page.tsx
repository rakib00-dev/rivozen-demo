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
        smallHeading="OUR EMAIL & SMS PROCESS"
        bigHeading="From Audit to Automation, Our Email & SMS Process Built to "
        bigHeadingItalic=" Bring Customers Back 🤖"
        paragraph="Great email and SMS marketing is built once and improved forever. Our four-step process sets up the right foundation, launches automated flows, and keeps refining them with real data."
        processList={process}
      />

      {/* clients reviews */}
      <CommonSection
        smallHeading="Customers stories"
        bigHeading="What It’s Like to Grow Repeat Sales "
        bigHeadingItalic="with RivoZen 👇"
        paragraph="Ecommerce brands and local businesses work with RivoZen to bring customers back, recover lost sales, and build lasting relationships through email and SMS. Here is what the experience looks like."
        HeadingAlign="center"
        content={<ClientsReviewsCards />}
      />

      {/* faq section */}
      <CommonFaqSection
        bigHeading="Email & SMS Marketing Questions, "
        bigHeadingItalic="Answered"
        paragraph="Straight answers to what business owners ask most before starting email and SMS marketing with RivoZen."
        faqList={faqs}
      />

      {/* cta */}

      <CommonCta currentColor={3} />
    </>
  );
}

const process = [
  {
    title: "Audit & Setup",
    solution:
      "We review your current email and SMS accounts, list health, and deliverability, then set up proper tracking, sender authentication, and consent so messages reach the inbox and follow the rules.",
  },
  {
    title: "Strategy & Segmentation",
    solution:
      "We map your customer journey and build a plan for flows and campaigns, with segments based on behavior like new subscribers, first-time buyers, and lapsed customers.",
  },
  {
    title: "Build & Launch",
    solution:
      "We write, design, and launch your welcome, abandoned cart, post-purchase, and win-back flows, plus campaigns for offers and launches, after your review and approval.",
  },
  {
    title: "Test, Measure & Optimize",
    solution:
      "We test subject lines, timing, and offers, track opens, clicks, and revenue, and keep improving your flows so they earn more over time.",
  },
];

const faqs = [
  {
    question: "What do email and SMS marketing services include?",
    answer: `Email and SMS marketing services include planning, building, and managing the messages you send to customers who have opted in. This covers automated flows (welcome, abandoned cart, post-purchase, win-back), campaigns, list growth, segmentation, deliverability setup, and reporting.`,
  },
  {
    question: "How much do email and SMS marketing services cost?",
    answer:
      "Cost has two parts: your platform fees (such as Klaviyo or Mailchimp, usually based on list size) and the agency’s management fee. The right scope depends on your list size, number of flows, and campaign volume. Book a free call and we will recommend a plan after reviewing your setup.",
  },
  {
    question: "Do I need both email and SMS?",
    answer:
      "Not always. Email suits longer, detailed messages like newsletters, product stories, and receipts, while SMS suits short, time-sensitive messages like reminders and flash offers. Many businesses start with email and add SMS once their list and consent process are in place. We recommend the right mix after reviewing your goals and audience.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "utomated flows can start generating revenue soon after launch, since they reach people who are already interested. Bigger gains usually build over a few months as your list grows and tests improve your messages. No honest agency can promise a fixed result in a fixed time.",
  },
  {
    question: "What email flows should an ecommerce store have?",
    answer:
      "Most ecommerce stores should start with five core flows: a welcome series, abandoned cart, browse abandonment, post-purchase follow-up, and a win-back flow for lapsed customers. These run automatically and reach customers at the moments they are most likely to act. We add more, like back-in-stock or birthday flows, as your list grows.",
  },
  {
    question: "How do you stop my emails from going to spam?",
    answer:
      "We set up sender authentication (SPF, DKIM, and DMARC), clean inactive contacts from your list, send only to people who opted in, and monitor engagement. These steps protect your sender reputation, which is the main factor in inbox placement. No one can guarantee inbox delivery, but good setup and list hygiene make a major difference.",
  },
  {
    question: "Is SMS marketing legal, and how do you handle consent?",
    answer:
      "SMS marketing is legal in most places when you have clear consent and offer an easy opt-out, but rules differ by country. We collect consent through clear signup language, include opt-out instructions in messages, and respect unsubscribe requests right away. This is general information, not legal advice, so check the rules in your own market.",
  },
  {
    question: "Do I own my subscriber list and accounts?",
    answer:
      "Yes. Your subscriber list, platform account, and customer data stay in your name, and we work inside them as managers. If you ever leave, you keep full access to your list, flows, and history.",
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
