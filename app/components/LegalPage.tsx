import Image from "next/image";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      {/* Minimal header */}
      <header className="border-b border-[#111] bg-[#060606]">
        <div className="max-w-[1280px] mx-auto px-8 h-[64px] flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/delvor-header-logo.png"
              alt="Delvor"
              width={2172}
              height={724}
              className="w-[140px] h-auto object-contain"
              priority
            />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[760px] mx-auto px-8 py-20">
        {/* Page header */}
        <div className="mb-12 pb-8 border-b border-[#111]">
          <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">{title}</h1>
          <p className="text-[12px] text-[#333]">Last updated: {lastUpdated}</p>
        </div>

        {/* Prose content */}
        <div className="legal-prose">
          {children}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#111]">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-[#444] hover:text-gold transition-colors"
          >
            <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Delvor
          </a>
        </div>
      </main>
    </div>
  );
}
