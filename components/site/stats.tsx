'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/site/reveal';

const stats = [
  { value: 2, suffix: '', label: 'Software Products' },
  { value: 15, suffix: '+', label: 'Major Features Delivered' },
  { value: 100, suffix: '%', label: 'Built In-House' },
  { value: 1, suffix: '', label: 'Growing Software Studio', isText: true },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({
  value,
  suffix,
  label,
  isText,
}: {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReduced = useReducedMotion();

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-primary sm:text-5xl">
        {isText ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Growing
          </motion.span>
        ) : prefersReduced ? (
          `${value}${suffix}`
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <CountUp target={value} inView={inView} suffix={suffix} />
          </motion.span>
        )}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

function CountUp({ target, inView, suffix }: { target: number; inView: boolean; suffix: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.span
        initial={{ y: 10 }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="inline-block"
      >
        {target}
      </motion.span>
      {suffix}
    </motion.span>
  );
}
