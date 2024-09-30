import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container px-12 py-4 mx-auto mt-24">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}