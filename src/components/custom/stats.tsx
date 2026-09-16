"use client";

import { Reveal } from "./reveal";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Businesses Supported" },
  { value: "300+", label: "Campaigns Launched" },
  { value: "5y+", label: "Years of Experience" },
];

export function Stats() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="text-4xl font-semibold tracking-tight md:text-6xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
