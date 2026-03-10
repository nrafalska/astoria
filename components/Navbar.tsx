export default function Navbar() {
  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="Adstera homepage">
          <span className="brand-icon" aria-hidden="true">
            A
          </span>
          <span className="brand-text">
            Adstera
            <small>Performance Marketing</small>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="nav-links">
          <a href="#top">Home</a>
          <a href="#agency">Agency</a>
          <a href="#work">Work</a>
          <a href="#contact" className="contact-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
