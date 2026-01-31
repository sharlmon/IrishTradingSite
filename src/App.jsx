
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
