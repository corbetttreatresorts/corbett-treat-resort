"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "../Button";
import { NAV_LINKS, CONTACT_PHONES, RESORT_ADDRESS, CONTACT_EMAIL, BOOK_NOW_URL } from "@/constants";
import "./OverlayMenu.css";

/**
 * OverlayMenu — Full-screen navigation overlay
 *
 * Kya: Kai accessibility aur performance fixes kiye:
 *   1. `<img>` → next/image
 *   2. `.overlay-close` div → `<button>` semantic fix
 *   3. `aria-modal`, `role="dialog"` add kiya
 *   4. Escape key se close support add kiya
 *   5. NAV_LINKS constants se render — hardcoding khatam
 *   6. CONTACT_PHONES constants se phone numbers render
 * Benefit: Screen reader users, keyboard-only users ke liye proper navigation.
 */
export default function OverlayMenu({ isOpen, onClose }) {
  const [menuScrolled, setMenuScrolled] = useState(false);
  const overlayNavRef = useRef(null);
  const overlayMenuRef = useRef(null);

  // Sync menu-open body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("menu-open");
    } else {
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.documentElement.classList.remove("menu-open");
    };
  }, [isOpen]);

  // Escape key to close overlay — keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Hide scroll indicator when user scrolls
  const handleMenuScroll = () => {
    const menuScroll = overlayMenuRef.current?.scrollTop ?? 0;
    const navScroll = overlayNavRef.current?.scrollTop ?? 0;
    setMenuScrolled(menuScroll > 40 || navScroll > 40);
  };

  return (
    <div
      className={`overlay-menu ${isOpen ? "active" : ""}`}
      ref={overlayMenuRef}
      onScroll={handleMenuScroll}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      aria-hidden={!isOpen}
    >
      <div className="overlay-header">
        <Link
          href="/"
          className="overlay-logo"
          onClick={onClose}
          aria-label="Corbett Treat Resort — Go to homepage"
        >
          <Image
            src="/assets/images/resort-logo.png"
            alt="Corbett Treat Resort Logo"
            width={400}
            height={150}
            style={{ width: "auto", height: "auto" }}
            className="overlay-logo-img"
          />
        </Link>

        {/* Accessible close button */}
        <button
          type="button"
          className="overlay-close"
          id="overlay-close"
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div className="overlay-body">
        <nav
          className="overlay-nav"
          ref={overlayNavRef}
          onScroll={handleMenuScroll}
          aria-label="Main navigation"
        >
          <ul className="overlay-links">
            {NAV_LINKS.map((link) => (
              <li key={link.num}>
                <span className="link-num">{link.num}</span>
                <a href={link.href} onClick={onClose}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="overlay-info">
          <div className="overlay-info-block">
            <h4>Visit Us</h4>
            <p>{RESORT_ADDRESS}</p>
          </div>

          <div className="overlay-info-block">
            <h4>Reservations</h4>
            <p>
              {CONTACT_PHONES.map((phone, index) => (
                <span key={phone.href}>
                  <a href={phone.href}>{phone.label}</a>
                  {index < CONTACT_PHONES.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="overlay-info-block">
            <h4>Email Us</h4>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>

          <Button
            href={BOOK_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="overlay-cta"
            onClick={onClose}
            icon={<RiArrowRightLine />}
          >
            Book Your Stay
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`overlay-scroll-indicator ${menuScrolled ? "fade-out" : ""}`}
        id="overlay-scroll-indicator"
        aria-hidden="true"
      >
        <svg
          className="scroll-arrow"
          width="25"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}
