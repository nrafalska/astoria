import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-wrap">
        <Link className="logo" href="/" aria-label="Adstera home">
          Adstera
        </Link>
        <nav aria-label="Main navigation" className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="mailto:anastasia@blackrock-traffic.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
