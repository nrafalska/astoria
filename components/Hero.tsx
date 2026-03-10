const highlights = [
  'Weekly reporting',
  'Creative testing',
  'Strict QA',
  'Direct communication',
];

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Built for advertisers who value consistency</p>
          <h1>
            Performance marketing built for <span className="accent">reliability</span>{' '}
            and scale.
          </h1>
          <p className="lead">
            Adstera helps advertisers grow with clean acquisition, strict quality
            control and predictable results.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Request a call
            </a>
            <a className="btn btn-secondary" href="#agency">
              See our approach
            </a>
          </div>
        </div>

        <aside className="panel hero-panel" aria-label="Adstera capabilities">
          <h2>Operating model</h2>
          <ul>
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
