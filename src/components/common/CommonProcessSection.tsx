import { Reveal } from "../custom/reveal";

interface PROCESS {
  title: string;
  solution: string;
}

interface CommonProcessSection {
  smallHeading?: string;
  bigHeading: string;
  bigHeadingItalic: string;
  paragraph: string;
  processList: PROCESS[];
}

export default function CommonProcessSection({
  processList,
  smallHeading = "How we work",
  bigHeading,
  bigHeadingItalic,
  paragraph,
}: CommonProcessSection) {
  return (
    <section className="bg-muted/30 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                {smallHeading}
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {bigHeading}
                <span className="font-serif italic">{bigHeadingItalic}</span>
              </h2>

              <p className="mt-5 leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            </div>

            <div className="grid gap-4">
              {processList.map((problem, index) => (
                <div
                  key={problem.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex gap-5">
                    <span className="text-sm text-primary">0{index + 1}</span>

                    <div>
                      <h3 className="text-xl font-semibold">{problem.title}</h3>

                      <p className="mt-2 leading-relaxed text-muted-foreground">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
