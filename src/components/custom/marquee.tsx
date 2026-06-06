'use client'

const items = [
  'Brand Identity',
  'Web Design',
  'Illustration',
  'Motion Graphics',
  'Social Media',
  'Presentations',
  'Logo Design',
  'Print Design',
]

export function Marquee() {
  return (
    <section className="border-y border-border py-5">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10">
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-10 pr-10"
        >
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  )
}
