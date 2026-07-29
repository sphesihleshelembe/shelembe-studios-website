const items = [
  'Noviq Scanner',
  'CVBuilder',
  'OCR Technology',
  'PDF Tools',
  'QR Scanner',
  'React Native',
  'TypeScript',
  'Supabase',
  'Next.js',
  'AI Solutions',
  'UI/UX Design',
];

export function Marquee() {
  return (
    <div className="border-y border-border bg-card py-5">
      <div className="relative flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="whitespace-nowrap text-lg font-semibold text-muted-foreground">
                {item}
              </span>
              <span className="text-2xl text-primary">&#9670;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
