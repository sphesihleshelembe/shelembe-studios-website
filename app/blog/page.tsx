import Link from 'next/link';
import { ArrowRight, PenTool } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';
import { Newsletter } from '@/components/site/newsletter';

export const metadata = {
  title: 'Blog',
  description:
    'Insights, updates, and stories from Shelembe Studios. We write about software, productivity, and building products that matter.',
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20 text-secondary-foreground">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Blog
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Ideas, insights, and updates
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
              We write about software, productivity, and the craft of building
              products that solve real problems.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold">Articles coming soon</h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                We are working on thoughtful content about software, design,
                and productivity. Subscribe to our newsletter below and you&apos;ll
                be the first to know when we publish.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
