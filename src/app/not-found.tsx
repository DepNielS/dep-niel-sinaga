import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <section className="w-full max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
          404 — Page Not Found
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
          This page doesn&apos;t exist.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--foreground)]/60 sm:text-lg">
          The page you are looking for may have been moved, removed, or never
          existed.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
          >
            Back to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}