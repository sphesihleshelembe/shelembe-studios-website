'use client';

import { Scan, QrCode, Combine, Scissors, Crop, FileText, Star, Cloud, Shield, CheckCircle2, Code2, Layers } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const caseStudies = [
  {
    name: 'Noviq Document Scanner',
    tagline: 'Professional mobile document scanner',
    overview:
      'Noviq is a professional mobile document scanner built for productivity and document management. It combines intelligent detection, OCR, and full PDF tools into a single, fast, native mobile experience.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Kotlin', 'OpenCV', 'OCR', 'Native Android Modules'],
    challenges: [
      'Achieving accurate edge detection on diverse document types and lighting conditions.',
      'Integrating native Android processing for high-performance image enhancement without sacrificing cross-platform compatibility.',
      'Building a full PDF toolkit (merge, split, compress) that works entirely on-device.',
    ],
    features: [
      { icon: Scan, label: 'Intelligent Document Detection' },
      { icon: FileText, label: 'OCR Text Extraction' },
      { icon: QrCode, label: 'QR Code Scanner & Generator' },
      { icon: Combine, label: 'PDF Merge' },
      { icon: Scissors, label: 'PDF Split' },
      { icon: Crop, label: 'Image Enhancement' },
    ],
    process: [
      'Researched existing scanner apps to identify UX gaps and performance bottlenecks.',
      'Built native Android modules in Kotlin for OpenCV-powered edge detection and image processing.',
      'Integrated OCR engine for on-device text extraction without cloud dependency.',
      'Designed an intuitive interface with one-tap scanning and a full PDF toolkit.',
    ],
    highlights: [
      'Native Android processing for speed and reliability',
      'On-device OCR — no cloud, full privacy',
      'Complete PDF toolkit in a single app',
      'Cross-platform architecture with React Native and Expo',
    ],
    image: 'https://images.pexels.com/photos/3850201/pexels-photo-3850201.jpeg?auto=compress&cs=tinysrgb&w=900',
    status: 'Live',
  },
  {
    name: 'CVBuilder',
    tagline: 'Cloud-powered CV and résumé creation platform',
    overview:
      'CVBuilder is a cloud-powered platform that helps job seekers create professional CVs quickly and easily. It features modern templates, secure cloud storage, a completion score, and PDF export — all wrapped in a responsive, authenticated experience.',
    technologies: ['React Native', 'Expo', 'Supabase', 'Authentication', 'PDF Generation', 'Database Integration'],
    challenges: [
      'Designing a CV builder that feels simple while supporting multiple professional templates.',
      'Implementing secure user authentication and per-user cloud storage with Supabase.',
      'Generating pixel-perfect PDF exports that match the on-screen template exactly.',
    ],
    features: [
      { icon: FileText, label: 'Professional CV Builder' },
      { icon: Star, label: 'CV Completion Score' },
      { icon: Cloud, label: 'Secure Cloud Storage' },
      { icon: Shield, label: 'User Authentication' },
      { icon: Scan, label: 'Easy Editing' },
      { icon: CheckCircle2, label: 'PDF Export' },
    ],
    process: [
      'Designed a template system that separates content from presentation for flexibility.',
      'Integrated Supabase for authentication, database, and secure cloud storage.',
      'Built a CV completion score algorithm to guide users toward stronger CVs.',
      'Implemented client-side PDF generation that mirrors the on-screen template.',
    ],
    highlights: [
      'Secure authentication with Supabase',
      'Cloud-synced CVs accessible from any device',
      'Smart completion score for better CVs',
      'Pixel-perfect PDF export',
    ],
    image: 'https://images.pexels.com/photos/590044/pexels-photo-590044.jpeg?auto=compress&cs=tinysrgb&w=900',
    status: 'Live',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Software case studies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A closer look at the products we have built — the technologies,
            challenges, and engineering decisions behind each one.
          </p>
        </Reveal>

        <div className="space-y-12">
          {caseStudies.map((cs, idx) => (
            <Reveal key={cs.name} delay={idx * 0.1}>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
                {/* Header */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-5 left-7 right-7">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" />
                      {cs.status}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold">{cs.name}</h3>
                    <p className="text-sm text-primary">{cs.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="grid gap-8 p-7 lg:grid-cols-2 lg:p-10">
                  {/* Left: overview, challenges, process */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <Layers className="h-4 w-4 text-primary" />
                        Overview
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {cs.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <Code2 className="h-4 w-4 text-primary" />
                        Key Challenges Solved
                      </h4>
                      <ul className="space-y-2">
                        {cs.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Development Process
                      </h4>
                      <ol className="space-y-2">
                        {cs.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Right: tech stack, features, highlights */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <Code2 className="h-4 w-4 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <Layers className="h-4 w-4 text-primary" />
                        Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {cs.features.map((feature) => (
                          <div
                            key={feature.label}
                            className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2"
                          >
                            <feature.icon className="h-4 w-4 shrink-0 text-primary" />
                            <span className="text-xs font-medium">{feature.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        <Star className="h-4 w-4 text-primary" />
                        Technical Highlights
                      </h4>
                      <ul className="space-y-2">
                        {cs.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
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
