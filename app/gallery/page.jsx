import ClientShell from "@/components/ClientShell";
import { GalleryGrid, Footer } from "@/components";
import "./gallery-page.css";

export const metadata = {
  title: "Photo Gallery | Corbett Treat Resort",
  description: "Browse beautiful photos of rooms, suites, swimming pool, dining and jungle safari at Corbett Treat Resort, Ramnagar.",
};

export default function GalleryPage() {
  return (
    <>
      <ClientShell />

      <main className="gallery-page-main">
        <section className="gallery-hero-header">
          <div className="gallery-hero-container">
            <span className="gallery-hero-subtitle">VISUAL JOURNEY</span>
            <h1 className="gallery-hero-title">Resort Gallery</h1>
            <p className="gallery-hero-desc">
              Explore the luxurious rooms, stunning pool, wild safaris, and beautiful nature of Corbett Treat Resort.
            </p>
          </div>
        </section>

        <section className="gallery-grid-section">
          <GalleryGrid />
        </section>
      </main>

      <Footer />
    </>
  );
}
