// Reklama.jsx
import React from "react";
import "./Reklama.css";

const ads = [
  {
    id: 1,
    title: "Boost your earnings!",
    subtitle: "Invite friends & get +5000 coins",
    gradient: "linear-gradient(135deg, #FFD700, #FF8C00)",
    emoji: "Rocket",
  },
  {
    id: 2,
    title: "Daily Combo Active!",
    subtitle: "Unlock secret cards today",
    gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    emoji: "Gem",
  },
  {
    id: 3,
    title: "New Event Started!",
    subtitle: "Play now → Win 1,000,000 coins",
    gradient: "linear-gradient(135deg, #9C27B0, #E91E63)",
    emoji: "Trophy",
  },
];

const Reklama = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Har 4 sekundda avto-aylanish
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ads.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reklama-carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {ads.map((ad) => (
          <div key={ad.id} className="reklama-slide">
            <div
              className="ad-card"
              style={{ background: ad.gradient }}
            >
              <div className="ad-emoji">{ad.emoji}</div>
              <h3>{ad.title}</h3>
              <p>{ad.subtitle}</p>
              <button className="ad-btn">Claim Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pastdagi nuqtalar (dots) */}
      <div className="carousel-dots">
        {ads.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Reklama;