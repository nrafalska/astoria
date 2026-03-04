import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';

const agencyItems = [
  {
    title: 'Performance campaigns',
    text: 'Acquisition built around CAC, LTV and stability.',
  },
  {
    title: 'Creative & messaging',
    text: 'Fast iterations, testing discipline, clean offers.',
  },
  {
    title: 'Analytics & reporting',
    text: 'Tracking, dashboards, transparent weekly updates.',
  },
];

const workItems = [
  {
    title: 'Brief → Strategy',
    text: 'We align goals, constraints, and KPI logic.',
  },
  {
    title: 'Launch → Control',
    text: 'Structured rollout, QC checkpoints, rapid fixes.',
  },
  {
    title: 'Iterate → Scale',
    text: 'Weekly improvements, creatives, audience and bids.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section
          id="agency"
          title="What we do"
          subtitle="Agency"
          items={agencyItems}
        />
        <Section
          id="work"
          title="How we work"
          subtitle="Work"
          items={workItems}
        />

        <section id="contact" className="section">
          <div className="container contact-layout">
            <div className="section-head">
              <p className="eyebrow">Contact</p>
              <h2>Ready to improve acquisition quality?</h2>
              <p>
                Share your current goals and we&apos;ll propose a practical path to
                performance and scale.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
