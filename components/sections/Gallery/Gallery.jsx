import "./Gallery.css";
import Image from "next/image";
import Button from "../../Button";
import { RiArrowRightLine, RiCameraLensLine } from "react-icons/ri";
import { GALLERY_IMAGES } from "@/constants";


export default function Gallery() {


  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        
        
        <div className="gallery-header">
          <span className="gallery-subtitle">VISUAL JOURNEY</span>
          <h2 className="gallery-title">Moments at Corbett Treat</h2>
          <div className="gallery-divider">
            <span className="divider-line" />
            <span className="divider-icon">
              <RiCameraLensLine />
            </span>
            <span className="divider-line" />
          </div>
          <p className="gallery-desc">
            A glimpse into the luxury, nature, and unforgettable experiences that await you.
          </p>
        </div>

        
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <div className={`gallery-item span-${image.span}`} key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="gallery-img"
              />
              
              <div className="gallery-overlay">
                <span className="gallery-img-caption">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="gallery-action">
          <Button
            href="/gallery"
            variant="primary"
            size="large"
            className="gallery-btn"
            icon={<RiArrowRightLine />}
          >
            See More
          </Button>
        </div>

      </div>
    </section>
  );
}
