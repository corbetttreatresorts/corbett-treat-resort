import "./Amenities.css";
import Image from "next/image";
import { RiPlantLine, RiArrowRightLine, RiMusic2Line } from "react-icons/ri";
import { FaUmbrellaBeach, FaFire, FaChild } from "react-icons/fa";
import { AMENITIES, BOOK_NOW_URL } from "@/constants";

/**
 * Icon resolver — data array mein JSX avoid karo, yahan resolve karo
 *
 * Kya: iconKey string se actual React icon component return karta hai.
 * Kyun: Data array mein JSX directly rakhna antipattern hai — data aur UI mix ho jaata hai.
 */
const ICON_MAP = {
  umbrella: <FaUmbrellaBeach />,
  fire: <FaFire />,
  child: <FaChild />,
  music: <RiMusic2Line />,
};

/**
 * Amenities Section — Static content, Server Component
 *
 * Kya: "use client" hataya — koi state/effect nahi tha.
 * Kyun: Server Component ke roop mein render hoga, faster initial load.
 * Fix: amenitiesData se JSX icons hatake constants + iconKey pattern use kiya.
 */
const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-container">
        {/* Header Section */}
        <div className="amenities-header">
          <span className="amenities-subtitle">DEDICATED TO YOUR COMFORT</span>

          <div className="amenities-divider">
            <span className="divider-line" />
            <span className="divider-icon">
              <RiPlantLine />
            </span>
            <span className="divider-line" />
          </div>

          <h2 className="amenities-title">World Class Amenities</h2>
          <span className="amenities-title-sub">
            TO ELEVATE YOUR STAY EXPERIENCE
          </span>

          <p className="amenities-description">
            From leisure to adventure, every amenity at Corbett Treat Resort is
            thoughtfully crafted to make your stay truly unforgettable.
          </p>
        </div>

        {/* Grid Section */}
        <div className="amenities-grid">
          {AMENITIES.map((amenity, index) => (
            <div className="amenity-card" key={amenity.id}>
              {/* Image Container */}
              <div className="amenity-image-wrapper">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="amenity-image"
                  priority={index === 0}
                />
                <div className="amenity-overlay" />

                {/* Floating Circle Icon */}
                <div className="amenity-icon-badge">
                  {ICON_MAP[amenity.iconKey]}
                </div>
              </div>

              {/* Content Box */}
              <div className="amenity-content">
                <h3 className="amenity-card-title">{amenity.title}</h3>
                <p className="amenity-card-desc">{amenity.description}</p>
                {/* <a
                  href={BOOK_NOW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amenity-learn-more"
                >
                  <span>LEARN MORE</span>
                  <RiArrowRightLine className="arrow-icon" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
