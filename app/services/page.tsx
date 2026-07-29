import { Services } from '@/components/site/services';
import { CTA } from '@/components/site/cta';
import { Newsletter } from '@/components/site/newsletter';
import { Reveal } from '@/components/site/reveal';

export const metadata = {
  title: 'Services',
  description:
    'Professional software services including mobile app development, web application development, business software, AI solutions, UI/UX design, and digital transformation.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20 text-secondary-foreground">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Services
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Software services for every need
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
              We build software for clients who need practical, well-crafted
              solutions. From mobile apps to AI integrations, we cover the full
              spectrum of software development.
            </p>
          </Reveal>
        </div>
      </section>

      <Services />
      <CTA />
      <Newsletter />
    </>
  );
}
