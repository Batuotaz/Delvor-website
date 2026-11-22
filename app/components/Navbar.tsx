"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const handleHowItWorks = (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname !== "/") return;
    event.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return <header className="site-header"><div className="nav-shell"><Link className="wordmark" href="/" aria-label="Delvor home" onClick={() => setOpen(false)}><Image className="brand-logo" src="/delvor-logo-light.png" alt="DELVOR" width={1881} height={414} priority /></Link><nav className="desktop-nav" aria-label="Main navigation"><Link href="/#how-it-works" onClick={handleHowItWorks}>How it works</Link><Link href="/contact">Contact</Link></nav><Link className="button button-small button-primary desktop-cta" href="/free-trial">Start free trial</Link><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}><span className="sr-only">Toggle menu</span><span /><span /></button></div>{open && <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation"><Link href="/#how-it-works" onClick={handleHowItWorks}>How it works</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link><Link className="button button-primary" href="/free-trial" onClick={() => setOpen(false)}>Start free trial</Link></nav>}</header>;
}
