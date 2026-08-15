import AboutHero from "../components/about/AboutHero";
import VisionSection from "../components/about/VisionSection";
import WhyChooseSection from "../components/about/WhyChooseSection";
import StatsSection from "../components/about/StatsSection";
import ManagementSection from "../components/about/ManagementSection";
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="flex-grow pt-24 pb-12">
      <AboutHero />
      <VisionSection />
      <WhyChooseSection />
      <StatsSection />
      <ManagementSection />
      <AboutCTA />
    </main>
  );
}