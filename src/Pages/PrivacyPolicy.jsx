// src/pages/PrivacyPolicy.jsx

import { Gamepad2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable components for consistent styling
const SectionTitle = ({ number, title }) => (
  <h2 className="text-3xl font-bold font-display text-neon-cyan mt-12 mb-6 flex items-center gap-4">
    <span className="text-brand-purple">{number}.</span>
    <span>{title}</span>
  </h2>
);

const SubSection = ({ number, title }) => (
  <h3 className="text-xl font-bold font-display text-white mt-8 mb-4">{number} {title}</h3>
);

const ListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <ChevronRight className="text-brand-purple flex-shrink-0 mt-1" size={16} />
    <span>{children}</span>
  </li>
);

const PrivacyPolicy = () => {
  return (
    <div className="bg-dark-bg min-h-screen">
      <div className="container mx-auto px-6 py-20 text-light-gray">
        <div className="text-center mb-12">
          <div className='flex flex-col items-center text-center  pt-10 pb-5 border-white/10'>
            <img 
            src='/p.png'
            className='h-20 w-auto'
            />
          </div>
          <h1 className="text-5xl font-extrabold font-display text-white drop-shadow-[0_0_15px_#2de2e6]">Privacy Policy</h1>
          <p className="text-lg mt-4">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SectionTitle number="1" title="Introduction" />
          <p>EaseWin Gaming Pvt. Ltd. ("EaseWin Gaming," "we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By accessing or using our website and services, you agree to the collection and use of your information in accordance with this Privacy Policy.</p>
          
          <SectionTitle number="2" title="Information We Collect" />
          <SubSection number="2.1" title="Personal Information" />
          <p>When you register on our website, we may collect personal information that can be used to identify you, such as:</p>
          <ul className="list-none space-y-2 mt-4 pl-4">
            <ListItem>Name</ListItem>
            <ListItem>Email address</ListItem>
            <ListItem>Phone number</ListItem>
            <ListItem>Date of birth</ListItem>
          </ul>
          
          <SubSection number="2.2" title="Non-Personal Information" />
          <p>We may also collect non-personal information that cannot be used to identify you, such as:</p>
           <ul className="list-none space-y-2 mt-4 pl-4">
            <ListItem>Browser type & IP address</ListItem>
            <ListItem>Device information</ListItem>
            <ListItem>Pages visited and time spent on our website</ListItem>
          </ul>

          <SubSection number="2.3" title="Cookies" />
          <p>We use cookies and similar tracking technologies to track the activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          
          {/* Repeat this structure for all other sections... */}
          
          <SectionTitle number="3" title="How We Use Your Information" />
          {/* ... Add content for section 3 here */}
          
          <SectionTitle number="4" title="Sharing Your Information" />
          {/* ... Add content for section 4 here */}

          <SectionTitle number="5" title="Security of Your Information" />
          <p>We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          
          <SectionTitle number="6" title="Your Data Protection Rights" />
          <p>Depending on your location, you may have rights regarding your personal information, including the right to access, rectify, erase, restrict, object to processing, and data portability.</p>
          
          <SectionTitle number="7" title="Changes to This Privacy Policy" />
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
          
          <SectionTitle number="8" title="Contact Us" />
          <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:business@easewin.co" className="text-neon-cyan hover:underline">business@easewin.co</a></p>

          <div className="flex flex-col items-center text-center mt-20 pt-10 border-t border-white/10">
  <img
    src="/logo.png"
    alt="EaseWin Logo"
    className="h-20 w-auto"
  />
  <h3 className="font-display text-2xl text-white mt-4">EaseWin Gaming</h3>
  <p className="text-lg text-brand-purple-light mt-1">Where Gaming Dreams Come True</p>
</div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;