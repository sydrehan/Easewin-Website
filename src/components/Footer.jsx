// src/components/Footer.jsx

import { Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
// Reusable link components for clean code
const FooterLink = ({ href = '#', children }) => (
  <a href={href} className="text-light-gray hover:text-white transition-colors duration-200">
    {children}
  </a>
);

const SocialLink = ({ href = '#', icon: Icon }) => (
  <a 
    href={href} 
    className="text-light-gray transition-all duration-300
               hover:text-neon-cyan hover:scale-110"
  >
    <Icon size={40} />
  </a>
);

const Footer = () => {
  return (
    <footer 
      className="py-10 px-20 bg-dark-bg" // Use dark-bg for consistency, increased padding
      // Enhanced top glow for a more premium feel
      style={{
        boxShadow: '0 -6px 20px -5px rgba(45, 226, 230, 0.25)', 
      }}
    >
      <div className="container mx-auto">
        {/* Main Grid Layout - The form will be the last column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-center md:text-left">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Gamepad2 className="text-brand-purple" size={24} />
              <span className="text-xl font-bold font-display text-white">Easewin</span>
            </div>
            <p className="mt-4 text-light-gray max-w-xs">
              Empowering gamers everywhere through connection and competition.
            </p>
            <div className="flex gap-6 mt-6">
              <SocialLink href="https://twitter.com/your-handle" icon={Twitter} />
              <SocialLink href='https://www.instagram.com/easewin_gaming/' icon={Instagram} />
              <SocialLink href='https://in.linkedin.com/company/easewin-gaming-private-limited' icon={Linkedin} />
              <SocialLink href='https://www.youtube.com/channel/UCt8Tjnbk3N8Zh83z7JI375Q' icon={Youtube} />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-bold font-display text-lg text-white mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#features">Features</FooterLink></li>
              <li><FooterLink href="#testimonials">Testimonials</FooterLink></li>
              <li><FooterLink href="#cta">Register</FooterLink></li>
              <li>
  <Link to="/privacy-policy" className="text-light-gray hover:text-white transition-colors duration-200">
    Privacy Policy
  </Link>
</li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold font-display text-lg text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} className="text-brand-purple" />
                <FooterLink href="mailto:business@easewin.co">business@easewin.co</FooterLink>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-brand-purple" />
                <FooterLink href="tel:+917976860796">+91 79768 60796</FooterLink>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-light-gray">
                <MapPin size={16} className="text-brand-purple" />
                <span>Udaipur, Rajasthan 313001</span>
              </li>
            </ul>
          </div>

          {/* Column 4: NEW "Get in Touch" Feedback Form */}
          <div className="md:col-span-2 lg:col-span-1 ">
            <h3 className="font-bold font-display text-lg text-white mb-4 uppercase tracking-wider">Get in Touch</h3>
            <p className="text-light-gray mb-6">Have a question or feedback? We'd love to hear from you.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-card-bg border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-brand-purple" />
                <input type="text" placeholder="Last Name" className="w-full bg-card-bg border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-brand-purple" />
              </div>
              <input type="email" placeholder="Email Address" required className="w-full bg-card-bg border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-brand-purple" />
              <textarea placeholder="Leave us a message..." rows="4" className="w-full bg-card-bg border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-brand-purple resize-none"></textarea>
              <button 
                type="submit"
                className="w-full bg-neon-cyan text-dark-bg font-bold font-display text-base uppercase tracking-wider
                           py-2.5 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-neon-cyan-glow"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="mt-10 pt-5 border-t border-white/10 text-center text-sm text-light-gray">
          © {new Date().getFullYear()} Easewin Gaming Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;