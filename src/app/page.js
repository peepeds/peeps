import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import { StarsBackground } from "./components/ui/stars-background";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container px-12 py-4 mx-auto mt-24">
        <StarsBackground starDensity={0.00025} allStarsTwinkle='false' />
        <HeroSection />
        <AboutSection />
        
      </div>
    </main>
  );
}