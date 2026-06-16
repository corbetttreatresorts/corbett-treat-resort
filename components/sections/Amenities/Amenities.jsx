import "./Amenities.css";
import Image from "next/image";
import { RiPlantLine, RiArrowRightLine, RiMusic2Line } from "react-icons/ri";
import { FaUmbrellaBeach, FaFire, FaChild } from "react-icons/fa";
import { AMENITIES, BOOK_NOW_URL } from "@/constants";


const ICON_MAP = {
  umbrella: <FaUmbrellaBeach />,
  fire: <FaFire />,
  child: <FaChild />,
  music: <RiMusic2Line />,
};


const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <div className="amenities-container">
        
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

        
        <div className="amenities-grid">
          {AMENITIES.map((amenity, index) => (
            <div className="amenity-card" key={amenity.id}>
              
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

                
                <div className="amenity-icon-badge">
                  {ICON_MAP[amenity.iconKey]}
                </div>
              </div>

              
              <div className="amenity-content">
                <h3 className="amenity-card-title">{amenity.title}</h3>
                <p className="amenity-card-desc">{amenity.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
