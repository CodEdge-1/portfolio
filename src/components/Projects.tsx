import GithubIcon from "./icons/GithubIcon";
import { androidProjects, projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import { useReveal } from "../lib/useReveal";

export default function Projects() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.1);
  const primary = projects.find((p) => p.size === "primary")!;
  const secondary = projects.find((p) => p.size === "secondary")!;
  const support = projects.filter((p) => p.size === "support");

  return (
    <section id="projects" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">Featured Projects</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-text)] max-w-xl">
          Real projects, shipped and running.
        </h2>
        <p className="mt-4 max-w-xl text-[var(--color-text-soft)] leading-relaxed">
          Ordered by weight, not chronology — the client work I've taken from
          requirements to production sits first.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          <ProjectCard project={primary} />
          <ProjectCard project={secondary} />

          <div className="grid sm:grid-cols-2 gap-6">
            {support.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 lg:p-7">
            <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)]">
              04 — Selected Android / GitHub Projects
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-display)] font-bold text-xl text-[var(--color-text)]">
              Android & practice repositories
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-soft)] max-w-lg">
              Smaller Kotlin / Android Studio repositories from coursework and
              practice, kept public alongside the client work above.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {androidProjects.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] px-4 py-3 text-sm hover:border-[var(--color-accent)]/40 transition-colors"
                  >
                    <span>
                      <span className="block font-[family-name:var(--font-mono)] text-[var(--color-text)]">
                        {p.name}
                      </span>
                      <span className="block mt-0.5 text-xs text-[var(--color-text-soft)]">{p.note}</span>
                    </span>
                    <GithubIcon size={16} className="shrink-0 text-[var(--color-text-dim)]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
