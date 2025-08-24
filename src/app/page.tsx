import Header from "@/components/header";
import ExploreSection from "@/components/sections/explore";
import HeroSection from "@/components/sections/hero";
import TrustedSection from "@/components/sections/trusted";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />
      <TrustedSection />
      <ExploreSection />
    </div>
  );
}
