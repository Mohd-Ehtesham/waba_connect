import "./App.css";
import BrandSlider from "./components/BrandSlider";
import Comprehensive from "./components/Comprehensive";
import FAQList from "./components/FAQ/FAQlist";
import FeaturesContainer from "./components/Feature/FeaturesContainer";
import FeaturesSection from "./components/Feature/FeatureSection";
import Footer from "./components/Footer";
import GreenCTA from "./components/GreenCTA";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <BrandSlider />
      <Comprehensive />
      <FeaturesSection />
      <FeaturesContainer />
      <FAQList />
      <GreenCTA />
      <Footer />
    </>
  );
}
