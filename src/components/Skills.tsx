import { skills } from "../data/portfolio";
import { useReveal } from "../lib/useReveal";

export default function Skills() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">Technical Skills</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-text)]">
          What I work with.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6"
            >
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)] uppercase tracking-wide">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] px-3 py-1.5 text-sm text-[var(--color-text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--color-text-dim)] max-w-xl">
          AI tools are part of my workflow for productivity and problem-solving —
          they support my development process, not replace the engineering
          judgment behind it.
        </p>
      </div>
    </section>
  );
}
