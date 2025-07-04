// src/pages/HomePage.jsx

// NOTE: You don't need to import Navbar or Footer here
import Hero from '../components/Hero';
import Features from '../components/Features';
import GamesPage from './GamePage';
import BlogPage from './BlogPage';   // We will remove these two soon
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import About from '../components/About';
const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* We will soon remove Games and Blog from the homepage */}
      
      <Features />
      <About/>
      <Testimonials />
      <CTA />
    </main>
  );
};

export default HomePage;