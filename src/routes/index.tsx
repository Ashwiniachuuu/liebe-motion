import { createFileRoute } from "@tanstack/react-router";
import { ScrollVideo } from "@/components/ScrollVideo";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection, OffersSection, AboutSection, ContactSection, FinalCTA } from "@/components/Sections";

const title = "LIEBE — Good Food. Good Mood.";
const description =
  "LIEBE is a premium burger house: flame-grilled patties, hand-cut fries and cold-pressed drinks, crafted fresh every day.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ScrollVideo />
      <Navbar />
      <Hero />
      <MenuSection />
      <OffersSection />
      <AboutSection />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}
