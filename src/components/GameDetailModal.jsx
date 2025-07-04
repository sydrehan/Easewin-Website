// src/components/GameDetailModal.jsx

import { motion } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
  exit: { opacity: 0, scale: 0.8 },
};

const GameDetailModal = ({ game, onClose }) => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
    >
      <motion.div
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside it
        className="bg-card-bg w-full max-w-4xl max-h-[90vh] rounded-2xl border-2 border-neon-cyan/50 overflow-hidden flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-light-gray hover:text-white z-10">
          <X size={28} />
        </button>

        {/* Left Side: Game Image */}
        <div className="md:w-1/2">
          <img src={game.image} alt={game.title} className="w-full h-64 md:h-full object-cover" />
        </div>

        {/* Right Side: Game Details */}
        <div className="md:w-1/2 p-8 flex flex-col overflow-y-auto">
          <h2 className="text-4xl font-extrabold font-display text-white mb-2">{game.title}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {game.tags.map(tag => (
              <span key={tag} className="bg-brand-purple/50 text-brand-purple-light text-xs font-bold px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-light-gray text-base flex-grow">
            {game.description}
          </p>
          <a
            href={game.playStoreUrl}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer"
            className="mt-8 w-full flex items-center justify-center gap-3 bg-neon-cyan text-dark-bg font-bold font-display text-lg uppercase tracking-wider
                       py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-neon-cyan-glow"
          >
            <PlayCircle size={22} />
            Play Now on Google Play
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameDetailModal;