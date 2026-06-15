import ClientShell from "@/components/ClientShell";
import { Hero, Story, Amenities, Events, WhyChooseUs, Gallery, Contact, Footer } from "@/components";

/**
 * Home Page — Server Component (no "use client")
 *
 * Kya: page.jsx ab pure Server Component hai.
 * Kyun: Pehle "use client" tha sirf state ke liye — poora page client bundle
 *       mein chala jaata tha. Ab sirf ClientShell (Navbar, Preloader, Menu,
 *       FloatingContact) client-side hai.
 * Benefit:
 *   - Hero, Story, WhyChooseUs, Amenities, Events, Gallery, Contact, Footer — server-side render hote hain (faster FCP).
 *   - Bundle size significant taur par kam hota hai.
 *   - React Server Components ka full benefit milta hai.
 */
export default function Home() {
  return (
    <>
      {/* Client-side shell: Preloader + Navbar + OverlayMenu + FloatingContact */}
      <ClientShell />

      {/* Server-rendered sections */}
      <main>
        <Hero />
        <Story />
        <WhyChooseUs />
        <Amenities />
        <Events />
        <Gallery />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </>
  );
}
