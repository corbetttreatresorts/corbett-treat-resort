"use client";

import "./Gallery.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../../Button";
import { RiArrowRightLine, RiCameraLensLine } from "react-icons/ri";
import { GALLERY_IMAGES } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Gallery() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        itemsRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.4"
      );

      // Parallax effect on images
      itemsRef.current.forEach((item) => {
        const img = item.querySelector(".gallery-img");
        if (img) {
          gsap.fromTo(img,
            { scale: 1.15, yPercent: -10 },
            {
              scale: 1,
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery-section" id="gallery" ref={sectionRef}>
      <div className="gallery-container">
        
        
        <div className="gallery-header" ref={titleRef}>
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
            <div 
              className={`gallery-item span-${image.span}`} 
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
            >
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
