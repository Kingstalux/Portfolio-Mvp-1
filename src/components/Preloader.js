import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (<div id={`${animate ? 'preloader' : 'hide'}`} />);
};

export default Preloader;
