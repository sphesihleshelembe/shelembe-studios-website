'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal } from '@/components/site/reveal';

const services = [
  'Mobile App Development',
  'Web Application Development',
  'Custom Software Development',
  'Business Productivity Solutions',
  'Document Management Solutions',
  'UI/UX Design',
  'Software Consulting',
  'Not sure yet',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: services[0],
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        service: form.service,
        message: form.message,
      });

      if (error) throw error;

      setStatus('success');
      setForm({ name: '', email: '', service: services[0], message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: info */}
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Get In Touch
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you are looking for software development services,
              exploring employment opportunities, or just want to talk about
              your idea — we&apos;d love to hear from you. Fill out the form and
              we&apos;ll respond within 48 hours.
            </p>

            <div className="mt-8 space-y-4">
              <ContactInfoRow
                icon={Mail}
                label="Email us"
                value="hello@shelembe.co.za"
                href="mailto:hello@shelembe.co.za"
              />
              <ContactInfoRow
                icon={Phone}
                label="Call us"
                value="+27 11 123 4567"
                href="tel:+27111234567"
              />
              <ContactInfoRow
                icon={MapPin}
                label="Based in"
                value="Johannesburg, South Africa"
              />
            </div>

            {/* Social links */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Connect
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-5">
              <p className="text-sm font-medium text-muted-foreground">
                Typical response time
              </p>
              <p className="mt-1 text-2xl font-bold text-primary">Under 48 hours</p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
                    <CheckCircle2 className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Thanks for reaching out. We&apos;ve received your message and
                    will be in touch within 48 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Your name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      placeholder="Jane Doe"
                    />
                    <Field
                      label="Email address"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      What do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm({ ...form, service: s })}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                            form.service === s
                              ? 'bg-primary text-primary-foreground shadow-md'
                              : 'border border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your vision, timeline, and any details you have..."
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:brightness-105 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactInfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
  );
}
