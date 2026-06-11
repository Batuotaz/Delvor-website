"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "The Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Suppliers", href: "#suppliers" },
  { label: "Vision", href: "#vision" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#060606]/95 backdrop-blur-md border-b border-[#161616]">
      <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between gap-8">

        <a href="#" className="flex items-center flex-shrink-0">
          <Image
            src="/delvor-header-logo.png"
            alt="Delvor"
            width={2172}
            height={724}
            className="w-[160px] h-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-9 flex-1 justify-center">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-[#666] hover:text-[#aaa] transition-colors tracking-wide whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2.5 text-[13px] font-medium text-white border border-[#3a3a3a] hover:border-gold hover:text-gold px-5 py-2.5 rounded transition-colors flex-shrink-0"
        >
          Request Partnership
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-1 text-[#555] hover:text-white transition-colors"
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#161616] bg-[#060606] px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 text-sm font-medium text-white border border-[#3a3a3a] px-4 py-2.5 rounded text-center"
          >
            Request Partnership →
          </a>
        </div>
      )}
    </header>
  );
}
