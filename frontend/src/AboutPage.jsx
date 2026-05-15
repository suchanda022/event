import { useEffect, useState } from "react";

export default function AboutPage({ onNavigate }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className={`page-shell about-page ${mounted ? "loaded" : ""}`}>
      <section className="subpage-hero">
        <span className="eyebrow">About</span>
        <h1>
          We deliver premium live experiences that feel bold, polished, and
          effortless.
        </h1>
        <p>
          Every event is designed with a strong visual identity, reliable
          technical support, and a clear sense of purpose. Our work looks
          premium, performs flawlessly, and stays on brand from concept to show
          day.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-panel about-panel--featured animated-panel">
          <span className="panel-label">About</span>
          <h2>
            We are an event production studio for brands, corporates, and
            governments.
          </h2>
          <p>
            Our team combines stage design, AV engineering, lighting, rigging,
            media coordination, and on-site operations to create live moments
            that engage audiences and earn trust.
          </p>
        </div>

        <div className="about-panel about-panel--accent animated-panel">
          <span className="panel-label">Vision</span>
          <h3>Premium execution, every time.</h3>
          <p>
            We believe that strong events should feel seamless, cinematic, and
            completely aligned with the client’s message. Our goal is to make
            every production feel like a high-end, finished experience.
          </p>
        </div>

        <div className="about-panel about-panel--soft animated-panel">
          <span className="panel-label">What we do?</span>
          <h3>Full technical delivery for flagship events.</h3>
          <p>
            From LED walls, rigging, power, and lighting to broadcast-ready
            sound, media streams, and event infrastructure, we handle the
            details that make premium events feel secure and spectacular.
          </p>
        </div>
      </section>

      <section className="owner-panel animated-panel">
        <div className="owner-meter" />
        <div className="owner-copy-block">
          <div className="owner-image-wrapper">
            <img
              src="/images/Event Production & setup/ar-rehman.jpeg"
              alt="Owner portrait"
              loading="lazy"
            />
          </div>
          <div className="owner-copy">
            <span className="panel-label">Owner</span>
            <h2>Rohit Singh</h2>
            <p>
              Rohit leads the team with 12+ years of experience in large-scale
              events. His specialty is translating complex requirements into
              elegant technical production that looks refined and stays on
              schedule.
            </p>
            <button
              type="button"
              className="button primary"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/contact");
              }}
            >
              Connect with the team
            </button>
          </div>
        </div>
      </section>

      <section className="clients-logos-section animated-panel">
        <span className="eyebrow">Trusted By</span>
        <h2>Our Clients & Partners</h2>

        <div className="logos-group">
          <div className="logos-category">
            <h3>Educational Institutions</h3>
            <div className="logos-grid">
              <img
                src="/logos/educational-institutions/axillium convent school.jpg"
                alt="Axillium Convent School"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/gd goyenka.webp"
                alt="GD Goyenka"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/nirmala convent school.png"
                alt="Nirmala Convent School"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/siliguri boys high school.webp"
                alt="Siliguri Boys High School"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/siliguri college.webp"
                alt="Siliguri College"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/siliguri girls school.jpg"
                alt="Siliguri Girls School"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/SIT.webp"
                alt="SIT"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/st joseph school, matigara.png"
                alt="St Joseph School, Matigara"
                loading="lazy"
              />
              <img
                src="/logos/educational-institutions/surya sen college.webp"
                alt="Surya Sen College"
                loading="lazy"
              />
            </div>
          </div>

          <div className="logos-category">
            <h3>Government & Public Projects</h3>
            <div className="logos-grid">
              <img
                src="/logos/goverment-projects/BIEC govt.webp"
                alt="BIEC Government"
                loading="lazy"
              />
              <img
                src="/logos/goverment-projects/Durdarshan govt.jpg"
                alt="Doordarshan Government"
                loading="lazy"
              />
              <img
                src="/logos/goverment-projects/EZCC govt.jpg"
                alt="EZCC Government"
                loading="lazy"
              />
              <img
                src="/logos/goverment-projects/NBDA govt.webp"
                alt="NBDA Government"
                loading="lazy"
              />
              <img
                src="/logos/goverment-projects/pwd govt.webp"
                alt="PWD Government"
                loading="lazy"
              />
              <img
                src="/logos/goverment-projects/SJDA govt.webp"
                alt="SJDA Government"
                loading="lazy"
              />
              <img
                src="/logos/goverment-projects/SMC govt.png"
                alt="SMC Government"
                loading="lazy"
              />
            </div>
          </div>

          <div className="logos-category">
            <h3>Events & Concerts</h3>
            <div className="logos-grid">
              <img
                src="/logos/events/AR Rehman.jpg"
                alt="AR Rehman"
                loading="lazy"
              />
              <img
                src="/logos/events/arijit singh.jpg"
                alt="Arijit Singh"
                loading="lazy"
              />
              <img
                src="/logos/events/sonu nigam.jpg"
                alt="Sonu Nigam"
                loading="lazy"
              />
              <img
                src="/logos/events/Sun Pharma.webp"
                alt="Sun Pharma"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
