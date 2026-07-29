'use client';

import { Cpu, Zap, Eye, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const reasons = [
  { icon: Cpu, title: 'Modern Technologies', desc: 'We build with the latest frameworks and tools — React, Next.js, TypeScript, React Native, and more.' },
  { icon: Zap, title: 'Performance Focused', desc: 'Speed is a feature. Every product is optimised for fast load times and smooth interactions.' },
  { icon: Eye, title: 'User-Centred Design', desc: 'We design from the user\u2019s perspective. Intuitive interfaces that feel natural from the first tap.' },
  { icon: ShieldCheck, title: 'Quality Engineering', desc: 'Clean architecture, typed code, and thorough testing. Software built to last.' },
  { icon: RefreshCw, title: 'Reliable Software', desc: 'Stable, dependable, and built for real-world conditions. Not just demos.' },
  { icon: Sparkles, title: 'Continuous Innovation', desc: 'We never stop improving. Regular updates driven by user feedback and new ideas.' },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            What sets us apart
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70">
            We do not just write code. We engineer software that is fast,
            reliable, and a pleasure to use.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, idx) => (
            <Reveal key={reason.title} delay={idx * 0.08}>
              <div className="group h-full rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 transition-all hover:border-accent/30 hover:bg-accent/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <reason.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary-foreground/60">
                  {reason.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
