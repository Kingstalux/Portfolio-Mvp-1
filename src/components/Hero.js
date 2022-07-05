import React from 'react';
import Img from '../assets/img/banner.png';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey there, I'm Kingsely! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
            </p>

            <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-70}
              className="transition-all duration-300"
            >
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
            </Link>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={Img} alt='my_picture' />
          </div>
        </div>
      </div>
    </section>
  );
};
