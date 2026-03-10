const features = [
  {
    icon: '🗂️',
    title: 'Google Ads Account Management',
    text: 'Manage connected client accounts in one centralized interface with structured access and MCC workflows.',
  },
  {
    icon: '🚀',
    title: 'Campaign Creation & Management',
    text: 'Create, launch, and control advertising campaigns from a unified operational dashboard.',
  },
  {
    icon: '📈',
    title: 'Performance Monitoring',
    text: 'Track spend, conversions, and delivery signals through clear performance views for every client.',
  },
  {
    icon: '💳',
    title: 'Budget Tracking',
    text: 'Monitor allocation and pacing to keep campaigns aligned with client budget constraints.',
  },
  {
    icon: '📊',
    title: 'Reporting & Analytics',
    text: 'Generate structured reports and operational insights for weekly and monthly decision cycles.',
  },
  {
    icon: '🏢',
    title: 'Multi-Account MCC Workflows',
    text: 'Operate multiple client accounts under a manager account with consistent team processes.',
  },
];

const processSteps = [
  'Connect authorized accounts and organize client workspaces.',
  'Manage campaigns, targeting, creatives, and budgets in one place.',
  'Monitor reporting and performance to support weekly optimization.',
  'Operate across multiple client accounts under MCC with consistent controls.',
];

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">B2B SaaS for agency operations</p>
            <h1>Adstera – Google Ads Campaign Management Platform</h1>
            <p className="lead">
              Adstera is a CRM platform designed for managing Google Ads
              accounts and campaigns under a manager account (MCC).
            </p>
          </div>

          <aside className="product-mockup" aria-label="Adstera product mockup">
            <div className="mockup-topbar">
              <span>Campaign CRM</span>
              <span>March Report Cycle</span>
            </div>

            <div className="mockup-body">
              <div className="mockup-sidebar">
                <p>Overview</p>
                <p>Client Accounts</p>
                <p>Campaigns</p>
                <p>Budgets</p>
                <p>Reports</p>
              </div>

              <div className="mockup-main">
                <div className="kpi-grid">
                  <article>
                    <small>Active Campaigns</small>
                    <strong>42</strong>
                  </article>
                  <article>
                    <small>Connected Accounts</small>
                    <strong>118</strong>
                  </article>
                  <article>
                    <small>Weekly Reports</small>
                    <strong>96</strong>
                  </article>
                </div>

                <div className="mockup-panels">
                  <article className="chart-panel">
                    <h3>Performance Overview</h3>
                    <div className="chart-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </article>

                  <article className="budget-panel">
                    <h3>Budget Allocation</h3>

                    <div className="progress-row">
                      <label>Search</label>
                      <div>
                        <i style={{ width: '78%' }} />
                      </div>
                    </div>

                    <div className="progress-row">
                      <label>Display</label>
                      <div>
                        <i style={{ width: '54%' }} />
                      </div>
                    </div>

                    <div className="progress-row">
                      <label>Video</label>
                      <div>
                        <i style={{ width: '39%' }} />
                      </div>
                    </div>
                  </article>
                </div>

                <article className="accounts-panel">
                  <h3>Client Accounts</h3>
                  <ul>
                    <li>
                      <span>Northline Retail</span>
                      <em>Stable</em>
                    </li>
                    <li>
                      <span>Acme Services</span>
                      <em>Scaling</em>
                    </li>
                    <li>
                      <span>Valera Home</span>
                      <em>Review</em>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container content-card">
          <h2>Product Overview</h2>
          <p>
            Adstera is built for advertising agencies and marketing teams that
            need a structured way to operate Google Ads accounts at scale. The
            platform centralizes campaign management, reporting, and client
            account operations in one workspace designed for predictable B2B
            workflows.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container">
          <div className="section-heading">
            <h2 id="features-title">Platform Features</h2>
            <p>
              Core capabilities designed for day-to-day campaign operations,
              account governance, and client reporting.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <span className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <article className="content-card">
            <h2>How It Works</h2>
            <ol className="steps-list">
              {processSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="content-card">
            <h2>Business Fit</h2>
            <p>
              Adstera supports teams that need clear responsibility boundaries,
              transparent reporting cycles, and reliable campaign governance
              under MCC. It is designed for compliance-focused agency
              operations, not short-term growth hacks.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container contact-card">
          <h2>Contact</h2>
          <p>
            For business, partnership, or compliance inquiries, contact us at:
          </p>
          <a
            className="contact-email"
            href="mailto:anastasia@blackrock-traffic.com"
          >
            anastasia@blackrock-traffic.com
          </a>
        </div>
      </section>
    </main>
  );
}