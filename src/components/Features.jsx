// src/components/Features.jsx

import { motion } from 'framer-motion';
import { Users, BarChart, Trophy, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Users size={40} className="transition-colors duration-300" />,
    title: 'Find Your Perfect Squad',
    description: 'Our smart matchmaking connects you with like-minded players based on skill, playstyle, and communication.',
  },
  {
    icon: <BarChart size={40} className="transition-colors duration-300" />,
    title: 'Track Your Progress',
    description: 'Detailed stats and performance analytics help you identify strengths and weaknesses to improve your game.',
  },
  {
    icon: <Trophy size={40} className="transition-colors duration-300" />,
    title: 'Compete in Tournaments',
    description: 'Join exclusive tournaments and leagues for all skill levels. Compete for prizes and bragging rights.',
  },
  {
    icon: <ShieldCheck size={40} className="transition-colors duration-300" />,
    title: 'Non-Toxic Community',
    description: 'Advanced moderation and a reputation system ensure a positive and respectful gaming environment for everyone.',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 container mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold font-display text-center mb-4">Why Choose <span className="text-brand-purple">Easewin?</span></h2>
      <p className="text-lg text-light-gray text-center max-w-2xl mx-auto mb-16">
        Everything you need to enhance your competitive gaming experience, all in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          // Add 'group' to the parent motion.div
          <motion.div
            key={index}
            className="group bg-card-bg p-8 rounded-2xl border border-white/10 transition-all duration-300
                       relative overflow-hidden
                       hover:border-neon-cyan/50 hover:-translate-y-2"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* The Flicker Effect Element */}
            <div className="absolute inset-0 border-2 border-neon-cyan opacity-0 group-hover:animate-flicker-in rounded-2xl"></div>

            {/* Icon: The color will change when the parent 'group' is hovered */}
            <div className="relative z-10 text-brand-purple group-hover:text-neon-cyan">
              {feature.icon}
            </div>

            <div className="relative z-10">
              {/* Title: Color changes on group-hover */}
              <h3 className="text-xl font-bold mt-4 mb-2 text-white transition-colors duration-300 group-hover:text-neon-cyan">
                {feature.title}
              </h3>
              {/* Description: Remains the same */}
              <p className="text-light-gray">{feature.description}</p>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;