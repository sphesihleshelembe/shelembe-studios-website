'use client';

import { Star, Quote } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const testimonials = [
  {
    quote:
      'Noviq replaced three apps on my phone. The OCR is accurate and the PDF tools just work. This is how all software should be built.',
    author: 'Lerato Mthembu',
    role: 'Law Student, University of Cape Town',
    avatar: 'https://images.pexels.com/photos/1181475/pexels-photo-1181475.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Shelembe Studios built our internal dashboard and it transformed how we track operations. Clean, fast, and exactly what we needed.',
    author: 'James van Wyk',
    role: 'Operations Lead, Cape Logistics',
    avatar: 'https://images.pexels.com/photos/5648096/pexels-photo-5648096.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'The team understood our problem before we could fully explain it. The result was software that felt like it was built just for us.',
    author: 'Fatima Adams',
    role: 'Founder, Adams Accounting',
    avatar: 'https://images.pexels.com/photos/34769106/pexels-photo-34769106.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted by people who use our software
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We measure our success by the success of the people who use what we
            build.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
