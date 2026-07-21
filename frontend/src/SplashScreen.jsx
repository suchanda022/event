import { useEffect, useState } from "react";
import "./SplashScreen.css";

function SplashScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // After 2.5 seconds, start exit animation
    const timeout = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isExiting) {
      // After exit animation completes (1 second), call onComplete
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isExiting, onComplete]);

  return (
    <div className={`splash-screen ${isExiting ? "exit" : ""}`}>
      <div className="splash-content">
        <div className="splash-logo-container">
          <img
            src="logos/PKSSOLUTIONS.png"
            alt="PKS Solutions Logo"
            className="splash-logo"
          />
        </div>
        <div className="splash-text">
          <h2>Event Services</h2>
          <p>Premium event production and infrastructure</p>
        </div>
        <div className="splash-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
