// src/components/BlogPostCard.jsx

import { motion } from 'framer-motion';
import { User, Calendar, ArrowRight } from 'lucide-react';

const BlogPostCard = ({ post }) => {
  return (
    <motion.article
      className="bg-card-bg rounded-xl border border-white/10 p-6 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Post Metadata: Author & Date */}
      <div className="flex items-center text-sm text-light-gray mb-3 gap-6">
        <div className="flex items-center gap-2">
          <User size={16} className="text-brand-purple" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-brand-purple" />
          <span>{post.date}</span>
        </div>
      </div>
      
      {/* Post Title */}
      <h3 className="text-2xl font-bold font-display text-white mb-4 flex-grow">
        <a href={post.href} className="hover:text-neon-cyan transition-colors duration-200">
          {post.title}
        </a>
      </h3>
      
      {/* Post Excerpt */}
      <p className="text-light-gray mb-6">
        {post.excerpt}
      </p>

      {/* Read More Button */}
      <a 
        href={post.href}
        className="group mt-auto self-start flex items-center gap-2 text-neon-cyan font-bold"
      >
        <span>Read More</span>
        <ArrowRight 
          size={20} 
          className="transition-transform duration-200 group-hover:translate-x-1" 
        />
      </a>
    </motion.article>
  );
};

export default BlogPostCard;