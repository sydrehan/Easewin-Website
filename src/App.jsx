// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import GamesPage from './Pages/GamePage';
import BlogPage from './Pages/BlogPage';
import ScrollToAnchor from './components/ScrollToAnchor'; // <-- IMPORTANT

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor /> {/* <-- IT MUST BE HERE */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;