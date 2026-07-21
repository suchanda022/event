// src/Footer.jsx

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">PK Saha Events</h2>

          <p className="footer-text">
            Premium event production, lighting, media coverage, stage setup and
            infrastructure solutions for concerts, weddings, government events
            and large-scale productions.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <p>Event Production</p>
          <p>LED Walls & Lighting</p>
          <p>Media Coverage</p>
          <p>Stage Effects</p>
          <p>Infrastructure Setup</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <a href="mailto:pksahaevents@gmail.com">pksahaevents@gmail.com</a>

          <a href="tel:+919474960506">+91 94749 60506</a>

          <a href="https://wa.me/919474960506" target="_blank" rel="noreferrer">
            WhatsApp Chat
          </a>

          <p>Siliguri, West Bengal, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 PK Saha Events. All rights reserved.
      </div>
    </footer>
  );
}
