const items = [
  "A short, glowing testimonial from a happy client goes right here — what it was like working with you and the difference it made.",
  "Another lovely quote — keep them short and specific. Mention a result if you can: 'enquiries doubled in three months.'",
  "A third testimonial to build trust. Real names, businesses and (with permission) photos make these far more powerful.",
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--center">Kind words</span>
          <h2 className="section__title">What clients say.</h2>
          <p className="section__sub">
            Add real testimonials here — these are placeholders ready for you to drop
            quotes into.
          </p>
        </div>
        <ul className="t-grid">
          {items.map((q, i) => (
            <li className="t-card reveal" key={i}>
              <p className="t-card__quote">{q}</p>
              <div className="t-card__person">
                <span className="t-card__avatar" aria-hidden="true"></span>
                <span>
                  <strong>Client name</strong>
                  <br />
                  Business name
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
