import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { contact } from "../data/portfolio";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#070A0F]/90 backdrop-blur-md border-b border-[var(--color-border-soft)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-3 font-[family-name:var(--font-display)] font-bold text-lg tracking-tight text-[var(--color-text)]"
        >
          <div className="relative">
            <img
              src="/alexander-ogbe.png"
              alt="Ogbe Alexander"
              className="h-8 w-8 rounded-full object-cover border border-[var(--color-accent)]/40 ring-1 ring-[var(--color-accent)]/20 transition-transform group-hover:scale-105"
            />
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-[#070A0F]" />
          </div>
          <span>
            Ogbe<span className="text-[var(--color-accent)]">.</span>Alexander
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-[family-name:var(--font-body)] text-sm text-[var(--color-text-soft)]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--color-text)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-[var(--color-text-soft)] hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-md border border-[var(--color-accent)]/40 px-4 py-2 text-sm font-medium text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="lg:hidden text-[var(--color-text)]"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-4 mx-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-[var(--color-text-soft)] hover:text-[var(--color-text)] hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--color-border-soft)] px-3">
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-[var(--color-text-soft)]">
              <GithubIcon size={20} />
            </a>
            <span className="text-xs text-[var(--color-text-dim)] font-[family-name:var(--font-mono)]">
              {contact.github.replace("https://", "")}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
