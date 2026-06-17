"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhyChooseUs.css";
import Image from "next/image";
import { WHY_CHOOSE_US_STATS } from "@/constants";

const parseStat = (val) => {
  const match = val.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: val, decimals: 0 };
  const numStr = match[1];
  const suffix = match[2];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { num: parseFloat(numStr), suffix, decimals };
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      // Top Grid reveal
      gsap.fromTo(
        [".wcu-subtitle", ".wcu-divider-line", ".wcu-heading", ".wcu-description"],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".wcu-content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".wcu-image-wrapper",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".wcu-image-wrapper",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stats Count Up
      const statItems = gsap.utils.toArray(".wcu-stat-item");
      statItems.forEach((item) => {
        const valEl = item.querySelector(".stat-value");
        if (!valEl) return;
        const rawVal = valEl.getAttribute("data-value");
        const { num, suffix, decimals } = parseStat(rawVal);
        
        const obj = { val: 0 };
        gsap.fromTo(
          item,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onStart: () => {
              gsap.to(obj, {
                val: num,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                  valEl.textContent = obj.val.toFixed(decimals) + suffix;
                },
              });
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why-choose-us-section" id="why-choose-us" ref={sectionRef}>
      <div className="wcu-container">
        
        <div className="wcu-top-grid">
          
          <div className="wcu-content">
            <div className="wcu-header">
              <span className="wcu-subtitle">WHY CHOOSE CORBETT TREAT RESORT</span>
              <span className="wcu-divider-line" />
            </div>

            <h2 className="wcu-heading">
              We&apos;re Dedicated To Providing You Unforgettable Experience. Whether You&apos;re Here For Business Or Leisure
            </h2>

            <p className="wcu-description">
              At Corbett Treat Resort, we believe your stay should be much more than just accommodation — it should be an experience. From our warm hospitality and thoughtfully designed rooms to our serene location surrounded by nature, every moment here is crafted with care.
            </p>
          </div>

          
          <div className="wcu-image-wrapper">
            <Image
              src="/assets/images/yellow-building-exterior.jpeg"
              alt="Corbett Treat Resort Bedroom Suite"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              className="wcu-image"
            />
            
            <div className="wcu-corner-accent top-left" />
            <div className="wcu-corner-accent bottom-right" />
          </div>
        </div>

        
        <div className="wcu-stats-grid">
          {WHY_CHOOSE_US_STATS.map((stat, index) => (
            <div className="wcu-stat-item" key={index}>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value" data-value={stat.value}>{stat.value}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
