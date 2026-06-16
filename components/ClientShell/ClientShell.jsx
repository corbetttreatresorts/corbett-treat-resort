"use client";

import { useState, useEffect } from "react";
import { Preloader, Navbar, OverlayMenu, FloatingContact } from "@/components";


export default function ClientShell() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setPreloaderActive(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader active={preloaderActive} />
      <Navbar onMenuOpen={() => setIsMenuOpen(true)} />
      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <FloatingContact />
    </>
  );
}
