import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>© {new Date().getFullYear()} Adstera</p>
        <nav aria-label="Footer navigation" className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="mailto:anastasia@blackrock-traffic.com">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
