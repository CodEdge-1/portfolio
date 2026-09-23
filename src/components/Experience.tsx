import { experience, education } from "../data/portfolio";
import { useReveal } from "../lib/useReveal";
import { GraduationCap } from "lucide-react";

export default function Experience() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">Experience</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-text)]">
          Where I've worked.
        </h2>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
          <ol className="relative border-l border-[var(--color-border)] pl-6 space-y-8">
            {experience.map((item) => (
              <li key={item.company + item.role} className="relative">
                <span
                  className={`absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full ${
                    item.emphasis ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-dim)]"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">
                    {item.company}
                  </h3>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-[var(--color-text-soft)]">{item.role}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-[var(--color-text-soft)]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 lg:p-7 h-fit">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-[var(--color-accent)]" />
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)] uppercase tracking-wide">
                Education
              </p>
            </div>
            <ul className="mt-5 space-y-5">
              {education.map((item) => (
                <li key={item.title} className="border-l-2 border-[var(--color-border-soft)] pl-4">
                  <p className="text-sm font-medium text-[var(--color-text)] leading-snug">{item.title}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-soft)]">{item.place}</p>
                  <p className="mt-0.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
                    {item.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
