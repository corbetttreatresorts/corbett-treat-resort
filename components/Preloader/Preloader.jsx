"use client";

import Image from "next/image";
import "./Preloader.css";

/**
 * Preloader — Full-screen loading overlay
 *
 * Kya: `<img>` → `next/image` fix kiya.
 * Kyun: next/image automatic image optimization karta hai.
 * Note: `priority` zaroor diya kyunki yeh initially visible hota hai.
 */
export default function Preloader({ active }) {
  return (
    <div
      className={`preloader ${!active ? "fade-out" : ""}`}
      role="status"
      aria-label="Loading Corbett Treat Resort"
      aria-live="polite"
    >
      <Image
        src="/assets/images/resort-logo.png"
        alt="Corbett Treat Resort"
        width={400}
        height={150}
        priority
        style={{ width: "auto", height: "auto" }}
        className="preloader-logo"
      />
      <div className="loader-line" aria-hidden="true" />
    </div>
  );
}
