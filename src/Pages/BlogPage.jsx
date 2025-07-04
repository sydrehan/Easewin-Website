// src/Pages/BlogPage.jsx

import { motion } from 'framer-motion';
import BlogPostCard from '../components/BlogPostCard'; // Importing our new component

// --- Sample Blog Post Data ---
// You can update this with your real blog posts.
const blogData = [
  {
    id: 1,
    title: "Dev Diary #1: The Art of CyberClash",
    author: "Jane Doe, Lead Artist",
    date: "July 15, 2024",
    excerpt: "Take a deep dive into the visual identity of CyberClash 2088, from initial character sketches to the sprawling, neon-lit cityscapes of Neo-Kyoto.",
    href: "#", // In the future, this would be "/blog/dev-diary-1"
  },
  {
    id: 2,
    title: "Patch Notes v1.2.5: The Balance Update",
    author: "The Easewin Team",
    date: "July 10, 2024",
    excerpt: "We're deploying significant balance changes to agent abilities, tweaking weapon stats, and fixing a host of community-reported bugs. Get the full details here.",
    href: "#",
  },
  {
    id: 3,
    title: "Community Spotlight: Top Player Tactics in Arachnid Assault",
    author: "Chris Allen, Community Manager",
    date: "July 5, 2024",
    excerpt: "We analyzed the most effective strategies from our top-ranked players. Learn the meta and discover new ways to dominate your opponents in Arachnid Assault.",
    href: "#",
  },
  {
    id: 4,
    title: "Easewin Announces Partnership with Neon Esports League",
    author: "Easewin PR",
    date: "June 28, 2024",
    excerpt: "We are thrilled to announce our official partnership with the Neon Esports League, bringing our platform to a wider audience of competitive gamers.",
    href: "#",
  }
];

const BlogPage = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-card-bg min-h-screen">
      <div className="container mx-auto mt-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-neon-cyan drop-shadow-[0_0_15px_#2de2e6]">
            Latest News & Updates
          </h2>
          <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">
            Developer insights, patch notes, and community highlights from the Easewin team.
          </p>
        </motion.div>
        
        {/* --- The Responsive Blog Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogData.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;