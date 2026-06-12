import Image from "next/image";
import Navbar from "./components/Navbar";

// ---------------------------------------------------------------------------
// Section 1 — Hero
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Chat bubble sub-components
// ---------------------------------------------------------------------------

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%]">
        <div className="bg-[#131109] border border-[#261f0e] rounded-xl rounded-tr-sm px-3 py-1.5">
          {children}
        </div>
        <p className="text-[8px] text-[#383838] mt-0.5 text-right tracking-wide">You</p>
      </div>
    </div>
  );
}

function AIBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start gap-1.5">
      <div className="w-4 h-4 rounded-full bg-[#0e0e0e] border border-[#1e1e1e] flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="w-1 h-1 rounded-full bg-gold block" />
      </div>
      <div className="max-w-[88%]">
        <p className="text-[8px] text-[#444] mb-0.5 tracking-wider uppercase">Delvor AI</p>
        <div className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl rounded-tl-sm px-3 py-1.5">
          {children}
        </div>
      </div>
    </div>
  );
}

function VINChip() {
  return (
    <div className="flex items-center gap-1 bg-[#0e0c08] border border-[#231c0a] rounded-md px-2 py-1 mb-1 w-fit">
      <svg className="w-2 h-2 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
      <span className="text-[8px] text-gold font-mono">VIN document</span>
      <span className="w-px h-2 bg-[#2a2318]" />
      <span className="text-[8px] text-[#3a3a3a]">uploaded</span>
    </div>
  );
}

