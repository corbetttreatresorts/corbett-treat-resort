import "./Hero.css";
import Button from "../../Button";
import { BOOK_NOW_URL } from "@/constants";

export default function Hero() {
  return (
    <header className="hero">
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/images/hero-poster.png"
          preload="none"
        >
          {/* <source src="/assets/videos/hero-vieo.mp4" type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay" />
      </div>

      <div className="hero-bottom-content">
        <div className="main-text">
          <span className="hero-eyebrow">LUXURY IN THE WILD</span>
          <h1 className="hero-title">
            Wake Up To The Wild.
            <br />
            Stay Wrapped In Luxury.
          </h1>
          <p>
            Nestled beside Jim Corbett National Park, experience premium stays,
            immersive nature, curated adventures and unforgettable hospitality.
          </p>
        </div>
        <div className="hero-action">
          <Button
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="story-cta-btn"
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
