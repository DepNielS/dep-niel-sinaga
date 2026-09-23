import { ArrowUp, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
} from "react-icons/fa6";

const footerLinks = [
  { label: "Home", href: "" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      {/* Top Content */}
      <div className="container-main py-9">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          {/* Identity */}
          <div>
            <p className="text-[15px] font-semibold tracking-tight text-[var(--foreground)]">
              Dep` Niel Sinaga
            </p>

            <p className="mt-1.5 text-sm text-[var(--muted)]">
              Junior Web Developer
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--foreground)]/60 transition-colors duration-300 hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Full-width Divider */}
      <div
        aria-hidden="true"
        className="border-t border-[var(--border)]"
      />

      {/* Bottom Content */}
      <div className="container-main py-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-[var(--foreground)]/50">
            © {new Date().getFullYear()} Dep` Niel Sinaga.
            <span className="hidden sm:inline">
              {" "}
              All rights reserved.
            </span>
          </p>

          {/* Professional Links */}
          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:depniels12@gmail.com"
              aria-label="Email"
              className="text-[var(--foreground)]/55 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <Mail
                size={16}
                strokeWidth={1.7}
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/DepNielS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--foreground)]/55 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <FaGithub size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dep-niel-sinaga-26202a309"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--foreground)]/55 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <FaLinkedin size={16} />
            </a>

            {/* CV */}
            <a
              href="/documents/Dep-Niel-Sinaga-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CV"
              className="text-[var(--foreground)]/55 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <FaFilePdf size={16} />
            </a>

            {/* Back to Top */}
            <a
              href="/"
              aria-label="Back to top"
              className="ml-2 border-l border-[var(--border)] pl-4 text-[var(--foreground)]/55 transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <ArrowUp
                size={16}
                strokeWidth={1.7}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}