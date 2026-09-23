import { ArrowUpRight } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { contact } from "../data/portfolio";
import { useReveal } from "../lib/useReveal";

export default function GitHubCTA() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] p-3">
              <GithubIcon size={22} className="text-[var(--color-accent)]" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[var(--color-text)]">
                Explore the code
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-text-soft)] max-w-md">
                I keep selected projects and development work on GitHub —
                client builds, Android practice repos and work in progress.
              </p>
            </div>
          </div>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md border border-[var(--color-accent)]/40 px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors"
          >
            View GitHub
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
