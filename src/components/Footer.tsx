import { Mail, Phone } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { contact } from "../data/portfolio";

interface FooterProps {
  onOpenEmail?: () => void;
}

export default function Footer({ onOpenEmail }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-soft)] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">
            {contact.name}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-soft)]">{contact.title}</p>
        </div>

        <div className="flex items-center gap-5 text-[var(--color-text-soft)]">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent)] transition-colors">
            <GithubIcon size={18} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            onClick={(e) => {
              if (onOpenEmail) {
                e.preventDefault();
                onOpenEmail();
              }
            }}
            aria-label="Email"
            className="hover:text-[var(--color-accent)] transition-colors cursor-pointer"
          >
            <Mail size={18} />
          </a>
          <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} aria-label="Phone" className="hover:text-[var(--color-accent)] transition-colors">
            <Phone size={18} />
          </a>
        </div>

        <p className="text-xs text-[var(--color-text-dim)] font-[family-name:var(--font-mono)]">
          © {year} {contact.name}
        </p>
      </div>
    </footer>
  );
}
