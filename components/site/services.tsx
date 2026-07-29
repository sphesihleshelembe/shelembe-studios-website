'use client';

import Link from 'next/link';
import { Smartphone, Globe, Code2, Briefcase, FileStack, PenTool, Lightbulb, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const services = [
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android, built for performance and scale.' },
  { icon: Globe, title: 'Web Application Development', desc: 'Modern web apps with clean architecture, fast load times, and great UX.' },
  { icon: Code2, title: 'Custom Software Development', desc: 'Tailored software solutions designed around your specific requirements and workflows.' },
  { icon: Briefcase, title: 'Business Productivity Solutions', desc: 'Software that helps your team work smarter, faster, and more efficiently.' },
  { icon: FileStack, title: 'Document Management Solutions', desc: 'Intelligent document scanning, processing, and management systems.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Interfaces that are beautiful, accessible, and effortless to use.' },
  { icon: Lightbulb, title: 'Software Consulting', desc: 'Technical guidance and architecture decisions to help you build the right thing.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Professional software services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build software for clients who need practical, well-crafted
            solutions. From mobile apps to document management, we cover the
            full spectrum.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:gap-2.5"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
