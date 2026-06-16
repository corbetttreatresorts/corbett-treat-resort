"use client";

import { useState, useEffect, useRef } from "react";
import { RiWhatsappLine, RiPhoneLine } from "react-icons/ri";
import { CONTACT_PHONES, WHATSAPP } from "@/constants";
import "./FloatingContact.css";


const FloatingContact = () => {
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);


  const whatsappUrl = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.presetMessage)}`;


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCallDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsScrolled(scrolled);
      if (!scrolled) setShowCallDropdown(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-contact-container ${isScrolled ? "visible" : ""}`}
      ref={dropdownRef}
    >
      
      {showCallDropdown && (
        <div className="call-dropdown-menu" role="menu">
          {CONTACT_PHONES.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="dropdown-item"
              role="menuitem"
              onClick={() => setShowCallDropdown(false)}
            >
              <RiPhoneLine className="dropdown-icon" aria-hidden="true" />
              <span>{phone.label}</span>
            </a>
          ))}
        </div>
      )}

      
      <button
        onClick={() => setShowCallDropdown(!showCallDropdown)}
        className={`floating-btn floating-call-btn ${showCallDropdown ? "active" : ""}`}
        aria-label="Call Reservations"
        aria-expanded={showCallDropdown}
        aria-haspopup="menu"
        title="Call Reservations"
      >
        <RiPhoneLine aria-hidden="true" />
      </button>

      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-wa-btn"
        aria-label="Message on WhatsApp"
        title="Message on WhatsApp"
      >
        <RiWhatsappLine aria-hidden="true" />
        <span className="pulse-glow" aria-hidden="true" />
      </a>
    </div>
  );
};

export default FloatingContact;
