import { allColorsArray } from "@/utils/ColorsArray";
import { RevealItem } from "../custom/reveal";
import {
  Target,
  Zap,
  Users,
  Sparkles,
  MessageCircle,
  Check,
} from "lucide-react";

interface CommonCardObj {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const CommonCards = ({
  cards = [
    {
      number: "01",
      icon: Target,
      title: "Full-Service Digital Support",
      description:
        "From web design and SEO, GEO, AEO to Meta Ads, Google Ads, and digital marketing.",
    },
    {
      number: "02",
      icon: Zap,
      title: "Unlimited Revisions",
      description:
        "Keep refining your work until it feels right and meets your goals.",
    },
    {
      number: "03",
      icon: Users,
      title: "Fast Turnaround",
      description:
        "Stay productive with focused delivery times and a streamlined workflow.",
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Clear Communication",
      description:
        "Simple, direct communication without unnecessary meetings or complexity.",
    },
    {
      number: "05",
      icon: MessageCircle,
      title: "Flexible Collaboration",
      description: "Work with Rivozen as an extension of your existing team.",
    },
    {
      number: "06",
      icon: Check,
      title: "Source Files Included",
      description: "Get full access to design files, assets, and deliverables.",
    },
  ],
}: {
  cards: CommonCardObj[];
}) => {
  return (
    <>
      {[...cards].map((item, i) => {
        const Icon = item.icon;
        console.log({ i, color: allColorsArray[i]?.bgColor });
        return (
          <RevealItem
            key={item.number}
            className={`group rounded-2xl border border-border bg-[${allColorsArray[i]?.bgColor}] p-6 transition-colors hover:bg-muted/40 md:p-7`}
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-black" />
              </div>

              <span className="text-sm text-muted-foreground">
                {item.number}
              </span>
            </div>

            <h3 className="mt-8 text-xl font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </RevealItem>
        );
      })}
    </>
  );
};

export default CommonCards;
