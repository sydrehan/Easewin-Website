// src/Pages/GamePage.jsx

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GameCard from '../components/GameCard'; // We will create this next
import GameDetailModal from '../components/GameDetailModal'; // And this one too

// --- Sample Game Data ---
// You can replace this with your actual game information.
// Images should be placed in the `public` folder.
const gameData = [
  {
    id: 1,
    title: 'Alone: Survival Horror Escape',
    image: '/alone.jpg', // Using your image from /public/vita.jpeg
    tags: ['Action', 'Survival', 'Horror'],
    description: 'Step into the darkness with Alone: Survival Horror Escape—a terrifying mobile adventure where every shadow hides danger. Solve sinister puzzles and outwit relentless horrors to survive the night.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.easewin.alone&hl=en_IN'
  },
  {
    id: 2,
    title: 'Arachnid Assault',
    image: '/spider.png', // Using your image from /public/spider.png
    tags: ['RPG', 'Sci-Fi', 'Multiplayer'],
    description: 'In the abandoned halls of a top-secret lab, you are the experiment. Wield incredible arachnid powers to hunt, trap, and eliminate waves of armored soldiers. They came to study you; now, you are the predator.',
    playStoreUrl: 'https://play.google.com/store/apps'
  },
  {
    id: 3,
    title: 'Granny Monster',
    image: '/granny.webp', // Using a placeholder for a third game
    tags: ['Strategy', '4X', 'Horror'],
    description: 'Step into the chilling world of Granny Monster, a spine-tingling horror game where every corner hides a new terror! Trapped in Granny’s eerie mansion, you must escape within five days without making a sound. But beware—Granny hears everything!',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.EaseWinGaming.GrannyMonster&hl=en_IN'
  }
];


const GamesPage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <section className="bg-dark-bg py-20 px-6 min-h-screen">
      <div className="container mx-auto mt-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-brand-purple-light drop-shadow-[0_0_10px_#805ad5]">
            Explore Our Games
          </h2>
          <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">
            Each title is crafted with passion. Click on a game to learn more.
          </p>
        </motion.div>

        {/* --- The Responsive Game Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gameData.map(game => (
            <GameCard 
              key={game.id} 
              game={game} 
              onClick={() => setSelectedGame(game)} 
            />
          ))}
        </div>
      </div>

      {/* --- The Modal --- */}
      {/* AnimatePresence allows the modal to animate when it's removed from the DOM */}
      <AnimatePresence>
        {selectedGame && (
          <GameDetailModal 
            game={selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default GamesPage;