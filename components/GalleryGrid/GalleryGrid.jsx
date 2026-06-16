"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
   RiCloseLine, 
   RiArrowLeftSLine, 
   RiArrowRightSLine, 
   RiZoomInLine 
} from "react-icons/ri";
import { ALL_GALLERY_IMAGES } from "@/constants";
import "./GalleryGrid.css";

const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "rooms", label: "Rooms & Suites" },
  { id: "resort", label: "Resort Exterior" },
  { id: "nature", label: "Nature & Lawns" },
  { id: "dining", label: "Dining" },
  { id: "pool", label: "Swimming Pool" },
  { id: "safari", label: "Safari" }
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);


  const filteredImages = activeCategory === "all" 
    ? ALL_GALLERY_IMAGES 
    : ALL_GALLERY_IMAGES.filter(img => img.category === activeCategory);


  const closeLightbox = () => {
    setLightboxIndex(null);
  };


  const nextImage = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);


  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <div className="gallery-grid-wrapper">
      
      <div className="gallery-filter-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setLightboxIndex(null);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      
      <div className="gallery-masonry-grid">
        {filteredImages.map((image, index) => (
          <div 
            key={image.src} 
            className="gallery-grid-item"
            onClick={() => setLightboxIndex(index)}
          >
            <div className="gallery-grid-img-container">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={350}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                className="gallery-grid-img"
                loading={index < 3 ? undefined : "lazy"}
                priority={index < 3}
              />
              <div className="gallery-grid-hover-overlay">
                <span className="zoom-icon">
                  <RiZoomInLine />
                </span>
                <p className="hover-caption">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button 
            className="lightbox-close" 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <RiCloseLine />
          </button>

          <button 
            className="lightbox-nav prev" 
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <RiArrowLeftSLine />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 900px"
                className="lightbox-img"
                priority
              />
            </div>
            <div className="lightbox-caption">
              <span>{filteredImages[lightboxIndex].alt}</span>
              <span className="lightbox-counter">
                {lightboxIndex + 1} / {filteredImages.length}
              </span>
            </div>
          </div>

          <button 
            className="lightbox-nav next" 
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <RiArrowRightSLine />
          </button>
        </div>
      )}
    </div>
  );
}
