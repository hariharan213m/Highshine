import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IndustryGap from "./components/IndustryGap";
import StorySection from "./components/StorySection";
import GrowthJourney from "./components/GrowthJourney";
import ValuesSection from "./components/ValuesSection";
import LeadershipSection from "./components/LeadershipSection";
import GallerySection from "./components/GallerySection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* <AboutSection />   */}
      <IndustryGap />
      <StorySection />
      <ValuesSection />
      <GrowthJourney />
      <LeadershipSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
