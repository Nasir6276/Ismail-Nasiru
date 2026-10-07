import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import BannerImageText from "@/components/BannerImageText";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <div className="main-content section-onepage">
        <AboutSection />
        <BannerImageText />
        <PortfolioSection />
        <TechStack />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
