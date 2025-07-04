// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* The Outlet will render either HomePage, GamesPage, or BlogPage */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;