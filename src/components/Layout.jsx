// src/components/Layout.jsx

import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // This is the magic component from React Router

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* The <main> tag wraps the changing content of each page */}
      <main className="flex-grow">
        {/* <Outlet> is a placeholder where React Router will render
            your page components (HomePage, GamesPage, etc.) */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;