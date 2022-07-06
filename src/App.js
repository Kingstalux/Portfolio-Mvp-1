import React from 'react';
import About from './components/About';
import Contacts from './components/Contacts';
import Footers from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
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
  </div>
);

export default App;
