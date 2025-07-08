// src/App.jsx - The FINAL router setup

import { Routes, Route } from 'react-router-dom';

// Import our new Layout and all the page components
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import GamesPage from './Pages/GamePage';
import BlogPage from './Pages/BlogPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ScrollToAnchor from './components/ScrollToAnchor'; 

function App() {
  return (
    <>
      <ScrollToAnchor /> {/* This component remains the same */}

      <Routes>
        {/*
          This is the key: The Layout component is the parent route.
          All the other routes are its children. They will be rendered
          inside the <Outlet /> of the Layout component.
        */}
        <Route path="/" element={<Layout />}>
          
          {/* Child Routes */}
          <Route index element={<HomePage />} /> {/* 'index' means this is the default for '/' */}
          <Route path="games" element={<GamesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;