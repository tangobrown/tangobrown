type Tier = {
  tag: string;
  from?: boolean;
  price: string;
  period: string;
  features: string[];
};

const tiers: Tier[] = [
  {
    tag: "Website build",
    price: "£699",
    period: "one-off",
    features: [
      "Bespoke design, no templates",
      "Fast, mobile-first build",
      "Easy for you to update",
    ],
  },
  {
    tag: "Hosting",
    from: true,
    price: "£20",
    period: "per month",
    features: [
      "Fast, secure UK-friendly hosting",
      "Backups, SSL & monitoring",
      "A real person to call",
    ],
  },
  {
    tag: "Care plan",
    from: true,
    price: "£280",
    period: "per month",
    features: [
      "Everything in Hosting",
      "Ongoing SEO & content tuning",
      "Maintenance & priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--center">Pricing</span>
          <h2 className="section__title">Honest, fixed-price work.</h2>
          <p className="section__sub">
            No hidden fees, no padding. You know what you&apos;re paying upfront.
          </p>
        </div>
        <ul className="pricing__grid">
          {tiers.map((t) => (
            <li className="price-card reveal" key={t.tag}>
              <div className="price-card__head">
                <span className="price-card__tag">{t.tag}</span>
                <p className="price-card__price">
                  {t.from && <span className="price-card__from">from</span>}
                  {t.price}
                </p>
                <p className="price-card__period">{t.period}</p>
              </div>
              <ul className="price-card__list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn--ghost btn--block">
                Get started
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
