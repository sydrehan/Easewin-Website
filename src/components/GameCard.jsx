// src/components/GameCard.jsx

import { motion } from 'framer-motion';

const GameCard = ({ game, onClick }) => {
  return (
    <motion.div
      layoutId={`game-card-${game.id}`} // For potential advanced animations later
      onClick={onClick}
      className="bg-card-bg rounded-2xl overflow-hidden cursor-pointer group"
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <img src={game.image} alt={game.title} className="w-full h-56 object-cover" />
        {/* Neon Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-all opacity-100 group-hover:from-black/90 group-hover:via-transparent"></div>
        <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-neon-cyan transition-all duration-300 rounded-2xl"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold font-display text-white mb-2">{game.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {game.tags.map(tag => (
            <span key={tag} className="bg-brand-purple/50 text-brand-purple-light text-xs font-bold px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-light-gray text-sm line-clamp-3">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
};

export default GameCard;