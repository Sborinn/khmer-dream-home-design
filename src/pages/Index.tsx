
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <ScrollReveal>
            <AboutSection />
          </ScrollReveal>
          <ScrollReveal>
            <ServicesSection />
          </ScrollReveal>
          <ScrollReveal>
            <PortfolioSection />
          </ScrollReveal>
          <ScrollReveal>
            <TestimonialsSection />
          </ScrollReveal>
          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
