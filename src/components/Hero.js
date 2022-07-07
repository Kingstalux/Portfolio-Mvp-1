/* eslint-disable import/no-extraneous-dependencies */

import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent text-md mb-[22px]" data-aos="zoom-in" data-aos-delay="1300">
              Hey there, I&apos;m Kingsely! 👋
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="2500">
              I Build & Design
              {' '}
              <br />
              {' '}
              Web Interfaces.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="2500">
              I can help you build a product, feature or website.
              Look through some of my work and experience! If you like what you see and
              have a project you need coded, don&apos;t hesitate to contact me.
            </p>

            <Link
              to="contact"
              activeClass="active"
              spy
              smooth
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              <button type="button" className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all">
                Work with me
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
