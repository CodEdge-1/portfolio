import { ArrowUpRight } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import type { Project } from "../data/portfolio";

function StatusPill({ status }: { status: Project["status"] }) {
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium font-[family-name:var(--font-mono)] ${
        live
          ? "border-[var(--color-accent)]/30 text-[var(--color-accent)] bg-[var(--color-accent)]/5"
          : "border-[var(--color-border)] text-[var(--color-text-soft)]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-[var(--color-accent)]" : "bg-[var(--color-text-dim)]"}`} />
      {status}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const isPrimary = project.size === "primary";
  const isSecondary = project.size === "secondary";

  return (
    <article
      className={`group relative rounded-2xl border bg-[var(--color-card)] transition-all duration-300 hover:border-[var(--color-accent)]/40 ${
        isPrimary
          ? "border-[var(--color-accent)]/25 p-7 lg:p-10 shadow-[0_0_0_1px_rgba(0,217,255,0.04),0_20px_60px_-30px_rgba(0,217,255,0.25)]"
          : "border-[var(--color-border)] p-6 lg:p-7"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
            {project.index} — {project.eyebrow}
          </p>
          <h3
            className={`mt-2 font-[family-name:var(--font-display)] font-bold text-[var(--color-text)] ${
              isPrimary ? "text-3xl lg:text-4xl" : isSecondary ? "text-2xl" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-soft)]">{project.category}</p>
        </div>
        <StatusPill status={project.status} />
      </div>

      <p
        className={`mt-5 text-[var(--color-text-soft)] leading-relaxed ${
          isPrimary ? "max-w-2xl" : "text-sm"
        }`}
      >
        {project.overview}
      </p>

      {(isPrimary || isSecondary) && (
        <div className={`mt-6 grid gap-6 ${isPrimary ? "lg:grid-cols-2" : ""}`}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">
              My contribution
            </p>
            <ul className="mt-3 space-y-2">
              {project.contribution.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-[var(--color-text-soft)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {isPrimary && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">
                Development process
              </p>
              <ol className="mt-3 space-y-2">
                {project.process.map((step, i) => (
                  <li key={step} className="flex gap-2.5 text-sm text-[var(--color-text-soft)]">
                    <span className="font-[family-name:var(--font-mono)] text-[var(--color-accent)]/70">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {project.size === "support" && (
        <ul className="mt-4 space-y-1.5">
          {project.contribution.map((item) => (
            <li key={item} className="flex gap-2 text-xs text-[var(--color-text-soft)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]/70" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] px-2.5 py-1 text-[11px] font-[family-name:var(--font-mono)] text-[var(--color-text-soft)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-[var(--color-border-soft)] pt-5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
          >
            View live site
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-soft)] hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon size={15} />
            View GitHub
          </a>
        )}
      </div>
    </article>
  );
}
