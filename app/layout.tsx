import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://delvor.lt"),
  title: { default: "Delvor | Local visibility you can see", template: "%s | Delvor" },
  description: "Delvor helps local businesses understand and improve Google Maps visibility with focused local SEO and transparent measurement.",
  applicationName: "Delvor",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "https://delvor.lt", siteName: "Delvor", title: "Delvor | Local visibility you can see", description: "Focused local SEO and Google Maps visibility for businesses that serve a place.", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Delvor local visibility" }] },
  twitter: { card: "summary_large_image", title: "Delvor | Local visibility you can see", description: "Focused local SEO and Google Maps visibility for businesses that serve a place.", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07100f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><Navbar />{children}<footer className="site-footer"><div className="section-shell footer-grid"><div><Link className="wordmark" href="/"><Image className="brand-logo footer-brand-logo" src="/delvor-logo-light.png" alt="DELVOR" width={1881} height={414} /></Link><p className="footer-note">Local visibility intelligence for businesses that serve a place.</p></div><div className="footer-links"><div><p className="footer-label">Explore</p><Link href="/#how-it-works">How it works</Link><Link href="/#pricing">Pricing</Link><Link href="/free-trial">Free trial</Link><Link href="/#faq">FAQ</Link><Link href="/#contact">Contact</Link></div><div><p className="footer-label">Legal</p><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms</Link><Link href="/cookie-policy">Cookies</Link></div></div><div className="footer-business"><p className="footer-label">Business enquiries</p><a href="mailto:paulius@delvor.lt">paulius@delvor.lt</a></div></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} Delvor</span><span>English</span></div></footer></body></html>;
}
