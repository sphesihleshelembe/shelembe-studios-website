'use client';

import { useState } from 'react';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal } from '@/components/site/reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_signups')
        .insert({ email });

      if (error) {
        if (error.code === '23505') {
          setStatus('success');
          setEmail('');
        } else {
          throw error;
        }
        return;
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Stay Updated
          </h3>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Get product updates, new releases, tips, and exclusive
            announcements. No spam — just useful stuff.
          </p>

          {status === 'success' ? (
            <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-full bg-success/10 px-5 py-3 text-sm font-medium text-success">
              <CheckCircle2 className="h-5 w-5" />
              You&apos;re subscribed! Welcome aboard.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-input bg-background px-5 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-105 disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-sm text-destructive">
              Something went wrong. Please try again.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
