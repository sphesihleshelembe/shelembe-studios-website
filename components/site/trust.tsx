'use client';

import { Cpu, ShieldCheck, Smartphone, Zap, Layers, Users } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const trustPoints = [
  { icon: Cpu, title: 'Modern Technology', desc: 'Built with the latest tools and frameworks.' },
  { icon: ShieldCheck, title: 'Privacy Focused', desc: 'Your data stays yours. Always.' },
  { icon: Smartphone, title: 'Cross-Platform', desc: 'Works on every device you own.' },
  { icon: Zap, title: 'Reliable Performance', desc: 'Fast, stable, and dependable.' },
  { icon: Layers, title: 'Designed for Productivity', desc: 'Tools that get out of your way.' },
  { icon: Users, title: 'Built for Real Users', desc: 'Made with feedback from real people.' },
];

export function Trust() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Trust Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Software you can rely on
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, idx) => (
            <Reveal key={point.title} delay={idx * 0.08}>
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <point.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{point.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
