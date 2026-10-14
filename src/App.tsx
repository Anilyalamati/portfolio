import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white select-none">
      {/* Background Video with horizontal mouse scrub */}
      <BackgroundVideo />

      {/* Fixed Navbar with desktop links and mobile hamburger overlay */}
      <Navbar />

      {/* Hero section with blurred intro, typewriter text, and animated action pills */}
      <HeroSection />
    </div>
  );
}
