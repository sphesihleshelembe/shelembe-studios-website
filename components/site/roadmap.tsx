'use client';

import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const completed = [
  { name: 'Noviq Document Scanner', desc: 'Professional mobile document scanner with OCR, QR tools, and full PDF toolkit.' },
  { name: 'CVBuilder', desc: 'Cloud-powered CV creation platform with templates, completion score, and PDF export.' },
];

const upcoming = [
  { name: 'AI Study Assistant', desc: 'AI-powered study companion for students.' },
  { name: 'Business Toolkit', desc: 'Essential productivity tools for small businesses.' },
  { name: 'Smart PDF Suite', desc: 'Advanced PDF management for professionals.' },
  { name: 'More to come', desc: 'We are always exploring new ways to solve real problems.' },
];

export function Roadmap() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Roadmap
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Growing product ecosystem
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70">
            We are building for the long term. Here is what is live, what is
            coming, and where we are headed.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Completed */}
          <Reveal>
            <div className="rounded-2xl border border-success/20 bg-success/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <h3 className="text-lg font-bold">Shipped</h3>
              </div>
              <div className="space-y-3">
                {completed.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                    </div>
                    <p className="mt-1 pl-6 text-sm text-secondary-foreground/60">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Upcoming */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-warning/20 bg-warning/5 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-warning" />
                <h3 className="text-lg font-bold">Coming Soon</h3>
              </div>
              <div className="space-y-3">
                {upcoming.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-warning" />
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                    </div>
                    <p className="mt-1 pl-6 text-sm text-secondary-foreground/60">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
