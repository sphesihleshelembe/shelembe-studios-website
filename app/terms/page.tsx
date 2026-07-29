import { Reveal } from '@/components/site/reveal';

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions for using Shelembe Studios software and services.',
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="mt-8 space-y-6">
            <Section title="Acceptance of Terms">
              <p>
                By using Shelembe Studios software, websites, or services, you
                agree to these Terms of Service. If you do not agree, please do
                not use our products or services.
              </p>
            </Section>

            <Section title="Use of Our Products">
              <p>
                Our products are provided for personal and commercial use. You
                may not reverse engineer, redistribute, or resell our software
                without explicit written permission.
              </p>
            </Section>

            <Section title="Intellectual Property">
              <p>
                All software, designs, content, and branding produced by
                Shelembe Studios remain our intellectual property. You retain
                ownership of all data you create or upload to our products.
              </p>
            </Section>

            <Section title="Custom Development">
              <p>
                For client projects, terms including scope, timeline, payment,
                and deliverables are defined in a separate agreement. These
                Terms of Service apply in addition to any project-specific
                contract.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                Our software is provided &ldquo;as is&rdquo; without warranties of any
                kind. We are not liable for indirect, incidental, or
                consequential damages arising from the use of our products.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                We reserve the right to terminate access to our services for
                violations of these terms. Upon termination, your data will be
                handled in accordance with our Privacy Policy.
              </p>
            </Section>

            <Section title="Changes to These Terms">
              <p>
                We may update these terms from time to time. Continued use of
                our products after changes constitutes acceptance of the updated
                terms.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about these Terms of Service, please
                contact us at hello@shelembe.co.za.
              </p>
            </Section>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
