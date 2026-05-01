import { Layout } from "@/components/Layout";
import { AboutSection } from "@/components/sections/AboutSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <MenuSection />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <BookingSection />
    </Layout>
  );
}
