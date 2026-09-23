import { Mail, MapPin, Phone } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { contact } from "../data/portfolio";
import { useReveal } from "../lib/useReveal";

interface ContactProps {
  onOpenEmail?: () => void;
}

export default function Contact({ onOpenEmail }: ContactProps) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-[var(--color-border-soft)]">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="rounded-3xl border border-[var(--color-accent)]/20 bg-[var(--color-card)] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(0,217,255,0.08),transparent)]" />
          <div className="relative">
            <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">Contact</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] font-bold text-3xl sm:text-5xl text-[var(--color-text)] max-w-xl">
              Have a project or opportunity?
            </h2>
            <p className="mt-5 max-w-lg text-[var(--color-text-soft)] leading-relaxed">
              I'm open to full-stack development opportunities, client
              projects and collaborations.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                onClick={(e) => {
                  if (onOpenEmail) {
                    e.preventDefault();
                    onOpenEmail();
                  }
                }}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[#04121A] hover:bg-[#33e3ff] transition-colors cursor-pointer"
              >
                <Mail size={16} />
                Email me
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-colors"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-text-soft)]">
              <a
                href={`mailto:${contact.email}`}
                onClick={(e) => {
                  if (onOpenEmail) {
                    e.preventDefault();
                    onOpenEmail();
                  }
                }}
                className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors cursor-pointer"
              >
                <Mail size={15} className="text-[var(--color-text-dim)]" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone size={15} className="text-[var(--color-text-dim)]" />
                {contact.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-[var(--color-text-dim)]" />
                {contact.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
