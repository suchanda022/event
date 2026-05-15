import { useEffect, useRef, useState } from "react";
import { services, serviceDetails } from "./data/servicesData";

function ServiceList({ onNavigate }) {
  return (
    <div className="service-list-grid">
      {services.map((service) => (
        <a
          key={service.id}
          className="service-list-card"
          href={`/services/${service.id}`}
          onClick={(event) => {
            event.preventDefault();
            onNavigate(`/services/${service.id}`);
          }}
        >
          <h3>{service.name}</h3>
          <p>{service.summary}</p>
        </a>
      ))}
    </div>
  );
}

function ServiceDetail({ serviceId, onNavigate }) {
  const service = serviceDetails[serviceId];
  const [selectedMediaId, setSelectedMediaId] = useState(
    service?.mediaCards?.[0]?.id || null,
  );
  const [viewerState, setViewerState] = useState({
    open: false,
    images: [],
    index: 0,
  });
  const touchStartXRef = useRef(null);

  useEffect(() => {
    setSelectedMediaId(service?.mediaCards?.[0]?.id || null);
  }, [serviceId]);

  const openViewer = (images, index) => {
    if (!images || !images.length) return;
    setViewerState({ open: true, images, index });
  };

  const closeViewer = () => {
    setViewerState({ open: false, images: [], index: 0 });
  };

  const showPrevImage = () => {
    setViewerState((prev) => ({
      ...prev,
      index:
        prev.images.length > 0
          ? (prev.index - 1 + prev.images.length) % prev.images.length
          : 0,
    }));
  };

  const showNextImage = () => {
    setViewerState((prev) => ({
      ...prev,
      index: prev.images.length > 0 ? (prev.index + 1) % prev.images.length : 0,
    }));
  };

  const handleTouchStart = (event) => {
    touchStartXRef.current = event.changedTouches?.[0]?.clientX;
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches?.[0]?.clientX;
    const startX = touchStartXRef.current;
    if (startX == null || touchEndX == null) return;
    const delta = touchEndX - startX;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        showNextImage();
      } else {
        showPrevImage();
      }
    }
    touchStartXRef.current = null;
  };

  if (!service) {
    return (
      <div className="service-detail-content">
        <p>Service not found. Please select a valid service from the list.</p>
        <button
          className="button primary"
          type="button"
          onClick={() => onNavigate("/services")}
        >
          View all services
        </button>
      </div>
    );
  }

  const scrollToCard = (mediaId) => {
    if (!mediaId) return;
    const target = document.getElementById(mediaId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFeatureClick = (mediaId) => {
    if (!mediaId) return;
    setSelectedMediaId(mediaId);
    setTimeout(() => scrollToCard(mediaId), 50);
  };

  return (
    <div className="service-detail-content">
      <button
        type="button"
        className="back-link"
        onClick={() => onNavigate("/services")}
      >
        ← Back to Services
      </button>
      <h2>{service.title}</h2>
      <p className="service-intro">{service.intro}</p>
      <p>{service.description}</p>

      <div className="service-detail-features">
        {service.bullets.map((bullet) => (
          <button
            key={bullet.mediaId || bullet.label}
            type="button"
            className={`feature-pill ${
              bullet.mediaId === selectedMediaId ? "active" : ""
            }`}
            onClick={() => handleFeatureClick(bullet.mediaId)}
          >
            {bullet.label}
          </button>
        ))}
      </div>

      <div className="service-detail-media">
        {service.mediaCards.map((card, index) => (
          <article
            key={card.id}
            id={card.id}
            className={`media-card ${
              card.id === selectedMediaId ? "selected-card" : ""
            }`}
            style={{ animationDelay: `${index * 0.16}s` }}
          >
            <div className="media-image-grid">
              {card.images && card.images.length > 0 ? (
                card.images.map((src, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="media-image-thumb"
                    onClick={() => openViewer(card.images, imageIndex)}
                  >
                    {src.endsWith(".mp4") ? (
                      <video
                        src={src}
                        controls
                        autoPlay
                        muted
                        loop
                        className="media-preview"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={card.alt || `${card.title} ${imageIndex + 1}`}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                  </div>
                ))
              ) : (
                <div className="media-placeholder">
                  <div>
                    <span className="placeholder-label">{card.title}</span>
                    <p>{card.subtitle}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="media-card-body">
              <h3>{card.title}</h3>
              <p className="media-subtitle">{card.subtitle}</p>
              <p>{card.caption}</p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="button primary"
        onClick={() => onNavigate("/#contact")}
      >
        Get a Quote
      </button>
      {viewerState.open && (
        <div
          className="image-viewer-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeViewer();
            if (event.key === "ArrowLeft") showPrevImage();
            if (event.key === "ArrowRight") showNextImage();
          }}
          tabIndex={-1}
        >
          <div className="image-viewer-card">
            <button
              type="button"
              className="image-viewer-close"
              onClick={closeViewer}
            >
              ×
            </button>
            <img
              src={viewerState.images[viewerState.index]}
              alt={`Preview ${viewerState.index + 1}`}
              className="image-viewer-image"
            />
            <div className="image-viewer-info">
              <span>
                {viewerState.index + 1} / {viewerState.images.length}
              </span>
              <span>Swipe or use arrows to navigate</span>
            </div>
            <div className="image-viewer-controls">
              <button
                type="button"
                className="image-viewer-button"
                onClick={showPrevImage}
              >
                ◀ Previous
              </button>
              <button
                type="button"
                className="image-viewer-button"
                onClick={showNextImage}
              >
                Next ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage({ route, onNavigate }) {
  const serviceId =
    route === "/services" ? null : route.replace("/services/", "");
  const currentPath = serviceId ? `/services/${serviceId}` : "/services";

  return (
    <section className="services-page" id="services-page">
      <div className="section-heading">
        <span>Our Services</span>
        <h2>
          {serviceId
            ? serviceDetails[serviceId]?.title || "Service Details"
            : "Everything your event needs in one place."}
        </h2>
      </div>
      {serviceId ? (
        <ServiceDetail serviceId={serviceId} onNavigate={onNavigate} />
      ) : (
        <ServiceList onNavigate={onNavigate} />
      )}
    </section>
  );
}