function Pills({ items }: { items: { label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center text-[8px] text-[#666] bg-[#0e0e0e] border border-[#1e1e1e] rounded-full px-1.5 py-0.5"
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-2 h-2 text-gold inline-block mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Right-side product listing panel
// ---------------------------------------------------------------------------

type Product = {
  brand: string;
  name: string;
  tier: string;
  tierColor: string;
  price: string;
  img: string;
};

function ProductListingPanel() {
  const products: Product[] = [
    {
      brand: "RIDEX",
      name: "Front Wheel Bearing",
      tier: "Budget",
      tierColor: "text-[#666] border-[#222]",
      price: "29.90",
      img: "/ridex-bearing.jfif",
    },
    {
      brand: "SKF",
      name: "Front Wheel Bearing",
      tier: "OEM-equivalent",
      tierColor: "text-[#999] border-[#272727]",
      price: "48.90",
      img: "/skf-bearing.jpg",
    },
    {
      brand: "FAG",
      name: "Front Wheel Bearing",
      tier: "Premium",
      tierColor: "text-gold border-[#2a1f08]",
      price: "59.90",
      img: "/fag-bearing.jpg",
    },
  ];

  return (
    <div className="flex flex-col border-t border-[#141414] md:border-t-0 md:border-l bg-[#080808]">
      {/* Panel header */}
      <div className="px-4 py-2.5 border-b border-[#111]">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-[11px] text-white font-semibold tracking-tight">Front Wheel Bearing</span>
          <span className="text-[8px] text-[#555] border border-[#222] rounded-full px-2 py-0.5 tabular-nums">6 results</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
          <span className="text-[9px] text-[#555]">VIN-matched · Fitment verified</span>
        </div>
      </div>

      {/* Sort row — decorative */}
      <div className="flex items-center gap-2 px-4 py-1.5 border-b border-[#0e0e0e]">
        <span className="text-[8px] text-[#444]">Sort:</span>
        <span className="text-[8px] text-[#555] border border-[#222] rounded px-1.5 py-0.5 cursor-default">Relevance ▾</span>
        <span className="ml-auto text-[8px] text-[#444]">All tiers</span>
      </div>

      {/* Product cards */}
      <div className="flex-1">
        {products.map((p) => (
          <div
            key={p.brand}
            className="px-4 py-3 border-b border-[#0d0d0d] last:border-0 hover:bg-[#0b0b0b] transition-colors"
          >
            <div className="flex gap-3">
              {/* Product image */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#111] border border-[#1e1e1e] overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={`${p.brand} ${p.name}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <p className="text-[12px] font-bold text-white leading-tight">{p.brand}</p>
                  <p className="text-[10px] text-[#666] leading-tight">{p.name}</p>
                </div>
                <div className="flex items-center justify-between mt-2 gap-2">
                  <span className={`text-[9px] border rounded-full px-2 py-0.5 flex-shrink-0 ${p.tierColor}`}>
                    {p.tier}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
                    <span className="text-[13px] text-white font-bold tabular-nums">€{p.price}</span>
                    <span className="text-[9px] text-[#060606] bg-gold font-semibold px-2 py-1 rounded-lg cursor-default select-none leading-none whitespace-nowrap">
                      Add to cart
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-[#0e0e0e]">
        <span className="text-[8px] text-[#3a3a3a]">Showing 3 of 6 · </span>
        <span className="text-[8px] text-[#555] cursor-default">View all options →</span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero visual — two-panel chat + product listing mockup
// ---------------------------------------------------------------------------

function HeroVisual() {
  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 50%, #C9A84C 0%, transparent 60%)" }}
      />

      {/* Two-panel container */}
      <div className="relative bg-[#090909] border border-[#191919] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

        {/* LEFT: Chat panel */}
        <div className="flex flex-col w-full md:w-[44%] md:flex-shrink-0">
          {/* Chat title bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#131313] flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-[#1c1c1c]" />
                <span className="w-2 h-2 rounded-full bg-[#1c1c1c]" />
                <span className="w-2 h-2 rounded-full bg-[#1c1c1c]" />
              </div>
              <span className="text-[10px] text-[#444] ml-1 tracking-wide">Parts Assistant</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[8px] text-[#555] uppercase tracking-widest">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 px-3 pt-3 pb-2 flex flex-col gap-2 overflow-hidden">

            {/* AI: intro */}
            <AIBubble>
              <p className="text-[10px] text-[#999] leading-snug">
                Hello — I can help identify the right auto parts using VIN, vehicle documents and natural-language requests.
              </p>
            </AIBubble>

            {/* AI: guidance */}
            <AIBubble>
              <p className="text-[10px] text-[#777] leading-snug mb-1">
                Upload a VIN or describe what you need.
              </p>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-md px-2 py-1">
                <p className="text-[8px] text-[#3e3e3e] italic">
                  Try: &ldquo;I need a front wheel bearing&rdquo;
                </p>
              </div>
            </AIBubble>

            {/* User: VIN upload */}
            <UserBubble>
              <VINChip />
              <p className="text-[10px] text-[#bbb] font-mono">WVWZZZ3CZEE123456</p>
            </UserBubble>

            {/* AI: vehicle identified */}
            <AIBubble>
              <p className="text-[9px] text-[#777] mb-0.5">
                <CheckIcon />Vehicle identified
              </p>
              <p className="text-[11px] text-white font-semibold leading-snug">2013 VW Passat 2.0 TDI</p>
              <Pills items={[{ label: "B7 · EU spec" }]} />
            </AIBubble>

            {/* User: part request */}
            <UserBubble>
              <p className="text-[10px] text-[#ccc]">I need a front wheel bearing</p>
            </UserBubble>

            {/* AI: match + pointer to right panel */}
            <AIBubble>
              <p className="text-[9px] text-[#777] mb-0.5">
                <CheckIcon />Match found — fitment verified
              </p>
              <p className="text-[11px] text-white font-semibold">Front wheel bearing</p>
              <div className="flex items-center gap-1 mt-1.5">
                <span className="text-[8px] text-[#666] bg-[#0e0e0e] border border-[#1e1e1e] rounded-full px-1.5 py-0.5">
                  6 options found →
                </span>
              </div>
            </AIBubble>
          </div>

          {/* Composer */}
          <div className="px-3 py-2.5 border-t border-[#111] flex-shrink-0">
            <div className="flex items-center gap-2 bg-[#080808] border border-[#161616] rounded-lg px-3 py-1.5">
              <svg className="w-2.5 h-2.5 text-[#333] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className="text-[9px] text-[#333] flex-1">Describe what you need…</span>
              <svg className="w-2.5 h-2.5 text-[#333] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT: Product listing */}
        <ProductListingPanel />

      </div>

      <p className="absolute -bottom-5 right-0 text-[9px] text-[#1e1e1e] uppercase tracking-widest font-mono select-none">
        concept illustration
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden bg-[#060606]"
    >
      {/* Background image — subtle, dark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/delvor-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.12,
        }}
      />
      {/* Dark overlay to preserve readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#060606]/60 via-transparent to-[#060606]/80" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-8 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #C9A84C 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          {/* Left — text */}
          <div className="w-full lg:w-[380px] lg:flex-shrink-0">
            <div className="inline-flex items-center gap-2 border border-[#222] rounded-full px-4 py-1.5 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[11px] text-[#666] uppercase tracking-[0.12em]">Platform in Development</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight mb-5 sm:mb-6">
              A chat-first auto parts platform for the{" "}
              <span className="text-gold">Baltic market.</span>
            </h1>

            <p className="text-[14px] sm:text-[15px] text-[#555] leading-relaxed mb-8 sm:mb-10 max-w-[480px] lg:max-w-[380px]">
              Delvor is developing a chat-first auto parts search and ordering platform designed to connect vehicle data, supplier catalogues, pricing and stock availability into one streamlined workflow.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-gold text-[#060606] font-semibold text-[14px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg hover:bg-[#d4af5a] transition-colors"
              >
                Request Partnership
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="text-[14px] text-[#555] hover:text-[#888] transition-colors"
              >
                See how it works →
              </a>
            </div>
          </div>

          {/* Right — two-panel mockup */}
          <div className="flex-1 min-w-0 w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 2 — The Problem
// ---------------------------------------------------------------------------

function TheProblem() {
  const problems = [
    {
      title: "No universal language",
      body: "Buyers don't know OEM codes, brand names, or catalogue references. They describe parts by feel, location, or symptom — not by number.",
    },
    {
      title: "Fragmented catalogues",
      body: "Parts data is split across dozens of databases, brands, and formats. No single source gives a buyer the full picture for their vehicle.",
    },
    {
      title: "Compatibility uncertainty",
      body: "Multiple parts may fit the same vehicle. Without expert knowledge, the buyer can't tell which is correct — and wrong purchases are common.",
    },
    {
      title: "Wasted time and returns",
      body: "Confusion leads to support calls, delays, wrong orders, and costly returns. The current experience fails both buyer and seller.",
    },
  ];

  return (
    <section id="problem" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[640px] mb-16">
          <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">The Problem</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Buying automotive parts is{" "}
            <span className="text-[#444]">needlessly complex.</span>
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            The process hasn&apos;t changed in decades. Buyers are expected to know what professionals know — and most don&apos;t.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-[#111] border border-[#111] rounded-xl overflow-hidden">
          {problems.map((p, i) => (
            <div key={i} className="bg-[#060606] px-8 py-8 hover:bg-[#090909] transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-[#1e1e1e] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[10px] text-[#333] font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-2">{p.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 3 — The Solution
// ---------------------------------------------------------------------------

function TheSolution() {
  const pillars = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "VIN-based vehicle identification",
      body: "Buyers upload a VIN or licence plate. Delvor resolves the exact vehicle specification automatically — no manual input required.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Natural language part requests",
      body: "Buyers describe what they need in plain language. The AI understands intent, maps it to the correct part category, and filters for exact fitment.",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Intelligent matching across catalogues",
      body: "Delvor searches across connected supplier catalogues, surfaces compatible options, and presents them in a clear, ranked format.",
    },
  ];

  return (
    <section id="solution" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="lg:w-[380px] flex-shrink-0">
            <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">The Solution</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              AI that speaks<br />the buyer&apos;s language.
            </h2>
            <p className="text-[#555] text-lg leading-relaxed">
              Delvor translates how real people think about car parts into precise, verified, commercially useful results.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-5">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 bg-[#080808] border border-[#131313] rounded-xl hover:border-[#1e1e1e] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0e0e0e] border border-[#1a1a1a] flex items-center justify-center flex-shrink-0 text-gold">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-1.5">{p.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 4 — How It Works
// ---------------------------------------------------------------------------

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Identify",
      body: "The buyer provides a VIN, licence plate, or vehicle description. Delvor resolves the exact make, model, engine, and trim.",
    },
    {
      number: "02",
      title: "Analyze",
      body: "The buyer describes the part in plain language. The AI interprets the request and maps it to the correct part category and fitment criteria.",
    },
    {
      number: "03",
      title: "Compare",
      body: "Delvor searches connected supplier catalogues and returns a filtered, ranked list of compatible parts — quality tiers, brands, and availability included.",
    },
    {
      number: "04",
      title: "Order",
      body: "The buyer selects and confirms. The order is routed through the Delvor partner network for fulfilment and delivery.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[560px] mx-auto mb-16">
          <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Four steps. Zero guesswork.
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            Every part search follows a simple, AI-guided process that eliminates the knowledge gap between buyer and catalogue.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#111] border border-[#111] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#060606] px-7 py-8 hover:bg-[#090909] transition-colors">
              <div className="text-[32px] font-bold text-[#1a1a1a] mb-5 font-mono leading-none">
                {s.number}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 5 — For Suppliers
// ---------------------------------------------------------------------------

function ForSuppliers() {
  const benefits = [
    {
      title: "Reach buyers who couldn't find you",
      body: "Most buyers abandon their search before they reach a supplier. Delvor captures that demand at the point of intent and routes it to your catalogue.",
    },
    {
      title: "No integration complexity",
      body: "Delvor handles the translation between buyer language and catalogue data. Suppliers connect their product data — the AI does the rest.",
    },
    {
      title: "Matched, not browsed",
      body: "Your parts appear when they are the correct answer for a specific vehicle and request — not buried in a list the buyer cannot navigate.",
    },
  ];

  return (
    <section id="suppliers" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div className="lg:w-[420px] flex-shrink-0">
            <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">For Suppliers</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Connect your catalogue.{" "}
              <span className="text-[#444]">Let the AI sell it.</span>
            </h2>
            <p className="text-[#555] text-lg leading-relaxed mb-8">
              Delvor gives suppliers a new demand channel — buyers who are already certain of what they need, matched precisely to what you carry.
            </p>

            {/* Flow diagram */}
            <div className="flex items-center">
              {["Your Catalogue", "Delvor AI", "Verified Buyer"].map((label, i) => (
                <div key={i} className="flex items-center">
                  <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-2.5 text-center">
                    <span className="text-[11px] text-[#666] whitespace-nowrap">{label}</span>
                  </div>
                  {i < 2 && (
                    <div className="flex items-center">
                      <div className="w-5 h-px bg-[#222]" />
                      <svg className="w-3 h-3 text-[#333] -ml-0.5" fill="currentColor" viewBox="0 0 8 8">
                        <path d="M0 0 L8 4 L0 8 Z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-[#080808] border border-[#131313] rounded-xl hover:border-[#1e1e1e] transition-colors">
                <div className="flex items-start gap-4">
                  <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1.5">{b.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{b.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 6 — Partner Network
// ---------------------------------------------------------------------------

function BalticMapImage() {
  return (
    <div className="relative w-full max-w-[340px] mx-auto">
      {/* Soft glow behind the map */}
      <div
        className="absolute inset-0 blur-2xl opacity-15 pointer-events-none rounded-full"
        style={{ background: "radial-gradient(ellipse, #C9A84C 0%, transparent 70%)" }}
      />
      <Image
        src="/baltic-map.png"
        alt="Baltic market coverage — Estonia, Latvia, Lithuania"
        width={340}
        height={420}
        className="relative w-full h-auto object-contain"
        priority={false}
      />
    </div>
  );
}

function PartnerNetwork() {
  const features = [
    {
      title: "Regional pickup locations",
      body: "Physical pickup points across the Baltic states enable fast, convenient collection for buyers who prefer not to wait for home delivery.",
    },
    {
      title: "Workshop integration",
      body: "Partnered garages and service centres can order parts directly through Delvor — reducing procurement time and eliminating sourcing errors.",
    },
    {
      title: "Fleet and business access",
      body: "Fleet operators and B2B buyers get dedicated ordering, volume support, and account management through the Delvor partner network.",
    },
  ];

  return (
    <section id="network" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left — map */}
          <div className="lg:w-[340px] flex-shrink-0 flex flex-col items-center">
            <BalticMapImage />
            <p className="text-[10px] text-[#2a2a2a] uppercase tracking-widest mt-4 text-center font-mono">Baltic Market — Phase 1</p>
          </div>

          {/* Right — content */}
          <div className="flex-1">
            <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">Partner Network</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              Built for the{" "}
              <span className="text-[#444]">Baltic market first.</span>
            </h2>
            <p className="text-[#555] text-lg leading-relaxed mb-10">
              Delvor launches with a focused regional network — establishing proven operations before expanding across European markets.
            </p>

            <div className="flex flex-col gap-7">
              {features.map((f, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-px bg-[#1a1a1a] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1">{f.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 7 — Vision
// ---------------------------------------------------------------------------

function VisionNetworkImage() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Soft gold glow behind the image */}
      <div
        className="absolute inset-0 blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #C9A84C 0%, transparent 65%)" }}
      />
      <Image
        src="/delvor-vision-network.png"
        alt="Delvor platform — connecting suppliers, buyers, workshops and catalogues"
        width={420}
        height={420}
        className="relative w-full h-auto object-contain"
        priority={false}
      />
    </div>
  );
}

function Vision() {
  const capabilities = [
    {
      title: "AI-native search",
      body: "Every search is contextual, vehicle-aware, and language-agnostic. Buyers find the right part regardless of how they describe it.",
    },
    {
      title: "Unified catalogue layer",
      body: "Multiple supplier catalogues become one seamless, searchable inventory — normalised, deduplicated, and always current.",
    },
    {
      title: "Commerce infrastructure",
      body: "Ordering, routing, fulfilment coordination, and returns management — all handled by the Delvor platform on behalf of buyers and suppliers.",
    },
    {
      title: "Market intelligence",
      body: "Every search, match, and order generates data. Suppliers gain visibility into real demand patterns across the regional market.",
    },
  ];

  return (
    <section id="vision" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-16">
          {/* Left */}
          <div className="flex-1">
            <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">Vision</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              The infrastructure layer for automotive commerce.
            </h2>
            <p className="text-[#555] text-lg leading-relaxed">
              Delvor is not a parts shop. It is the intelligence and logistics layer that makes automotive parts commerce work — for buyers, suppliers, and the market as a whole.
            </p>
          </div>

          {/* Right — network image */}
          <div className="lg:w-[420px] flex-shrink-0">
            <VisionNetworkImage />
          </div>
        </div>

        {/* Capability grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#111] border border-[#111] rounded-2xl overflow-hidden">
          {capabilities.map((c, i) => (
            <div key={i} className="bg-[#060606] px-7 py-7 hover:bg-[#090909] transition-colors">
              <div className="w-8 h-px bg-gold mb-5" />
              <h3 className="text-white font-semibold text-[15px] mb-2">{c.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// About Delvor
// ---------------------------------------------------------------------------

function AboutDelvor() {
  const points = [
    {
      title: "Automotive market insight",
      body: "The project is built around real problems observed in vehicle repair, part identification, supplier catalogues and customer communication — not around a generic AI concept.",
    },
    {
      title: "Supplier data integration",
      body: "Delvor is designed from the start to connect to existing supplier catalogue infrastructure. The platform acts as an AI layer on top of structured parts data, not a replacement for it.",
    },
    {
      title: "Chat-first product experience",
      body: "Rather than building another traditional parts catalogue, Delvor focuses on making auto parts search accessible through a conversation-based interface that handles identification, matching and ordering in one flow.",
    },
  ];

  return (
    <section id="about" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left — text */}
          <div className="lg:w-[440px] flex-shrink-0">
            <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">About Delvor</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Built from a practical automotive perspective.
            </h2>
            <p className="text-[#555] text-[15px] leading-relaxed mb-5">
              Delvor is being developed from direct experience with the problems that make automotive parts buying difficult — for customers, garages, and the suppliers trying to serve them.
            </p>
            <p className="text-[#444] text-sm leading-relaxed">
              The first development stage focuses on the Baltic market and building the foundations for supplier catalogue integration. The goal is a working platform with real supplier data, not a demo with placeholder content.
            </p>
          </div>

          {/* Right — supporting points */}
          <div className="flex-1 flex flex-col gap-5">
            {points.map((p, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 bg-[#080808] border border-[#131313] rounded-xl hover:border-[#1e1e1e] transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full border border-[#1e1e1e] flex items-center justify-center">
                    <span className="text-[9px] text-[#333] font-mono">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] mb-2">{p.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

function Contact() {
  return (
    <section id="contact" className="bg-[#060606] py-28 border-t border-[#111]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Interested in partnering?
          </h2>
          <p className="text-[#555] text-lg leading-relaxed mb-10">
            Delvor is actively building its partner network. If you are a catalogue provider, parts distributor, logistics partner, or strategic investor, we want to hear from you.
          </p>

          <a
            href="mailto:info@delvor.lt"
            className="inline-flex items-center gap-2.5 bg-gold text-[#060606] font-semibold text-[14px] px-8 py-4 rounded-lg hover:bg-[#d4af5a] transition-colors"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-6 text-[#2a2a2a] text-sm">info@delvor.lt</p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Legal
// ---------------------------------------------------------------------------

function Legal() {
  return (
    <section className="bg-[#060606] border-t border-[#111] py-16">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left: description + links */}
          <div>
            <p className="text-[11px] text-gold uppercase tracking-[0.2em] mb-4">Legal</p>
            <p className="text-[#444] text-sm leading-relaxed mb-6 max-w-[420px]">
              For transparency and business communication, Delvor provides its website privacy policy, terms, and company information.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Website Terms", href: "/terms" },
                { label: "Support", href: "/support" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-[13px] text-[#555] hover:text-gold transition-colors group w-fit"
                >
                  <svg className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: business details + contact */}
          <div className="flex flex-col gap-5">
            <div className="border border-[#161616] rounded-lg p-5 bg-[#080808]">
              <p className="text-[11px] text-[#333] uppercase tracking-widest mb-3">Business Details</p>
              <p className="text-[13px] text-[#555] leading-relaxed">
                MB Galios Taškas
              </p>
              <p className="text-[12px] text-[#333] mt-1">Company code: 307152056</p>
              <p className="text-[12px] text-[#333]">Lithuania</p>
            </div>

            <div className="border border-[#161616] rounded-lg p-5 bg-[#080808]">
              <p className="text-[11px] text-[#333] uppercase tracking-widest mb-3">Partnership Inquiries</p>
              <p className="text-[12px] text-[#444] leading-relaxed mb-3">
                For partnership inquiries, NDAs, invoice requests, or supplier onboarding, contact:
              </p>
              <a
                href="mailto:partnerships@delvor.lt"
                className="inline-flex items-center gap-2 text-[13px] text-gold hover:text-[#d4af5a] transition-colors font-medium"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                partnerships@delvor.lt
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-[#111]">
      {/* Brand block */}
      <div className="max-w-[1280px] mx-auto px-8 pt-12 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <Image
            src="/delvor-header-logo.png"
            alt="Delvor"
            width={2172}
            height={724}
            className="w-[200px] h-auto object-contain"
          />
          <p className="text-[12px] text-[#333] leading-snug max-w-[280px]">
            A chat-first auto parts platform for the Baltic market. In development.
          </p>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-1">
          <p className="text-[11px] text-[#222] uppercase tracking-widest">Baltic Market · Phase 1</p>
          <p className="text-[11px] text-[#1e1e1e]">
            © {new Date().getFullYear()} Delvor.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheProblem />
        <TheSolution />
        <HowItWorks />
        <ForSuppliers />
        <PartnerNetwork />
        <Vision />
        <AboutDelvor />
        <Contact />
        <Legal />
      </main>
      <Footer />
    </>
  );
}
