export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__photo reveal" data-placeholder>
          <div className="ph ph--about">
            <span className="ph__label">photo of you — golf / hiking / family / at work</span>
          </div>
        </div>
        <div className="about__copy reveal">
          <span className="eyebrow">A little about me</span>
          <h2 className="section__title">Hi, I&apos;m Tim.</h2>
          <p>
            Originally from New&nbsp;Zealand, I now call <strong>Exeter, Devon</strong> home,
            where I live with my wife and our little one. When I&apos;m not building
            websites you&apos;ll find me out on the golf course, up a hill somewhere, or
            watching far too much sport.
          </p>
          <p>
            I&apos;m genuinely passionate about what I do. I love helping small businesses
            look brilliant online and grow — combining clean, modern design with the
            latest technology so you&apos;re set up not just for today, but for what&apos;s
            coming next.
          </p>
          <div className="about__tags">
            <span>Golf</span>
            <span>Hiking</span>
            <span>Sport</span>
            <span>Family</span>
          </div>
        </div>
      </div>
    </section>
  );
}
