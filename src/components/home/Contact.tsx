import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const currentFocus = [
  "Web Development",
  "Full-Stack Development",
  "Project-Based Learning",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--border)] py-20 lg:py-24"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(6,113,249,0.10),transparent_70%)]"
      />

      <div className="container-main relative">
        {/* Header */}
        <div className="mb-12 max-w-5xl lg:mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
            Get In Touch
          </p>

          <h2 className="display-heading text-balance">
            Let&apos;s build something
            <span className="block text-[var(--accent)]">
              practical.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          {/* Primary Contact */}
          <div>
            <p className="body-copy max-w-2xl text-[var(--muted)]">
              I&apos;m open to opportunities where I can contribute, learn,
              and continue growing as a Junior Web Developer.
            </p>

            {/* Email + Location */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="mailto:depniels12@gmail.com"
                className="group inline-flex w-fit max-w-full items-center gap-3 border-b border-[var(--accent)] pb-2.5 text-lg font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)] sm:text-xl"
              >
                <Mail
                  size={19}
                  strokeWidth={1.7}
                  className="shrink-0"
                />

                <span className="truncate">
                  depniels12@gmail.com
                </span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.7}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <span className="text-sm text-[var(--muted)]">
                Based in Palembang, Indonesia
              </span>
            </div>
          </div>

          {/* Current Focus */}
          <div className="border-t border-[var(--border)] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Current Focus
            </p>

            <div className="mt-6 space-y-4">
              {currentFocus.map((item, index) => (
                <div
                  key={item}
                  className="flex items-baseline gap-4"
                >
                  <span className="min-w-5 text-xs font-medium tracking-wide text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base font-medium text-[var(--foreground)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Rail */}
        <div className="mt-14 border-t border-[var(--border)]">
          <div className="grid sm:grid-cols-3">
            {/* GitHub */}
            <a
              href="https://github.com/DepNielS"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)] sm:border-b-0 sm:border-r sm:pr-8"
            >
              <span className="flex items-center gap-3">
                <FaGithub size={17} />

                <span className="text-sm font-medium">
                  GitHub
                </span>
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dep-niel-sinaga-26202a309"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-[var(--border)] py-4 sm:border-b-0 sm:border-r sm:px-8"
            >
              <span className="flex items-center gap-3 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                <FaLinkedin size={17} />

                <span className="text-sm font-medium">
                  LinkedIn
                </span>
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="text-[var(--foreground)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:depniels12@gmail.com"
              className="group flex items-center justify-between py-4 sm:pl-8"
            >
              <span className="flex items-center gap-3 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                <Mail size={17} strokeWidth={1.7} />

                <span className="text-sm font-medium">
                  Email
                </span>
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.7}
                className="text-[var(--foreground)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}