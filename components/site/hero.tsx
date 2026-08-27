'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Scan,
  FileText,
  QrCode,
  Combine,
  Scissors,
  Minimize2,
  Crop,
  Sparkles,
  User,
  MessageCircle
} from 'lucide-react';

const floatingCards = [
  { icon: Scan, label: 'OCR', desc: 'Text extraction', className: 'left-0 top-8', delay: 0 },
  { icon: FileText, label: 'Document Scanner', desc: 'Fast scanning', className: 'right-0 top-20', delay: 0.3 },
  { icon: QrCode, label: 'QR Scanner', desc: 'Instant codes', className: 'left-4 bottom-24', delay: 0.6 },
  { icon: Combine, label: 'Merge PDF', desc: 'Combine files', className: 'right-2 bottom-12', delay: 0.9 },
  { icon: Scissors, label: 'Split PDF', desc: 'Extract pages', className: 'left-8 top-44', delay: 1.2 },
  { icon: Minimize2, label: 'Compress PDF', desc: 'Reduce size', className: 'right-6 top-52', delay: 1.5 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-secondary pt-32 pb-20 text-secondary-foreground">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 animate-pulse-glow rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-72 w-72 animate-pulse-glow rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-accent"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Now available: Noviq & CVBuilder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Software that solves
              <br />
              <span className="gradient-text">real-world problems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-secondary-foreground/70"
            >
              Shelembe Studios builds modern software solutions for businesses,
organizations, and individuals. From mobile apps and web applications
to document management systems, we create practical software designed
around real-world needs.
            </motion.p>

<Link
  href="/contact"
  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:brightness-105"
>
  <ArrowRight className="h-4 w-4" />
  Start a Project
</Link>

<Link
  href="/#products"
  className="group inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:border-accent hover:bg-accent/10"
>
  <Download className="h-4 w-4" />
  Explore Our Products
</Link>

<a
  href="https://wa.me/27605993527?text=Hi%20Shelembe%20Studios%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-full border border-secondary-foreground/20 px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:border-accent hover:bg-accent/10"
>
  <MessageCircle className="h-4 w-4" />
  WhatsApp Us
</a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <div>
                <p className="text-2xl font-bold text-accent">2</p>
                <p className="text-sm text-secondary-foreground/60">Products</p>
              </div>
              <div className="h-10 w-px bg-secondary-foreground/15" />
              <div>
                <p className="text-2xl font-bold text-accent">15+</p>
                <p className="text-sm text-secondary-foreground/60">Features</p>
              </div>
              <div className="h-10 w-px bg-secondary-foreground/15" />
              <div>
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-sm text-secondary-foreground/60">In-House</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Noviq mockup with floating cards */}
          <div className="relative hidden h-[560px] lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative rounded-[2.5rem] border-[3px] border-secondary-foreground/20 bg-card p-3 shadow-2xl">
                <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-secondary-foreground/20" />
                <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary/10 to-accent/5">
                  <div className="px-5 pb-6 pt-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Noviq</p>
                        <p className="text-lg font-bold text-foreground">Scanner</p>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Scan className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="relative mb-4 h-40 overflow-hidden rounded-xl border border-border bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                      <div className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_2px_rgba(56,189,248,0.5)] animate-scan" />
                      <div className="absolute bottom-2 left-2 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-medium text-success">
                        Scanned
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { Icon: QrCode, label: 'QR' },
                        { Icon: Combine, label: 'Merge' },
                        { Icon: Scissors, label: 'Split' },
                        { Icon: Minimize2, label: 'Compress' },
                        { Icon: Crop, label: 'Crop' },
                        { Icon: Scan, label: 'OCR' },
                      ].map(({ Icon, label }) => (
                        <div
                          key={label}
                          className="flex flex-col items-center gap-1 rounded-lg border border-border bg-background p-2"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-[10px] font-medium text-muted-foreground">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + card.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute ${card.className} z-20 w-44 animate-float rounded-xl border border-white/10 bg-white/5 p-3 shadow-xl backdrop-blur-md`}
                style={{ animationDelay: `${card.delay}s` }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-accent">
                    <card.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{card.label}</p>
                    <p className="text-xs text-white/50">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
