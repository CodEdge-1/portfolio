import { Code2, Database, Globe, Server, Smartphone, Wrench } from "lucide-react";
import { useReveal } from "../lib/useReveal";

const focus = [
  { icon: Globe, label: "Web Applications" },
  { icon: Smartphone, label: "Mobile Applications" },
  { icon: Server, label: "APIs & Integrations" },
  { icon: Database, label: "Databases" },
  { icon: Wrench, label: "Deployment" },
  { icon: Code2, label: "Business Digital Solutions" },
];

export default function About() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">About</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-text)]">
            Hands-on, end to end.
          </h2>
          <div className="mt-6 space-y-4 text-[var(--color-text-soft)] leading-relaxed max-w-xl">
            <p>
              I hold an HND in Computer Engineering and work as a full-stack
              developer building web and mobile applications — from client
              requirements through frontend, backend, API and database
              integration, to a deployed production application.
            </p>
            <p>
              I run <span className="text-[var(--color-text)] font-medium">CODEGDE TECHNOLOGIES</span>,
              where I take on real client projects, and I develop Android
              applications in Kotlin alongside my web work. I use AI-assisted
              development tools — Claude, ChatGPT, Gemini and Grok — as part
              of my day-to-day workflow, the same way I'd use any other
              development tool.
            </p>
            <p>
              I enjoy solving practical technical problems and continuously
              picking up the tools and techniques a project actually needs.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 lg:p-8">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-dim)] uppercase tracking-wide">
            Developer focus
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {focus.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="rounded-lg border border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] p-4 flex flex-col gap-3"
              >
                <Icon size={18} className="text-[var(--color-accent)]" />
                <span className="text-sm font-medium text-[var(--color-text)] leading-snug">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
