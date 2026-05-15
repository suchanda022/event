import { useEffect, useState } from "react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className={`page-shell contact-page ${mounted ? "loaded" : ""}`}>
      <section className="subpage-hero">
        <span className="eyebrow">Contact</span>
        <h1>Start planning your next show with a dedicated event partner.</h1>
        <p>
          Reach out for schedule reviews, technical planning, and premium event
          delivery support tailored to your audience and venue.
        </p>
      </section>

      <div className="contact-grid">
        <div className="contact-card animated-panel">
          <span className="panel-label">Reach Us</span>
          <h3>Contact information</h3>
          <p>
            Our team is available for discovery calls, site surveys, and
            production planning.
          </p>
          <div className="contact-detail">
            <strong>Email</strong>
            <a href="mailto:pksahaevents@gmail.com">pksahaevents@gmail.com</a>
          </div>
          <div className="contact-detail">
            <strong>Phone</strong>
            <a href="tel:+919474960506">+91 94 7496 0506</a>
          </div>
        </div>

        <div className="contact-card animated-panel">
          <span className="panel-label">What to expect</span>
          <h3>How we respond</h3>
          <ul className="contact-list">
            <li>Fast acknowledgement within 24 hours</li>
            <li>Dedicated project review by our lead producer</li>
            <li>Clear scopes, site planning, and premium execution guidance</li>
          </ul>
        </div>
      </div>

      <div className="contact-cta animated-panel">
        <p>
          Prefer a quick quote? Send us the event date, venue, and expected
          guest list, and we’ll prepare a tailored production outline.
        </p>
      </div>
    </main>
  );
}
