import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import './styles/index.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Hero />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/services" element={
          <PageTransition>
            <Services />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <Projects />
          </PageTransition>
        } />
        <Route path="/partners" element={
          <PageTransition>
            <Clients />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
