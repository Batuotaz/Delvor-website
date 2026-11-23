"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const sections = [
  ["How it works", "/#how-it-works"],
  ["Pricing", "/#pricing"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="wordmark" href="/" aria-label="Delvor home" onClick={closeMenu}>
          <Image className="brand-logo" src="/delvor-logo-light.png" alt="DELVOR" width={1881} height={414} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {sections.map(([title, href]) => <Link key={href} href={href}>{title}</Link>)}
        </nav>
        <Link className="button button-small button-primary desktop-cta" href="/free-trial">Start 7-Day Free Trial</Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls={open ? "mobile-menu" : undefined} onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">Toggle menu</span><span /><span />
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
          {sections.map(([title, href]) => <Link key={href} href={href} onClick={closeMenu}>{title}</Link>)}
          <Link className="button button-primary" href="/free-trial" onClick={closeMenu}>Start 7-Day Free Trial</Link>
        </nav>
      )}
    </header>
  );
}
