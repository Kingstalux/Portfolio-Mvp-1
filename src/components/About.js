/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-scroll';
import Image from '../assets/img/king.jpg';

const About = () => (
  <section className="section bg-secondary" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-24">
        <img
          className="object-cover h-full w-[566px] md:mx-auto lg:mx-0
          rounded-2xl"
          src={Image}
          alt="my_picture"
        />
        <div className="flex flex-col items-center text-center
        lg:items-start lg:text-left"
        >
          <div
            className="flex flex-col"
          >
            <h2
              className="text-3xl lg:text-4xl font-medium lg:font-extrabold
             mb-3 before:content-about relative before:absolute
             before:opacity-40 before:-top-[2rem]
             before:hidden before:lg:block"
            >
              Ngu Kingsely Jr.
            </h2>
            <p className="mb-4 text-accent">
              Full Stack Web Developer
            </p>
            <hr className="mb-8 opacity-5" />
            <p className="mb-8">
              A multi-skilled full-stack developer with hands-on experience in developing,
              and cofounding tech startups by bringing together the vision, strategy,
              and execution in a totally unstructured and resource-constrained environment.
              {' '}
              <br />
              <br />
              Passionate about ideating, conceptualizing, and producing consumer-centric
              as well as B2B technology and technology-enabled products from level zero.
              Open for exploring exciting full-stack development opportunities in startups
              as well as companies with scale.
            </p>
          </div>
          <Link
            to="contact"
            activeClass="active"
            spy
            smooth
            duration={500}
            offset={-70}
            className="transition-all duration-300"
          >
            <button
              type="button"
              className="btn btn-md bg-accent hover:bg-secondary-hover
            transition-all"
            >

              Contact me
            </button>

          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default About;
