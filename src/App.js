import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <div style={{height: '2000px'}}></div>
    </div>
  );
};

export default App;
