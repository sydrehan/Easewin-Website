// src/components/AIAssistant.jsx

import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const AIAssistant = () => {
  return (
    <motion.button
      // Animate its initial appearance
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }} // Delays so it appears after page load
      className="fixed bottom-6 right-6 z-50
                 group // For hover effects on children
                 w-16 h-16 
                 flex items-center justify-center 
                 rounded-full
                 bg-gradient-to-br from-dark-bg via-brand-purple to-dark-bg
                 border-2 border-brand-purple-light/50
                 animate-pulse-glow"
      aria-label="Open AI Assistant"
    >
      {/* Icon with its own hover animation */}
      <Bot
        className="h-8 w-8 text-neon-cyan
                   transition-all duration-300
                   group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_#2de2e6]"
      />
      
      {/* Tooltip that appears on hover */}
      <div className="absolute -top-12 right-0 
                    px-3 py-1.5 
                    bg-dark-bg border border-white/10 rounded-md
                    text-sm text-light-gray
                    opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-300 origin-bottom-right
                    whitespace-nowrap"
      >
        AI Assistant
      </div>
    </motion.button>
  );
};

export default AIAssistant;