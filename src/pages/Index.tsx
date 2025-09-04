import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { WhySection } from "@/components/why-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <Footer />
    </div>
  );
};

export default Index;
