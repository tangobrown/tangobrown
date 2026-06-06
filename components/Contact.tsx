"use client";

import { useState } from "react";

type Note = { text: string; ok: boolean } | null;

export default function Contact() {
  const [note, setNote] = useState<Note>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const message = String(data.get("message") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      setNote({ text: "Please add your name, a valid email and a message.", ok: false });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, business, message }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        setNote({
          text:
            j.error || "Something went wrong — please try again or email me directly.",
          ok: false,
        });
      } else {
        setNote({
          text: `Thanks ${name}! Your message is on its way — I'll be in touch shortly.`,
          ok: true,
        });
        form.reset();
      }
    } catch {
      setNote({
        text: "Network error — please try again or email me directly.",
        ok: false,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <span className="eyebrow">Let&apos;s talk</span>
          <h2 className="section__title">Got a project in mind?</h2>
          <p>
            Tell me a little about your business and what you&apos;re after. I reply to
            every message personally — usually within a day.
          </p>
          <ul className="contact__details">
            <li>
              <span className="contact__ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:+447594404388">07594&nbsp;404&nbsp;388</a>
            </li>
            <li>
              <span className="contact__ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <a href="mailto:tim@tangobrown.com">tim@tangobrown.com</a>
            </li>
            <li>
              <span className="contact__ico" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Exeter, Devon · working with clients UK-wide</span>
            </li>
          </ul>
        </div>

        <form className="contact__form reveal" noValidate onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Jane Smith" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane@business.co.uk"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="business">
              Business <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="business"
              name="business"
              placeholder="Your business name"
            />
          </div>
          <div className="field">
            <label htmlFor="message">How can I help?</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="A few lines about your project…"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn--primary btn--lg btn--block"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Send message"}
          </button>
          <p
            className={`form__note${note ? (note.ok ? " is-ok" : " is-err") : ""}`}
            role="status"
            aria-live="polite"
          >
            {note?.text || ""}
          </p>
        </form>
      </div>
    </section>
  );
}
