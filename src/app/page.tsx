import Header from "@/components/header";
import ExploreSection from "@/components/sections/explore";
import HeroSection from "@/components/sections/hero";
import TrustedSection from "@/components/sections/trusted";
import Footer from "@/components/sections/footer";
import RevoCallSection from "@/components/sections/revo";
import ServiceSection from "@/components/sections/service";
import StatsSection from "@/components/sections/stats";
import IntegrationSection from "@/components/sections/integration";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />
      <TrustedSection />
      <ExploreSection />
      <RevoCallSection />
      <ServiceSection />
      <StatsSection />
      <IntegrationSection />
  
      <Footer />
    </div>
  );
}
