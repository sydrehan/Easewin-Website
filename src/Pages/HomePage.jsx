// src/Pages/HomePage.jsx - The NEW, simplified version

// We ONLY import the sections that are unique to the homepage
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    // NO Navbar or Footer here! They are now in the Layout component.
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomePage;