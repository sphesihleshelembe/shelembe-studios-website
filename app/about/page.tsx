import { Founder } from '@/components/site/founder';
import { Trust } from '@/components/site/trust';
import { Technologies } from '@/components/site/technologies';
import { CTA } from '@/components/site/cta';
import { Newsletter } from '@/components/site/newsletter';
import { Reveal } from '@/components/site/reveal';
import { Target, Eye, Heart, Sparkles, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description:
    'Shelembe Studios is an independent software company founded by Sphesihle Shelembe, building practical, beautiful, and privacy-conscious software.',
};

const values = [
  { icon: Target, title: 'Mission', desc: 'Build software that solves real, everyday problems — simply and beautifully.' },
  { icon: Eye, title: 'Vision', desc: 'A world where technology works for everyone, not against them.' },
  { icon: Heart, title: 'Values', desc: 'Simplicity, reliability, privacy, and quality in everything we build.' },
  { icon: Sparkles, title: 'Innovation', desc: 'We explore new technologies and approaches to create better solutions.' },
  { icon: ShieldCheck, title: 'Quality', desc: 'Clean code, thorough testing, and software built to last for years.' },
  { icon: Zap, title: 'User Experience', desc: 'Every interface is designed to be intuitive, fast, and accessible.' },
  { icon: RefreshCw, title: 'Continuous Improvement', desc: 'We ship updates regularly based on user feedback and real usage.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20 text-secondary-foreground">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              About Shelembe Studios
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Building software that solves real problems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
              Shelembe Studios is an independent software company founded by
              Sphesihle Shelembe. We build practical, beautiful, and
              privacy-conscious software for students, professionals, and
              businesses. We believe software should be simple, fast, reliable,
              and accessible.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/70">
              The company has already developed multiple software products —
              including Noviq Document Scanner and CVBuilder — and continues to
              expand its product ecosystem with new tools on the way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              What Drives Us
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mission, vision, and values
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Founder />
      <Trust />
      <Technologies />
      <CTA />
      <Newsletter />
    </>
  );
}
