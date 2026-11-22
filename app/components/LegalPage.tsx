import Link from "next/link";

export default function LegalPage({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: React.ReactNode }) {
  return <main className="legal-page section-shell"><p className="eyebrow">DELVOR legal</p><h1>{title}</h1><p className="legal-updated">Last updated {lastUpdated}</p><div className="legal-prose">{children}</div><Link className="text-link" href="/">Back to Delvor <span aria-hidden="true">↗</span></Link></main>;
}
