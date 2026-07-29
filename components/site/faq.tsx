'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/site/reveal';

const faqs = [
  {
    category: 'Products',
    question: 'What is Noviq Document Scanner?',
    answer: 'Noviq is our flagship mobile app that turns your phone into a professional document scanner. It includes OCR text extraction, QR scanning, and full PDF tools like merge, split, and compress.',
  },
  {
    category: 'Products',
    question: 'What platforms is Noviq available on?',
    answer: 'Noviq is available on both Android and iOS. You can download it from the Google Play Store and the Apple App Store.',
  },
  {
    category: 'Products',
    question: 'Are there more products coming?',
    answer: 'Yes. We are actively developing an AI Study Assistant, a Business Toolkit, and a Smart PDF Suite. We believe in building an ecosystem of practical tools.',
  },
  {
    category: 'Support',
    question: 'How do I get support for a product?',
    answer: 'You can reach us through our contact page or email us at hello@shelembe.co.za. We respond to all support requests within 48 hours.',
  },
  {
    category: 'Services',
    question: 'Do you build custom software for clients?',
    answer: 'Yes. We offer mobile app development, web application development, business software, AI solutions, UI/UX design, and digital transformation services. Get in touch to discuss your project.',
  },
  {
    category: 'Services',
    question: 'How much does custom development cost?',
    answer: 'Every project is different. We provide detailed quotes after understanding your requirements. Contact us for a free consultation.',
  },
  {
    category: 'Privacy',
    question: 'How do you handle my data?',
    answer: 'We take privacy seriously. Our products are designed to be privacy-first. We do not sell your data, track you unnecessarily, or compromise your trust.',
  },
  {
    category: 'Downloads',
    question: 'Are your products free?',
    answer: 'Noviq is free to download and use. Some advanced features may be available as premium add-ons. We believe great software should be accessible.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our products, services, and
            approach.
          </p>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-xl border border-border bg-card px-5 transition-colors data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
