'use client';

import { Code2, Smartphone, Server, Wrench } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    techs: ['React Native', 'Expo', 'Kotlin'],
  },
  {
    icon: Server,
    title: 'Backend',
    techs: ['Supabase', 'MySQL', 'SQL'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    techs: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
];

export function Technologies() {
  return (
    <section id="technologies" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Technologies
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our tech stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We use modern, proven technologies to build software that is fast,
            reliable, and maintainable.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.1}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <cat.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{cat.title}</h3>
                <div className="mt-3 space-y-2">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded-lg bg-muted/40 px-3 py-2 text-sm font-medium"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
