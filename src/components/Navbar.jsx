// src/components/Navbar.jsx

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Menu, X } from 'lucide-react';

const menuVariants = { hidden: { opacity: 0, y: "-100%" }, visible: { opacity: 1, y: "0%", transition: { type: "tween", ease: "circOut", duration: 0.4 } }, exit: { opacity: 0, y: "-100%", transition: { type: "tween", ease: "circIn", duration: 0.4 } } };
const linkContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const linkItemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This hook ensures the menu closes when you navigate to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${ location.pathname !== '/' || scrolled || isMenuOpen ? 'bg-dark-bg/90 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent' }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo link using a standard <a> tag for the hard refresh you requested */}
          <a href="/" className="flex items-center gap-2">
           <a href="/" className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="Easewin Logo" 
    className="h-10 w-auto drop-shadow-[0_0_10px_#6b46c1]" 
  />
</a>
            <span className="font-display text-3xl tracking-wider text-gray-200" style={{ textShadow: '0 0 10px #6b46c1' }}>Easewin</span>
          </a>

          {/* === DESKTOP LINKS: Using standard, reliable <Link> component === */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/games" className="text-light-gray hover:text-white transition-all duration-200 hover:transform hover:-translate-y-0.5">Games</Link>
            <Link to="/blog" className="text-light-gray hover:text-white transition-all duration-200 hover:transform hover:-translate-y-0.5">Blog</Link>
            <Link to="/#features" className="text-light-gray hover:text-white transition-all duration-200 hover:transform hover:-translate-y-0.5">Features</Link>
            <Link to="/#about" className="text-light-gray hover:text-white transition-all duration-200 hover:transform hover:-translate-y-0.5">About</Link>
          </div>
          
          <Link to="/#cta" className="hidden md:block bg-brand-purple hover:bg-brand-purple-light text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-md shadow-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/40">
            Register Now
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
          </div>
        </div>
      </nav>

      {/* === MOBILE MENU: Also using standard, reliable <Link> component === */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 bg-dark-bg/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden">
            <motion.ul variants={linkContainerVariants} initial="hidden" animate="visible" className="text-center space-y-8">
              <motion.li variants={linkItemVariants}><Link to="/games" className="text-3xl font-display text-light-gray hover:text-white">Games</Link></motion.li>
              <motion.li variants={linkItemVariants}><Link to="/blog" className="text-3xl font-display text-light-gray hover:text-white">Blog</Link></motion.li>
              <motion.li variants={linkItemVariants}><Link to="/#features" className="text-3xl font-display text-light-gray hover:text-white">Features</Link></motion.li>
              <motion.li variants={linkItemVariants}><Link to="/#about" className="text-3xl font-display text-light-gray hover:text-white">About</Link></motion.li>
              <motion.li variants={linkItemVariants} className="pt-8">
                <Link to="/#cta" className="bg-neon-cyan hover:bg-neon-cyan-dark text-dark-bg font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-neon-cyan/30">
                  Register Now
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;