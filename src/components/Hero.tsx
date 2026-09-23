import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import GithubIcon from "./icons/GithubIcon";
import { contact } from "../data/portfolio";

const nodes = [
  { label: "Frontend", detail: "React · TypeScript" },
  { label: "API", detail: "Node.js · REST" },
  { label: "Database", detail: "PostgreSQL · Neon" },
  { label: "Deploy", detail: "Vercel · Netlify" },
];

interface HeroProps {
  onOpenEmail?: () => void;
}

export default function Hero({ onOpenEmail }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 grid-texture overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,217,255,0.10),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-12 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/60 px-4 py-1.5 text-xs font-medium text-[var(--color-text-soft)] font-[family-name:var(--font-mono)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Available for development opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="mt-7 font-[family-name:var(--font-display)] font-extrabold text-[2.5rem] leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-[3.5rem] max-w-2xl"
            >
              Full-stack developer building practical digital products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg text-[var(--color-text-soft)] leading-relaxed"
            >
              I design, build and deploy web and mobile applications — frontend
              through backend, API integration, databases and production
              environments — for clients and businesses that need working
              software, not just a prototype.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[#04121A] hover:bg-[#33e3ff] transition-colors"
              >
                View my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://github.com/CodEdge-1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-colors"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href={`mailto:${contact.email}`}
                onClick={(e) => {
                  if (onOpenEmail) {
                    e.preventDefault();
                    onOpenEmail();
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[var(--color-text-soft)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
              >
                <Mail size={16} />
                Email me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[370px]">
              {/* Outer atmospheric cyan/blue glow aura */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[var(--color-accent)]/25 via-[var(--color-accent-2)]/20 to-transparent blur-xl opacity-75 -z-10" />

              {/* Futuristic tech frame card */}
              <div className="group relative rounded-3xl border border-[var(--color-accent)]/25 bg-[var(--color-card)]/80 p-2.5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Tech corner tick marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)]/60 rounded-tl pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)]/60 rounded-tr pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)]/60 rounded-bl pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)]/60 rounded-br pointer-events-none" />

                {/* Inner image container */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[var(--color-bg-alt)]">
                  <img
                    src="/alexander-ogbe.png"
                    alt="Ogbe Alexander - Full-Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle dark gradient overlay at the bottom for smooth blending */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070A0F]/85 via-[#070A0F]/20 to-transparent" />

                  {/* Overlaid status badge */}
                  <div className="absolute bottom-3 inset-x-3 rounded-xl border border-[var(--color-border)]/80 bg-[var(--color-bg)]/85 backdrop-blur-md p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-[family-name:var(--font-display)] font-bold text-sm text-[var(--color-text)]">
                          Ogbe Alexander
                        </p>
                        <p className="text-[11px] text-[var(--color-accent)] font-[family-name:var(--font-mono)]">
                          Full-Stack & Mobile Dev
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 font-[family-name:var(--font-mono)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badge top right */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-alt)]/90 backdrop-blur-md px-3 py-1.5 text-xs text-[var(--color-text)] shadow-lg font-[family-name:var(--font-mono)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                CODEGDE TECH
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pipeline visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/50 backdrop-blur-sm p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {nodes.map((node, i) => (
              <div key={node.label} className="flex items-center gap-3 flex-1">
                <div className="flex-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-5 py-4">
                  <p className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-text-dim)]">
                    0{i + 1}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display)] font-bold text-[var(--color-text)]">
                    {node.label}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-soft)]">{node.detail}</p>
                </div>
                {i < nodes.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="hidden lg:block shrink-0 text-[var(--color-accent)]/50"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
