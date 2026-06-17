import ClientShell from "@/components/ClientShell";
import { AboutHero, AboutIntro, AboutMission, AboutDedication, Footer } from "@/components";

export const metadata = {
  title: "About Us | Corbett Treat Resort",
  description: "Learn more about Corbett Treat Resort, our story, and our commitment to providing unforgettable wilderness adventures in Jim Corbett National Park.",
};

export default function AboutPage() {
  return (
    <>
      <ClientShell />

      <main className="about-page-main" style={{ backgroundColor: "#faf8f5", color: "#222222" }}>
        <AboutHero />
        <AboutIntro />
        <AboutMission />
        <AboutDedication />
      </main>

      <Footer />
    </>
  );
}
