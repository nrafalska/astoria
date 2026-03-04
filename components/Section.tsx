type Item = {
  title: string;
  text: string;
};

type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  items: Item[];
};

export default function Section({ id, title, subtitle, items }: SectionProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{subtitle}</p>
          <h2>{title}</h2>
        </div>

        <div className="cards-grid">
          {items.map((item) => (
            <article key={item.title} className="panel card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
