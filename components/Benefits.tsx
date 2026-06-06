export default function Benefits() {
  return (
    <section className="benefits section" id="benefits">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--center">Why work with me</span>
          <h2 className="section__title">
            A partner in your corner — not just another supplier.
          </h2>
          <p className="section__sub">
            I treat your business like my own. That means real conversations, honest
            advice and modern work that actually moves the needle.
          </p>
        </div>

        <ul className="benefits__grid">
          <li className="benefit reveal">
            <span className="benefit__icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="19" cy="24" r="11" stroke="currentColor" strokeWidth="3" />
                <circle cx="29" cy="24" r="11" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
            <h3>True partnership</h3>
            <p>
              I work alongside you, invested in your success — quick to reply, easy
              to talk to, and always in your corner.
            </p>
          </li>
          <li className="benefit reveal">
            <span className="benefit__icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path
                  d="M9 32L20 21L27 28L40 15"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 15H40V24"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h3>Driven by results</h3>
            <p>
              I&apos;m genuinely passionate about getting you outcomes — more visibility,
              more enquiries and more growth for your business.
            </p>
          </li>
          <li className="benefit reveal">
            <span className="benefit__icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path
                  d="M24 8C24 16 26 18 34 18C26 18 24 20 24 28C24 20 22 18 14 18C22 18 24 16 24 8Z"
                  fill="currentColor"
                />
                <path
                  d="M36 28C36 32 37 33 41 33C37 33 36 34 36 38C36 34 35 33 31 33C35 33 36 32 36 28Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <h3>Modern &amp; forward-thinking</h3>
            <p>
              I build with where the web is going — fast, AI-ready and future-proof —
              so you stay ahead of your competitors.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
