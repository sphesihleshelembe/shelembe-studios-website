'use client';

import Link from 'next/link';
import { Download, Scan, QrCode, Combine, Scissors, Minimize2, Crop, Sparkles, FileText, Cloud, Shield, CheckCircle2, ArrowRight, Clock, FileCheck, Layout, Star } from 'lucide-react';
import { Reveal } from '@/components/site/reveal';

const noviqFeatures = [
  { icon: Scan, label: 'Intelligent Document Detection' },
  { icon: Scan, label: 'OCR Text Extraction' },
  { icon: QrCode, label: 'QR Code Scanner' },
  { icon: QrCode, label: 'QR Code Generator' },
  { icon: Combine, label: 'PDF Merge' },
  { icon: Scissors, label: 'PDF Split' },
  { icon: Minimize2, label: 'PDF Compression' },
  { icon: Sparkles, label: 'Image Enhancement' },
  { icon: Scan, label: 'Native Android Processing' },
  { icon: FileText, label: 'High-Quality PDF Export' },
];

const cvbuilderFeatures = [
  { icon: FileText, label: 'Professional CV Builder' },
  { icon: Layout, label: 'Modern CV Templates' },
  { icon: FileCheck, label: 'PDF Export' },
  { icon: Cloud, label: 'Secure Cloud Storage' },
  { icon: Star, label: 'CV Completion Score' },
  { icon: Scan, label: 'Easy Editing' },
  { icon: Layout, label: 'User-Friendly Interface' },
  { icon: Shield, label: 'User Authentication' },
];

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Featured Products
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Software built to solve real problems
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build practical, powerful applications that combine intelligent
            functionality with exceptional user experience.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Noviq */}
          <Reveal>
            <ProductCard
              name="Noviq Document Scanner"
              tagline="Professional mobile document scanner"
              description="Noviq is a professional mobile document scanner designed for productivity and document management. Turn your phone into a powerful scanning workstation."
              features={noviqFeatures}
              image="https://images.pexels.com/photos/3850201/pexels-photo-3850201.jpeg?auto=compress&cs=tinysrgb&w=900"
              status="Coming Soon"
              statusColor="warning"
              buttons={[
                { label: 'Learn More', href: '/#portfolio', primary: false },
                { label: 'Download', href: '#', primary: true, comingSoon: true },
              ]}
            />
          </Reveal>

          {/* CVBuilder */}
          <Reveal delay={0.15}>
            <ProductCard
              name="CVBuilder"
              tagline="Free CV Builder & Resume Maker"
              description="CVBuilder helps job seekers create professional CVs and resumes in minutes. Choose from modern templates, edit your information, manage multiple CVs, and export high-quality PDFs directly from your Android device."              features={cvbuilderFeatures}
              image="/images/products/cvbuilder_banner.png"
              status="Live on Google Play"
              statusColor="success"
              buttons={[
                { label: 'Learn More', href: '/#portfolio', primary: false },
{
  label: 'Get it on Google Play',
  href: 'https://play.google.com/store/apps/details?id=com.sphesihleshelembe.cvbuilder',
  primary: true,
},
              ]}
            />
          </Reveal>
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            We are actively building an ecosystem of products. More coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ProductCard({
  name,
  tagline,
  description,
  features,
  image,
  status,
  statusColor,
  buttons,
}: {
  name: string;
  tagline: string;
  description: string;
  features: { icon: React.ComponentType<{ className?: string }>; label: string }[];
  image: string;
  status: string;
  statusColor: string;
  buttons: { label: string; href: string; primary: boolean; comingSoon?: boolean }[];
}) {
  const statusClasses: Record<string, string> = {
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute left-5 top-4">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[statusColor]}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${statusColor === 'success' ? 'bg-success' : 'bg-warning'}`} />
            {status}
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
        <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {name === "CVBuilder" && (
  <Link
    href="https://play.google.com/store/apps/details?id=com.sphesihleshelembe.cvbuilder"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 transition hover:bg-green-100"
  >
    <CheckCircle2 className="h-4 w-4" />
    Published on Google Play
  </Link>
)}

        <div className="mt-5 grid grid-cols-2 gap-2">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2"
            >
              <feature.icon className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-xs font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                btn.primary
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25 hover:brightness-105'
                  : 'border border-border hover:border-primary/50'
              }`}
            >
              {btn.comingSoon ? (
                <>
                  <Clock className="h-3.5 w-3.5" />
                  {btn.label} (Coming Soon)
                </>
              ) : (
                <>
                  {btn.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
