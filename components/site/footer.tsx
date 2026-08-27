import Link from 'next/link';
import { Boxes, Instagram, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const footerLinks = {
  Products: [
    { label: 'Noviq Scanner', href: '/#products' },
    { label: 'CVBuilder', href: '/#products' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#services' },
    { label: 'Founder', href: '/#founder' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Technologies', href: '/#technologies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Roadmap', href: '/#roadmap' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary text-secondary-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Boxes className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Shelembe<span className="text-primary">Studios</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-secondary-foreground/60">
              Building software that solves real problems. Founded by Sphesihle
              Shelembe. Simple, fast, reliable, beautiful, and privacy-conscious.
            </p>
<div className="flex gap-3 pt-2">
  <a
    href="https://github.com/sphesihleshelembe"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary-foreground/15 text-secondary-foreground/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
  >
    <Github className="h-4 w-4" />
  </a>

  <a
    href="https://www.linkedin.com/in/sphesihle-shelembe-0a3268388/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary-foreground/15 text-secondary-foreground/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
  >
    <Linkedin className="h-4 w-4" />
  </a>

  <a
    href="mailto:hello@shelembe.co.za"
    aria-label="Email"
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-secondary-foreground/15 text-secondary-foreground/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
  >
    <Mail className="h-4 w-4" />
  </a>
</div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/90">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} Shelembe Studios. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            Building Software That Solves Real Problems.
          </p>
        </div>
      </div>
    </footer>
  );
}
