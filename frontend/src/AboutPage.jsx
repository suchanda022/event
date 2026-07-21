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
        <h1>40 Years of Trusted Event Excellence.</h1>
        <p>
          At PKS Event Solution, we bring over four decades of experience,
          dedication, and excellence to the event industry. Founded by Mr.
          Pabitra Kumar Saha, our company has built a reputation for
          reliability, professionalism, and exceptional client service.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-panel about-panel--featured animated-panel">
          <span className="panel-label">About</span>
          <div className="about-featured-content">
            <div className="about-founder-image">
              <img
                src="/images/pabitrasaha2.jpeg"
                alt="Founder portrait"
                loading="lazy"
              />
            </div>
            <div className="about-founder-text">
              <h2>We deliver trusted event solutions backed by experience.</h2>
              <p>
                PKS Event Solution has become a trusted partner for weddings,
                corporate events, concerts, cultural programs, and social
                gatherings of every scale. We are committed to delivering
                excellence with professionalism, passion, and attention to every
                detail, ensuring every event is memorable and flawlessly
                executed.
              </p>
            </div>
          </div>
        </div>

        <div className="about-panel about-panel--accent animated-panel">
          <span className="panel-label">Vision</span>
          <h3>Making every event memorable and stress-free.</h3>
          <p>
            PKS Event Solution has become a trusted partner for weddings,
            corporate events, concerts, cultural programs, and social gatherings
            of every scale. We are committed to delivering excellence with
            professionalism, passion, and attention to every detail, ensuring
            every event is memorable and flawlessly executed.
          </p>
        </div>

        <div className="about-panel about-panel--soft animated-panel">
          <span className="panel-label">What we do?</span>
          <h3>Complete event production solutions.</h3>
          <p>
            We offer a complete range of event support services, including:
            Professional Sound Systems DJ Setups Live Band Arrangements LED
            Rentals Generator Services Hotel Bookings Stage & Lighting Solutions
            Customized Event Management Services Whether you're planning an
            intimate celebration, a grand wedding, a corporate gathering, or a
            large-scale concert, PKS Event Solution provides complete event
            support tailored to your needs.
          </p>
        </div>
      </section>

      <section className="owner-panel animated-panel">
        <div className="owner-meter" />
        <div className="owner-copy-block">
          <div className="owner-image-wrapper">
            <img
              src="/images/pabitrasaha.jpeg"
              alt="Founder portrait"
              loading="lazy"
            />
          </div>
          <div className="owner-copy">
            <span className="panel-label">Founder</span>
            <h2>Mr. Pabitra Kumar Saha</h2>
            <p>
              Mr. Pabitra Kumar Saha has been serving as the Secretary of the
              Siliguri Sound Association for the past 20 years and is widely
              recognized for his leadership, integrity, and commitment to
              delivering quality event solutions.
            </p>
            <p>
              With more than four decades of experience, he has led PKS Event
              Solution in delivering successful weddings, corporate events,
              concerts, cultural programs, and social gatherings while earning
              the trust of clients across the region.
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

      <section className="about-closing-text animated-panel">
        <p>
          Whether you're planning an intimate celebration, a grand wedding, a
          corporate gathering, or a large-scale concert, PKS Event Solution is
          committed to delivering excellence with professionalism, passion, and
          attention to every detail.
        </p>
        <p>
          PKS Event Solution – 40 Years of Trust, Quality, and Memorable
          Experiences.
        </p>
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
