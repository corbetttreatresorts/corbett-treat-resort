"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Story.css";
import Image from "next/image";
import {
  RiLeafLine,
  RiPlantLine,
  RiServiceBellLine,
  RiArrowRightLine,
} from "react-icons/ri";
import { BsBinoculars } from "react-icons/bs";
import Button from "../../Button";

const Story = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      // Left side: Gallery images fade & slide
      gsap.fromTo(
        ".story-main-image",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".story-gallery",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        [".nature-card", ".story-floating-image"],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".story-gallery",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right side: Content scroll reveal
      gsap.fromTo(
        [
          ".story-content .section-label",
          ".story-heading",
          ".story-divider",
          ".story-description p",
          ".story-action",
        ],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".story-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Feature cards stagger
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".story-features",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="our-story-section" id="our-story" ref={sectionRef}>
      <div className="story-container">
        <div className="our-story-wrapper">
          
          <div className="story-gallery">
            <div className="story-main-image">
              <Image
                src="/assets/images/cottage-exterior-dusk.jpeg"
                alt="Corbett Treat Resort - Cottage Exterior at Dusk"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            
            <div className="nature-card">
              <span className="nature-card-icon">
                <RiPlantLine />
              </span>
              <div className="nature-card-content">
                <h6>Nestled in Nature</h6>
                <p>Where luxury meets the untamed wild.</p>
              </div>
            </div>

            
            <div className="story-floating-image">
              <Image
                src="/assets/images/cottage-exterior-1.jpeg"
                alt="Resort Cottage Exterior"
                fill
                sizes="(max-width: 768px) 180px, 280px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          
          <div className="story-content">
            <span className="section-label">OUR STORY</span>

            <h2 className="story-heading">
              A Hidden Retreat Beside Jim Corbett National Park
            </h2>

            
            <div className="story-divider">
              <span className="divider-line" />
              <span className="divider-icon">
                <RiPlantLine />
              </span>
              <span className="divider-line" />
            </div>

            <div className="story-description">
              <p>
                Corbett Treat Resort, located in the serene Dhela Village and
                sharing a boundary with the renowned Corbett Tiger Reserve,
                offers 24 well-appointed rooms designed for pure comfort.
              </p>
              <p>
                Our resort provides an ideal escape for nature lovers, offering
                stunning opportunities for wildlife sightings and birdwatching
                right from the property. Wake up to the calls of the wild and
                immerse yourself in absolute tranquility.
              </p>
            </div>

            
            <div className="story-features">
              <div className="feature-card">
                <span className="feature-icon">
                  <RiLeafLine />
                </span>
                <h4>Enchanting Location</h4>
                <p>Surrounded by dense forests and natural beauty</p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">
                  <BsBinoculars />
                </span>
                <h4>Wildlife Experiences</h4>
                <p>Close encounters with nature and exotic wildlife</p>
              </div>

              <div className="feature-card">
                <span className="feature-icon">
                  <RiServiceBellLine />
                </span>
                <h4>Warm Hospitality</h4>
                <p>Thoughtful service that makes every stay memorable</p>
              </div>
            </div>

            
            <div className="story-action">
              <Button
                href="#explore"
                variant="primary"
                size="large"
                className="story-cta-btn"
                icon={<RiArrowRightLine />}
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
