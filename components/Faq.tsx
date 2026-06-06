const faqs = [
  {
    q: "How long does a typical website take to build?",
    a: "Most small business sites take 3–4 weeks from kickoff to launch. Bigger projects with custom features can take 6–8. I'll always give you a realistic timeline upfront.",
  },
  {
    q: "Do you work with clients outside Devon?",
    a: "Yes — most of my work is remote, with clients all over the UK. Everything happens over video calls, email and shared docs, so location isn't an issue. Happy to meet in person if you're local.",
  },
  {
    q: "What's included in the hosting package?",
    a: "Fast, secure UK-friendly hosting, automated daily backups, SSL certificates, security monitoring, plugin and CMS updates, plus direct access to me when something needs sorting.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Absolutely. Every site I build is set up so you can change text, swap images and add new pages without touching code. I'll walk you through it and leave you with a short video guide.",
  },
  {
    q: "What if I need help after the site is live?",
    a: "You're never on your own. Hosting and care-plan clients get included support; one-off build clients can buy hours as needed or upgrade to an ongoing plan at any time.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — for builds, typically 50% upfront and 50% on launch. Happy to discuss instalments for bigger projects.",
  },
];

export default function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--center">FAQ</span>
          <h2 className="section__title">Questions, answered.</h2>
          <p className="section__sub">
            If you don&apos;t see what you&apos;re after here, just get in touch &mdash;
            happy to help.
          </p>
        </div>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details className="faq__item reveal" key={i}>
              <summary className="faq__q">{f.q}</summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
