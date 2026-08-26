import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Bookshelf from './components/Bookshelf';
import './styles.css';


function App() {
  return (
    <Router basename='/'>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
