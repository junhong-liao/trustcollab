import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import AnimatedFeaturesMarquee from "@/components/sections/animated-features-marquee";
import HowItWorksSection from "@/components/sections/how-it-works";
import FeatureGrid from "@/components/sections/feature-grid";
import Testimonials from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";
import Faq from "@/components/sections/faq";
import FinalCtaSection from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <Hero />
        <AnimatedFeaturesMarquee />
        <HowItWorksSection />
        <FeatureGrid />
        <Testimonials />
        <PricingSection />
        <Faq />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}