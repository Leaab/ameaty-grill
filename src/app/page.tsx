import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { BookingForm } from "@/components/BookingForm";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <ExperienceSection />
        <ServicesSection />
        <EventsSection />
        <GallerySection />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
