import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Hero} from "./components/MainSections";
import {StatsBar} from "./components/MainSections";
import {Features} from "./components/MainSections";
import {CTA} from "./components/MainSections";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}