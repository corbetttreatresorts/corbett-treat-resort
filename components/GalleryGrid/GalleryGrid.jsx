"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { 
   RiCloseLine, 
   RiArrowLeftSLine, 
   RiArrowRightSLine, 
   RiZoomInLine 
} from "react-icons/ri";
import { ALL_GALLERY_IMAGES } from "@/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./GalleryGrid.css";
import gsap from "gsap";

const CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "rooms", label: "ROOMS" },
  { id: "resort", label: "EXTERIORS" },
  { id: "nature", label: "NATURE" },
  { id: "dining", label: "DINING" },
  { id: "pool", label: "POOL" },
  { id: "safari", label: "SAFARI" }
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);
  
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const filteredImages = activeCategory === "all" 
    ? ALL_GALLERY_IMAGES 
    : ALL_GALLERY_IMAGES.filter(img => img.category === activeCategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".filter-btn", 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
      
      const validItems = itemsRef.current.filter(Boolean);
      if (validItems.length > 0) {
        gsap.fromTo(
          validItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      }
    }, containerRef);
    
    return () => ctx.revert();
  }, [mounted]);

  // Animation when category changes
  useEffect(() => {
    const validItems = itemsRef.current.filter(Boolean);
    if (validItems.length > 0) {
      gsap.fromTo(
        validItems,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", overwrite: true }
      );
    }
  }, [activeCategory, filteredImages.length]);


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
    setIsZoomed(false); // Reset zoom on image change
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handleMouseMove = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(prev => !prev);
    setZoomPos({ x: 50, y: 50 });
  };

  return (
    <div className="gallery-grid-wrapper" ref={containerRef}>
      
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

      
      {mounted ? (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 3, 992: 3, 1200: 4 }}
        >
          <Masonry gutter="0rem">
            {filteredImages.map((image, index) => (
              <div 
                key={image.src + activeCategory} 
                className="gallery-grid-item"
                ref={(el) => (itemsRef.current[index] = el)}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="gallery-grid-img-container">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={350}
                    style={{ width: "100%", height: "auto", display: "block" }}
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
          </Masonry>
        </ResponsiveMasonry>
      ) : (
        <div style={{ minHeight: "600px" }} />
      )}

      
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
            <div 
              className="lightbox-image-container"
              onMouseMove={handleMouseMove}
              onClick={toggleZoom}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 900px"
                className="lightbox-img"
                style={isZoomed ? {
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: "scale(2.2)",
                  cursor: "zoom-out"
                } : {
                  cursor: "zoom-in"
                }}
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
