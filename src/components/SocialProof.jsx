// src/components/SocialProof.jsx

import { motion } from 'framer-motion';

// --- In-line SVG Logos for Simplicity and Quality ---

const ValorantLogo = () => (
  <svg width="100" height="30" viewBox="0 0 856.8 252.3" className="fill-current"><path d="M783,14.2l-36.9,46.1c1,25.9-4,50-14.8,70.9l-58.4,107c-4.4,8.1-13,12.7-22.1,12.7h-59.5c-9.1,0-17.6-4.6-22.1-12.7 l-58.3-107c-10.8-20.9-15.8-45-14.8-70.9L461.2,14.2c-2-2.5-4.8-4.2-7.8-4.2h-59c-3,0-5.8,1.6-7.8,4.2L349.7,60.2 c1,25.9-4,50-14.8,70.9L276.6,238c-4.4,8.1-13,12.7-22.1,12.7h-59.5c-9.1,0-17.6-4.6-22.1-12.7l-58.3-107 c-10.8-20.9-15.8-45-14.8-70.9L62.9,14.2c-2-2.5-4.8-4.2-7.8-4.2H-29c-5,0-8.9,4-8.9,8.9v59.8c0,5,4,8.9,8.9,8.9H5c2.3,0,4.4-0.9,6-2.5 l22,27.5L0,229.3c-2.4,5.9-0.1,12.8,5.7,15.3l52,21.5c5.9,2.4,12.8-0.1,15.3-5.7L181.8,25.2h59.2c1.4,0,2.8,0.3,4,0.8 l-27.1,51c-8.9,16.7-13,35-12.2,53.2L264,237.2h63.2l58.3-107c8-14.7,11.5-31.1,11-47.5L422,171l-25,31.2 c-1.5,1.9-2,4.5-1.1,6.8l20.4,49.5c2.3,5.6,8.6,8.1,14.2,5.7l50.8-21.9c5.6-2.3,8.1-8.6,5.7-14.2l-51.5-125c1.4,0.3,2.7,0.5,4,0.5 h59.2l108.8,234.1c2.4,5.9,10.2,8.6,15.3,5.7l52-21.5c5.9-2.4,8.2-9.5,5.7-15.3L671.2,50.7l22-27.5c1.6,1.6,3.7,2.5,6,2.5h33.9 c5,0,8.9-4,8.9-8.9V18.8c0-5-4-8.9-8.9-8.9H790.8C787.8,10,785,11.8,783,14.2z M820,10h27.9c5,0,8.9,4,8.9,8.9v224.5 c0,5-4,8.9-8.9,8.9H820c-5,0-8.9-4-8.9-8.9V18.8C811.1,14,815,10,820,10z"/></svg>
);

const ApexLogo = () => (
  <svg width="100" height="30" viewBox="0 0 65 74" className="fill-current"><path d="M0 58.75V15L32.5 0L65 15V58.75L32.5 73.75L0 58.75ZM6.5 18.25V55.5L32.5 69.5L58.5 55.5V18.25L32.5 4.25L6.5 18.25ZM20.75 35.75L27.25 32.5H37.75L44.25 35.75L32.5 47.75L20.75 35.75Z" /></svg>
);

const CsLogo = () => (
    <svg width="100" height="30" viewBox="0 0 248 71" className="fill-current"><g><path d="m89.65 65.08c-14.03 0-21.73-7.55-21.73-21.14v-23.01c0-13.73 7.7-20.84 21.73-20.84h19.89v10.99h-18.79c-8.05 0-9.45 4-9.45 9.7v23.6c0 5.7 1.4 9.7 9.45 9.7h18.79v10.99z"/><path d="m142.06 43.94h-16.12v-11.89h15.22v-10.99h-15.22v-8.85h17.22v-10.99h-28.21v53.7h29.31v-10.99h-17.22z"/><path d="m240.23 28.16v41.62h-11v-41.62c0-8.05-2.2-12.04-8.49-12.04-6.32 0-8.52 3.99-8.52 12.04v41.62h-11v-41.62c0-8.05-2.2-12.04-8.49-12.04-6.32 0-8.52 3.99-8.52 12.04v41.62h-11v-53.7h16.71c6.62 0 10.33 2.1 12.87 6.91 2.37-4.81 6.36-6.91 12.57-6.91h2.13c6.21 0 10.42 2.1 12.97 6.91 2.45-4.81 6.45-6.91 12.97-6.91h2.21v10.99c-2.81 0-4.71.7-5.51 2.1z"/><polygon points="21.15 70.08 0 54.38 31.91 35.04 0 15.7 21.15 0 63.59 29.53v11.02z"/><path d="m42.13 44.29c-8.99 0-14.71-3.69-14.71-11.02s5.72-11.01 14.71-11.01c8.99 0 14.7 3.69 14.7 11.01s-5.71 11.02-14.7 11.02zm0 10.99c15.71 0 25.71-8.5 25.71-22.01s-10-22.01-25.71-22.01-25.71 8.5-25.71 22.01 10 22.01 25.71 22.01z"/></g></svg>
);

const LeagueLogo = () => (
    <svg width="100" height="30" viewBox="0 0 24 24" className="fill-current"><path d="M12 0L2 3.86v7.43c0 6.13 4.28 11.23 10 12.71 5.72-1.48 10-6.58 10-12.71V3.86L12 0zm-2.12 17.5l-4.24-4.24 1.41-1.41 2.83 2.83 6.36-6.36L17.67 10l-7.79 7.79z"/></svg>
);

// Main Component
const SocialProof = () => {
  const logos = [
    { name: "Valorant", component: <ValorantLogo /> },
    { name: "Apex Legends", component: <ApexLogo /> },
    { name: "Counter-Strike", component: <CsLogo /> },
    { name: "League of Legends", component: <LeagueLogo /> }
  ];

  return (
    <motion.section 
      className="py-12 sm:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <p className="text-center font-display text-lg text-light-gray uppercase tracking-widest mb-8">
          Integrated With Your Favorite Games
        </p>
        <div className="flex justify-center items-center gap-x-8 md:gap-x-16 gap-y-4 flex-wrap">
          {logos.map((logo) => (
            <div 
              key={logo.name} 
              className="text-light-gray/60 hover:text-white transition-colors duration-300
                         transform hover:-translate-y-1"
              title={logo.name} // Adds a tooltip for accessibility
            >
              {logo.component}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialProof;