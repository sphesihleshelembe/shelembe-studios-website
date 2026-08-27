
'use client';

import Link from 'next/link';
import {
  Smartphone,
  Globe,
  Code2,
  Briefcase,
  FileStack,
  PenTool,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Turn your idea into a professional mobile app for Android and iOS, whether you are starting from scratch or improving an existing app.',
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    desc: 'Build fast, modern websites and web applications that give your customers a smooth experience on every device.',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    desc: 'Get software built around the way your business works, helping you solve specific problems and improve your workflow.',
  },
  {
    icon: Briefcase,
    title: 'Business Productivity Solutions',
    desc: 'Simplify repetitive tasks and improve the way your business operates with practical software solutions.',
  },
  {
    icon: FileStack,
    title: 'Document Management Solutions',
    desc: 'Organize, scan, process, and manage documents more efficiently with modern digital solutions.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Create clean, intuitive interfaces that make your website or application easier and more enjoyable to use.',
  },
  {
    icon: Lightbulb,
    title: 'Software Consulting',
    desc: 'Not sure what you need? Get practical technical guidance to choose the right solution for your project.',
  },
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
            Software built around your needs
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            From mobile apps and websites to custom business software, we
            create practical digital solutions designed to help your business
            grow and work more efficiently.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  Get a quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Have a project in mind?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Tell us what you need and we&apos;ll help turn your idea into a
              practical digital solution.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

