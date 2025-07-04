// src/components/Hero.jsx

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef(null);

  // Track scroll progress from top to bottom of Hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Instantly scale image from 1 to 1.2 based on scroll (no spring)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 overflow-hidden"
    >
      {/* --- Background Image (scroll-zoom effect) --- */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0 opacity-20 md:opacity-100 md:relative md:col-span-6 lg:col-span-7 h-full"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: [0, 0.4, 0.9], x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="relative h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/spider.png')" }}
        ></div>
      </motion.div>

      {/* --- Foreground Text Content --- */}
      <motion.div
        className="relative z-10 col-span-12 md:col-span-6 lg:col-span-5 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <div className="bg-dark-bg/40 backdrop-blur-sm p-8 rounded-xl">
          <h1
            className="text-5xl lg:text-7xl font-extrabold tracking-tight font-display text-white"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Level Up Your Gaming
          </h1>
          <p className="mt-6 text-xl text-light-gray">
            Easewin is the ultimate platform to connect, compete, and conquer.
            Find your squad, track your stats, and win more.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <a
              href="#cta"
              className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105 shadow-md shadow-brand-purple/20 hover:shadow-lg hover:shadow-brand-purple/40"
            >
              Get Early Access
            </a>
            <a
              href="#"
              className="group flex items-center gap-2 text-light-gray hover:text-white transition-colors"
            >
              <PlayCircle className="transition-transform group-hover:scale-110" />
              <span>Watch Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
