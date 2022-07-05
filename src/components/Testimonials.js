import React from 'react';
import {TestiSlider} from './TestiSlider';

export const Testimonials = () => {

  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            What other people say
          </h2>
          <p className='subtitle'>
            Here are some of the recommendations I was given me on Linkedin.
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

