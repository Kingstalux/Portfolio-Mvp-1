import React from 'react';
import './app.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footers from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Preloader from './components/Preloader';
import Services from './components/Services';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

const App = () => (
  <div className="bg-white relative">
    <Header />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Services />
    <Testimonials />
    <Contacts />
    <Footers />
    <Preloader />
  </div>
);

export default App;
