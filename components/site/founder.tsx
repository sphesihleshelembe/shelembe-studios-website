'use client';

import Link from 'next/link';
import { User, Linkedin, Github, Mail, Smartphone, Globe, Palette, Code2, Database, Cloud, Layers } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const skills = [
  { icon: Smartphone, label: 'Mobile Development' },
  { icon: Globe, label: 'Web Development' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Code2, label: 'Native Android Development' },
  { icon: Database, label: 'Database Design' },
  { icon: Cloud, label: 'Cloud Integration' },
  { icon: Layers, label: 'Software Architecture' },
];

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-secondary py-24 text-secondary-foreground lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-secondary-foreground/15 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/9301508/pexels-photo-9301508.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sphesihle Shelembe — Founder & Lead Software Developer"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-xl font-bold text-white">Sphesihle Shelembe</h3>
                  <p className="text-sm text-white/70">Founder & Lead Software Developer</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-6">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Meet the Founder
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                The mind behind the software
              </h2>
              <p className="text-lg leading-relaxed text-secondary-foreground/70">
                Sphesihle Shelembe founded Shelembe Studios to create modern
                software that solves practical problems. With a passion for
                clean code and thoughtful design, he has built multiple
                products from the ground up — covering mobile, web, and
                cloud-native development.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-2.5 rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 px-3 py-2.5 transition-colors hover:border-accent/30 hover:bg-accent/5"
                  >
                    <skill.icon className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-xs font-medium">{skill.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105"
                >
                  <User className="h-4 w-4" />
                  View Resume
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-5 py-2.5 text-sm font-semibold transition-all hover:border-accent hover:bg-accent/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-5 py-2.5 text-sm font-semibold transition-all hover:border-accent hover:bg-accent/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-5 py-2.5 text-sm font-semibold transition-all hover:border-accent hover:bg-accent/10"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
