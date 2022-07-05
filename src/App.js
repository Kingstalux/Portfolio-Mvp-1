import React from 'react';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
