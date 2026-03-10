import Image from 'next/image';

const features = [
  'Google Ads account management',
  'Campaign creation and management',
  'Performance monitoring',
  'Budget tracking',
  'Reporting and analytics',
  'Multi-account management under MCC',
];

const metrics = [
  { label: 'Accounts connected', value: '120+' },
  { label: 'Weekly reports', value: '400+' },
  { label: 'MCC workflows', value: 'Multi-client' },
];

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <h1>Adstera – Google Ads Campaign Management Platform</h1>
            <p className="lead">
              Adstera is a CRM platform designed for managing Google Ads
              accounts and campaigns under a manager account (MCC).
            </p>

            <div className="metric-grid" aria-label="Platform highlights">
              {metrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <p className="metric-value">{item.value}</p>
                  <p className="metric-label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="image-card">
            <Image
              src="/images/hero-dashboard.svg"
              alt="Adstera dashboard preview"
              width={760}
              height={520}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-card">
          <h2>Product description</h2>
          <p>
            The platform helps advertising agencies and marketing teams manage
            Google Ads operations in a centralized interface. Users can connect
            authorized accounts, create and manage campaigns, monitor
            performance metrics, track budgets, and generate reports.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container split-card">
          <div className="content-card">
            <h2 id="features-title">Features</h2>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="image-card image-card-light">
            <Image
              src="/images/workflow-graphic.svg"
              alt="Workflow illustration for MCC campaign management"
              width={760}
              height={420}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-card">
          <h2>About</h2>
          <p>
            Adstera is built for agencies and advertising professionals who need
            a structured workflow for managing client advertising activity
            through Google Ads.
          </p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container content-card">
          <h2>Contact</h2>
          <p>For business or compliance inquiries:</p>
          <p>
            <a href="mailto:anastasia@blackrock-traffic.com">
              anastasia@blackrock-traffic.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}