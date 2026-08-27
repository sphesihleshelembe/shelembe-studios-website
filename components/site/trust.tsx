'use client';

import { Cpu, ShieldCheck, Smartphone, Zap, Layers, Users } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const trustPoints = [
  {
    icon: Cpu,
    title: 'Modern Technology',
    desc: 'We use proven, modern technologies to build fast and maintainable software.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Privacy',
    desc: 'We take data security and privacy seriously from development to deployment.',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web',
    desc: 'Build for Android, iOS, web, or multiple platforms from one solution.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    desc: 'We build responsive software that is designed to perform reliably.',
  },
  {
    icon: Layers,
    title: 'Built Around You',
    desc: 'Your requirements come first. We build solutions around your actual workflow.',
  },
  {
    icon: Users,
    title: 'User Focused',
    desc: 'Simple, intuitive experiences designed around the people who will use them.',
  },
];

export function Trust() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 text-center">
         <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
  Why Shelembe Studios
</p>

<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
  Built around your needs
</h2>

<p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
  We combine modern technology, thoughtful design, and practical
  problem-solving to build software that works for you and your users.
</p>
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
