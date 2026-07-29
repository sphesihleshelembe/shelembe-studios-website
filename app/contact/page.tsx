import { ContactForm } from '@/components/site/contact-form';
import { Reveal } from '@/components/site/reveal';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Shelembe Studios. We respond to all enquiries within 48 hours.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-secondary pt-32 pb-20 text-secondary-foreground">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Contact Us
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something together
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/70">
              Whether you need a custom app, a web platform, or just want to
              talk about your idea — we&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
