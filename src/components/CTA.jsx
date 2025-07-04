// src/components/CTA.jsx

import { motion } from 'framer-motion';
import { User, Phone, Mail } from 'lucide-react';

const CTA = () => {
  // A simple handler to prevent page reload on form submission for this example
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would later integrate with a backend service to handle the form data
    console.log("Form submitted!");
  };

  return (
    // Increased vertical padding and set a minimum height to make the section larger
    <section id="cta" className="bg-card-bg py-20 px-6 min-h-[90vh] flex justify-center items-center">
      <motion.div 
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold font-display text-neon-cyan drop-shadow-[0_0_15px_#2de2e6]">
          Join The Arena
        </h2>
        
        <p className="mt-4 text-lg text-light-gray max-w-xl mx-auto">
          Spots are limited. Register now to secure your founder's badge and be first in line on launch day.
        </p>

        {/* This is the new, themed form container */}
        <div className="mt-12 mx-auto w-full max-w-lg bg-dark-bg p-8 rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* --- Name Input Field --- */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-light-gray">Full Name</label>
              <div className="relative w-full">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-light-gray" size={20} />
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="Your Handle" 
                  required
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 pl-10 text-white transition-all
                             focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan-dark"
                />
              </div>
            </div>

            {/* --- Email Input Field --- */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-light-gray">Email Address</label>
              <div className="relative w-full">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-light-gray" size={20} />
                <input 
                  type="email"
                  id="email" 
                  name="email"
                  placeholder="you@example.com" 
                  required
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 pl-10 text-white transition-all
                             focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan-dark"
                />
              </div>
            </div>

            {/* --- Phone Number Input Field --- */}
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-light-gray">Phone Number (Optional)</label>
              <div className="relative w-full">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-light-gray" size={20} />
                <input 
                  type="tel"
                  id="phone" 
                  name="phone"
                  placeholder="For event notifications" 
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 pl-10 text-white transition-all
                             focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan-dark"
                />
              </div>
            </div>
            
            {/* The primary action button */}
            <button 
              type="submit"
              className="w-full mt-4 bg-neon-cyan text-dark-bg font-bold font-display text-lg uppercase tracking-wider
                         py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-neon-cyan-glow"
            >
              Secure Your Spot
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;