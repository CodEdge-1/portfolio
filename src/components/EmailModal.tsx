import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, ExternalLink, Mail, Send, X } from "lucide-react";
import { contact } from "../data/portfolio";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contact.email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = contact.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contact.email
  )}&su=${encodeURIComponent("Project Inquiry / Opportunity")}`;

  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
    "Project Inquiry / Opportunity"
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-2xl border border-[var(--color-accent)]/30 bg-[#0C121D] p-6 shadow-[0_25px_60px_-15px_rgba(0,217,255,0.25)] z-10"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 p-2.5 text-[var(--color-accent)]">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--color-text)]">
                    Send an Email
                  </h3>
                  <p className="text-xs text-[var(--color-text-soft)]">
                    Direct to <span className="text-[var(--color-accent)] font-medium">{contact.email}</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-[var(--color-text-dim)] hover:text-[var(--color-text)] hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Options */}
            <div className="mt-6 space-y-3">
              {/* Option 1: Gmail */}
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-4 text-left hover:border-[var(--color-accent)] hover:bg-[var(--color-card)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[#04121A] transition-colors">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-text)]">
                      Open in Gmail (Web)
                    </p>
                    <p className="text-xs text-[var(--color-text-soft)]">
                      Compose directly in your browser
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Open →
                </span>
              </a>

              {/* Option 2: Default Mail Client */}
              <a
                href={mailtoUrl}
                onClick={onClose}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-4 text-left hover:border-[var(--color-accent)] hover:bg-[var(--color-card)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Send size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-text)]">
                      Default Mail App
                    </p>
                    <p className="text-xs text-[var(--color-text-soft)]">
                      Outlook, Apple Mail, Thunderbird
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Launch →
                </span>
              </a>

              {/* Option 3: Copy Email */}
              <button
                type="button"
                onClick={copyToClipboard}
                className="w-full group flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-4 text-left hover:border-[var(--color-accent)] hover:bg-[var(--color-card)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                      copied
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-white/5 text-[var(--color-text-soft)] group-hover:text-[var(--color-text)]"
                    }`}
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-text)]">
                      {copied ? "Copied to Clipboard!" : "Copy Email Address"}
                    </p>
                    <p className="text-xs text-[var(--color-text-soft)] font-[family-name:var(--font-mono)]">
                      {contact.email}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    copied ? "text-emerald-400" : "text-[var(--color-text-dim)]"
                  }`}
                >
                  {copied ? "✓ Copied" : "Copy"}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
