import React from 'react';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contacts />
      <div style={{height: '2000px'}}></div>
    </div>
  );
};

export default App;
