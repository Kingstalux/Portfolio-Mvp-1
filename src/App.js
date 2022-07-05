import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <div style={{height: '2000px'}}></div>
    </div>
  );
};

export default App;
