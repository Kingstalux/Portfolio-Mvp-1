import React from 'react';
import { About } from './components/About';
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
      <Portfolio />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <div style={{height: '2000px'}}></div>
    </div>
  );
};

export default App;
