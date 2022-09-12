import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import TestimonialSlider from "./components/TestimonialSlider";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
