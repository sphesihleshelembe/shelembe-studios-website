'use client';

import { Cpu, Zap, Eye, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const reasons = [
  {
    icon: Eye,
    title: 'We Understand Your Goal',
    desc: 'We start by understanding the problem you want to solve and the outcome you want to achieve.',
  },
  {
    icon: Cpu,
    title: 'Built for Your Business',
    desc: 'Your software is designed around your requirements, workflow, users, and budget.',
  },
  {
    icon: Zap,
    title: 'From Idea to Product',
    desc: 'We can take your idea from concept and planning through development and launch.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    desc: 'We focus on clean architecture, reliable functionality, security, and maintainable software.',
  },
  {
    icon: RefreshCw,
    title: 'Built to Evolve',
    desc: 'Your software can grow with your business as your requirements and users change.',
  },
  {
    icon: Sparkles,
    title: 'Personal Attention',
    desc: 'Work directly with the people building your software, with clear communication throughout the project.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Working with Shelembe Studios
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            More than just development
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/70">
            We work closely with our clients to understand their goals, build the right
solution, and turn ideas into software that delivers real value.
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
