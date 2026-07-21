import "./App.css";
import { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ServicesPage from "./ServicesPage";
import { services } from "./data/servicesData";
import Footer from "./footer";
import SplashScreen from "./SplashScreen";

const getRoute = () => {
  const path = window.location.pathname;
  if (path === "/services" || path.startsWith("/services/")) {
    return path;
  }
  if (path === "/about" || path === "/contact") {
    return path;
  }
  return "/";
};

function App() {
  const [route, setRoute] = useState(getRoute());
  const [nextRoute, setNextRoute] = useState(getRoute());
  const [transitionPhase, setTransitionPhase] = useState("visible");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handlePopState = () => {
      const targetRoute = getRoute();
      if (targetRoute === route) return;
      setShowDropdown(false);
      setNextRoute(targetRoute);
      setTransitionPhase("hiding");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [route]);

  useEffect(() => {
    if (transitionPhase !== "hiding") return;

    const timeout = window.setTimeout(() => {
      window.history.pushState({}, "", nextRoute);
      setRoute(nextRoute);
      setTransitionPhase("visible");
    }, 240);

    return () => window.clearTimeout(timeout);
  }, [nextRoute, transitionPhase]);

  useEffect(() => {
    // Add animation class to body when splash screen is shown
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  const heroImages = [
    "/herosection/p13.jpeg",
    "/herosection/pic7.jpeg",
    "/herosection/pic2.jpeg",
    "/herosection/pic3.jpg",
    "/herosection/pic4.jpeg",
    "/herosection/pic5.jpeg",
    "/herosection/pic6.jpeg",
  ];
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const [visibleEventCards, setVisibleEventCards] = useState([]);

  useEffect(() => {
    if (route !== "/") {
      setVisibleEventCards([]);
      return;
    }

    const cards = Array.from(
      document.querySelectorAll(".event-type-slide-card"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cards.indexOf(entry.target);
            if (cardIndex >= 0) {
              setVisibleEventCards((current) =>
                current.includes(cardIndex) ? current : [...current, cardIndex],
              );
            }
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [route]);

  const navigateTo = (path) => {
    if (path === route) return;
    setShowDropdown(false);
    setNextRoute(path);
    setTransitionPhase("hiding");
  };

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigateTo(path);
  };

  const servicesRoute = route.startsWith("/services");

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`app ${!showSplash ? "show-content" : ""}`}>
      <div className={`route-transition ${transitionPhase}`}>
        <header className="header">
          <div className="brand">
            <img
              src="logos/PKSSOLUTIONS.png"
              alt="Company Logo"
              className="brand-logo"
              loading="eager"
              decoding="async"
            />
            <div>
              <span className="brand-name">Event Services</span>
              <span className="brand-tag">
                Premium event production and infrastructure
              </span>
            </div>
          </div>
          <nav>
            <a href="/" onClick={(e) => handleNavigation(e, "/")}>
              Home
            </a>
            <div className="nav-dropdown">
              <button
                className="dropdown-toggle"
                onClick={(event) => {
                  event.preventDefault();
                  setShowDropdown(!showDropdown);
                }}
              >
                Services
              </button>
              {showDropdown && (
                <div className="dropdown-menu">
                  <a
                    href="/services"
                    className="dropdown-item"
                    onClick={(event) => handleNavigation(event, "/services")}
                  >
                    All Services
                  </a>
                  {services.map((service) => (
                    <a
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="dropdown-item"
                      onClick={(event) =>
                        handleNavigation(event, `/services/${service.id}`)
                      }
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/about" onClick={(e) => handleNavigation(e, "/about")}>
              About Us
            </a>
            <a href="/contact" onClick={(e) => handleNavigation(e, "/contact")}>
              Contact
            </a>
          </nav>
        </header>

        {servicesRoute ? (
          <ServicesPage route={route} onNavigate={navigateTo} />
        ) : route === "/about" ? (
          <AboutPage onNavigate={navigateTo} />
        ) : route === "/contact" ? (
          <ContactPage />
        ) : (
          <>
            <section id="home" className="hero">
              <div className="hero-slides">
                {heroImages.map((src, index) => (
                  <div
                    key={src}
                    className={`hero-slide ${
                      index === activeHeroIndex ? "active" : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Hero Slide ${index + 1}`}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
              <div className="hero-overlay" />
              <div className="hero-content">
                <p className="eyebrow">Premium Event Production</p>
                <h1>Design. Execute. Amaze.</h1>
                <p className="hero-copy">
                  We deliver unforgettable event experiences with stunning stage
                  setup, lighting, media coverage, and reliable infrastructure.
                </p>
                <div className="hero-actions">
                  <a
                    className="button primary"
                    href="/services"
                    onClick={(e) => handleNavigation(e, "/services")}
                  >
                    Explore Services
                  </a>
                  <a
                    className="button secondary"
                    href="/contact"
                    onClick={(e) => handleNavigation(e, "/contact")}
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </section>

            <section className="event-types">
              <div className="section-heading">
                <span>Event Moments</span>
                <h2>
                  Wedding, Concert & Corporate Experiences with premium flow.
                </h2>
              </div>
              <div className="event-type-slider">
                {[
                  {
                    title: "Wedding",
                    image: "/images/slider/wedding.jpeg",
                  },
                  {
                    title: "Concerts",
                    image: "/images/slider/concert.jpeg",
                  },
                  {
                    title: "Government Work",
                    image: "/images/slider/govt.jpeg",
                  },
                  {
                    title: "Corporate Event",
                    image: "/images/slider/corporate.jpeg",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`event-type-card event-type-slide-card${
                      visibleEventCards.includes(index) ? " visible" : ""
                    }`}
                  >
                    <div className="event-type-image event-type-slide-image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div className="event-type-overlay">
                        <span className="event-type-tag">{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="client-showcase">
              <div className="section-heading">
                <span>Clients & Partners</span>
                <h2>
                  Premium event partners across government, education, concerts,
                  and corporate work.
                </h2>
              </div>

              <div className="client-showcase-grid">
                {[
                  {
                    id: "government",
                    title: "Government Projects",
                    description:
                      "Official ceremonies, national events, public infrastructure.",
                    logos: [
                      {
                        src: "/logos/goverment-projects/EZCC govt.jpg",
                        alt: "EZCC",
                      },
                      {
                        src: "/logos/goverment-projects/NBDA govt.webp",
                        alt: "NBDA",
                      },
                      {
                        src: "/logos/goverment-projects/BIEC govt.webp",
                        alt: "BIEC",
                      },
                      {
                        src: "/logos/goverment-projects/Durdarshan govt.jpg",
                        alt: "Durdarshan",
                      },
                      {
                        src: "/logos/goverment-projects/pwd govt.webp",
                        alt: "PWD",
                      },
                      {
                        src: "/logos/goverment-projects/SJDA govt.webp",
                        alt: "SJDA",
                      },
                      {
                        src: "/logos/goverment-projects/SMC govt.png",
                        alt: "SMC",
                      },
                    ],
                  },
                  {
                    id: "education",
                    title: "Educational Institutions",
                    description:
                      "Graduations, campus openings, and conference productions.",
                    logos: [
                      {
                        src: "/logos/educational-institutions/axillium convent school.jpg",
                        alt: "Axillium Convent School",
                      },
                      {
                        src: "/logos/educational-institutions/gd goyenka.webp",
                        alt: "GD Goyenka",
                      },
                      {
                        src: "/logos/educational-institutions/nirmala convent school.png",
                        alt: "Nirmala Convent School",
                      },
                      {
                        src: "/logos/educational-institutions/siliguri boys high school.webp",
                        alt: "Siliguri Boys High School",
                      },
                      {
                        src: "/logos/educational-institutions/siliguri college.webp",
                        alt: "Siliguri College",
                      },
                      {
                        src: "/logos/educational-institutions/siliguri girls school.jpg",
                        alt: "Siliguri Girls School",
                      },
                      {
                        src: "/logos/educational-institutions/SIT.webp",
                        alt: "SIT",
                      },
                      {
                        src: "/logos/educational-institutions/st joseph school, matigara.png",
                        alt: "St Joseph School, Matigara",
                      },
                      {
                        src: "/logos/educational-institutions/surya sen college.webp",
                        alt: "Surya Sen College",
                      },
                    ],
                  },
                  {
                    id: "others",
                    title: "Concerts & Artists",
                    description:
                      "Live tour productions, stage activations and festival lighting.",
                    logos: [
                      {
                        src: "/logos/events/AR Rehman.jpg",
                        alt: "AR Rehman",
                      },
                      {
                        src: "/logos/events/arijit singh.jpg",
                        alt: "Arijit Singh",
                      },
                      {
                        src: "/logos/events/sonu nigam.jpg",
                        alt: "Sonu Nigam",
                      },
                      {
                        src: "/logos/events/Sun Pharma.webp",
                        alt: "Sun Pharma",
                      },
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={section.id}
                    className={`client-category client-category-${section.id}`}
                  >
                    <div className="client-category-header">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                    <div
                      className={`client-logo-track ${index === 0 ? "slide-right" : index % 2 === 1 ? "slide-left" : "slide-right"}`}
                    >
                      <div className="client-logo-track-inner">
                        {[...section.logos, ...section.logos].map(
                          (logo, logoIndex) => (
                            <div
                              key={`${section.id}-${logoIndex}`}
                              className="client-logo-bubble"
                            >
                              {typeof logo === "object" ? (
                                <img
                                  src={logo.src}
                                  alt={logo.alt || section.title}
                                  className="client-logo-image"
                                  loading="lazy"
                                  decoding="async"
                                />
                              ) : (
                                <div
                                  className="logo-placeholder"
                                  role="img"
                                  aria-label={logo}
                                  title={logo}
                                />
                              )}
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <a
          className="whatsapp-chat"
          href="https://wa.me/9474960506?text=Hello%20Event%20Team,%20I%20need%20help%20with%20an%20event%20project"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Chat
        </a>
      </div>
      <Footer />
    </div>
  </>
  );
}

export default App;
