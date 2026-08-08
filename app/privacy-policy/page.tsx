import { Reveal } from '@/components/site/reveal';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Shelembe Studios collects, uses, and protects your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>

          <div className="prose prose-slate mt-8 max-w-none space-y-6">
            <Section title="Our Commitment to Privacy">
              <p>
                Shelembe Studios believes software should be privacy-conscious.
                We do not sell your data, track you unnecessarily, or compromise
                your trust. This policy explains what we collect and why.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>
                When you contact us or subscribe to our newsletter, we collect
                the information you provide — such as your name, email address,
                and message. We use this solely to respond to your enquiry and
                send you updates you have opted into.
              </p>
            </Section>

            <Section title="How We Use Your Information">
              <ul className="ml-4 list-disc space-y-1">
                <li>To respond to your enquiries and provide support.</li>
                <li>To send product updates and announcements you have subscribed to.</li>
                <li>To improve our products and services based on your feedback.</li>
              </ul>
            </Section>

            <Section title="Data Storage and Security">
              <p>
                Your data is stored securely using industry-standard
                encryption. Access is restricted to authorized personnel only.
                We do not share your information with third parties for marketing
                purposes.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                You can request access to, correction of, or deletion of your
                personal data at any time. To unsubscribe from our newsletter,
                use the unsubscribe link in any email we send. Contact us at
                hello@shelembe.co.za for any privacy-related requests.
              </p>
            </Section>

<Section title="Noviq Document Scanner">
  <p>
    Noviq Document Scanner allows you to scan documents, create PDFs,
    extract text using OCR, scan and generate QR codes, and manage
    documents on your device.
  </p>

  <p>
    Documents and images processed by Noviq are stored locally on your
    device unless you explicitly choose to share or export them using
    another service or location.
  </p>

  <p>
    Noviq does not upload your scanned documents to Shelembe Studios
    servers for storage or processing.
  </p>

  <p>
    Camera access is used for document scanning and QR code scanning.
    Photo and file access may be used when you choose to import images
    or documents from your device.
  </p>
</Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this policy from time to time. Any changes will be
                posted on this page with an updated revision date.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at sphesihleshelembe12@gmail.com
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
