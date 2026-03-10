import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-wrap">
        <Link className="brand" href="/" aria-label="Adstera home">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-text">
            <strong>Adstera</strong>
            <small>Google Ads Management Platform</small>
          </span>
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