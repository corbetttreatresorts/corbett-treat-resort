import ClientShell from "@/components/ClientShell";
import {
  AboutHero,
  AboutIntro,
  AboutMission,
  AboutDedication,
  Footer,
} from "@/components";
import { notFound } from "next/navigation";

// Allowed slugs for Option B
const ALLOWED_SLUGS = ["our-story", "our-mission", "our-team"];

export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (!ALLOWED_SLUGS.includes(slug)) {
    return {};
  }

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | Corbett Treat Resort`,
    description: `Learn more about ${formattedTitle.toLowerCase()} at Corbett Treat Resort, Jim Corbett National Park.`,
  };
}

export default async function CustomSlugPage({ params }) {
  const { slug } = await params;

  // If the slug is not one of the allowed custom URLs, return 404
  if (!ALLOWED_SLUGS.includes(slug)) {
    notFound();
  }

  return (
    <>
      <ClientShell />

      <main
        className="about-page-main"
        style={{ backgroundColor: "#faf8f5", color: "#222222" }}
      >
        <AboutHero />

        {slug === "our-story" && <AboutIntro />}
        {slug === "our-mission" && <AboutMission />}
        {slug === "our-team" && <AboutDedication />}
      </main>

      <Footer />
    </>
  );
}
