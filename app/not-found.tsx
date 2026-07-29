import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-lg px-5 text-center">
        <p className="text-[120px] font-extrabold leading-none gradient-text">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The page you are looking for does not exist or has been moved. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-6 py-3 text-sm font-semibold transition-all hover:border-accent hover:bg-accent/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
