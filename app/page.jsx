import ClientShell from "@/components/ClientShell";
import { Hero, Story, Amenities, Events, WhyChooseUs, Gallery, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <ClientShell />

      <main>
        <Hero />
        <Story />
        <WhyChooseUs />
        <Amenities />
        <Events />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
