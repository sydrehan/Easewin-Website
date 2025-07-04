// src/components/About.jsx

import { motion } from 'framer-motion';

const About = () => {
  return (
    // This section is now a foreground layer that will scroll over the hero
    <section id="about" className="py-24 bg-dark-bg relative z-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="font-display text-lg uppercase text-brand-purple tracking-widest">
            About Easewin
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mt-2 text-neon-cyan drop-shadow-[0_0_8px_#2de2e680]">
            Empowering Gamers Everywhere
          </h2>
          <p className="mt-6 text-lg text-light-gray leading-relaxed">
            EaseWin is the ultimate platform for gamers, esports players, and streamers to earn money via audio/video calls. Our unique coin system allows users to seamlessly participate in various gaming events and tournaments.
          </p>
          <p className="mt-4 text-lg text-light-gray leading-relaxed">
            EaseWin is also a leader in designing bespoke, custom gaming room interiors to create your ultimate battlestation.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-96"
        >
          <img 
            src="https://images.pexels.com/photos/7915243/pexels-photo-7915243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Custom gaming room setup"
            className="w-full h-full object-cover rounded-xl shadow-2xl shadow-neon-cyan/10 border-2 border-neon-cyan/20"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;