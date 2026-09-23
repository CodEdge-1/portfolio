import { buildProcess } from "../data/portfolio";
import { useReveal } from "../lib/useReveal";

export default function Process() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">How I Build</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-text)] max-w-xl">
          A consistent process, from requirement to production.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {buildProcess.map((step, i) => (
            <div key={step.index} className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6">
              <p className="font-[family-name:var(--font-mono)] text-2xl font-bold text-[var(--color-accent)]/70">
                {step.index}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-soft)] leading-relaxed">{step.detail}</p>
              {i < buildProcess.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 h-px w-5 bg-[var(--color-border)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
