import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreTechnologies from "@/components/CoreTechnologies";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonial from "@/components/Testimonial";
import LatestInsights from "@/components/LatestInsights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CoreTechnologies />
        <FeaturedProjects />
        {/* <Testimonial /> */}
        {/* <LatestInsights /> */}
      </main>
      <Footer />
    </>
  );
}
