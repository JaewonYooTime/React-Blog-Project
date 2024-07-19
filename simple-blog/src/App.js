import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PostDetail from './components/PostDetail';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
