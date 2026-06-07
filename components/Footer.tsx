import InteractiveDots from "@/components/InteractiveDots";

export default function Footer() {
  return (
    <footer className="footer">
      <InteractiveDots />
      <div className="container footer__inner">
        <a href="#top" className="brand" aria-label="Tim Brown home">
          <span className="brand__dot"></span>
        </a>
        <p className="footer__tag">
          Modern digital solutions for small businesses across the UK.
        </p>
        <div className="footer__links">
          <a href="mailto:tim@tangobrown.com">tim@tangobrown.com</a>
          <a href="tel:+447594404388">07594 404 388</a>
        </div>
      </div>
      <p className="footer__copy container">
        © {new Date().getFullYear()} Tim Brown. Built with care in Exeter, Devon.
      </p>
    </footer>
  );
}
