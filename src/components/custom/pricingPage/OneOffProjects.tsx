import Image from "next/image";
import { Reveal, RevealItem, RevealStagger } from "../reveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";
import { allColorsArray } from "@/utils/ColorsArray";

const oneOffProjects = [
  "Website Design & Development",
  "Paid Advertising",
  "SEO Optimization",
  "Lead Generation",
  "Content & Creative",
  "AI Workflow Automation",
];

export default function OneOffProjects() {
  return (
    <>
      {" "}
      <section className="border-y border-border px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-10 lg:p-14">
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src="/bg-gradient.svg"
                  alt=""
                  fill
                  className="object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
              </div>

              <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                    One-off projects
                  </p>

                  <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                    Not Looking for an{" "}
                    <span className="font-serif italic text-primary">
                      Ongoing Plan?
                    </span>
                  </h2>

                  <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                    No problem. Rivozen also offers flexible project-based
                    support when a monthly digital service package isn’t the
                    right fit.
                  </p>

                  <div className="mt-7">
                    <Button
                      type="button"
                      variant={"btn"}
                      href="/book-a-call#booking"
                    >
                      Discuss a project
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <RevealStagger className="grid gap-3 sm:grid-cols-2">
                  {oneOffProjects.map((project, i) => (
                    <RevealItem
                      key={project}
                      className={`flex items-center gap-3 rounded-xl border border-border bg-[${allColorsArray[i]?.bgColor}] p-4 backdrop-blur-sm`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000]/20">
                        <Check className="h-4 w-4 text-black" />
                      </div>

                      <span className="text-sm font-medium">{project}</span>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
