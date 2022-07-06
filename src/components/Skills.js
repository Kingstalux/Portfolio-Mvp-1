import React from 'react';
import { skills } from '../data';

const Skills = () => (
  <section className="bg-tertiary py-12">
    <div className="container mx-auto">
      <div
        className="grid grid-cols-8 md:grid-flow-col"
      >
        {skills.map((skill) => (
          <div
            className="flex items-center justify-center"
            key={skills.indexOf(skill)}
          >
            <img className="lg:h-20" src={skill.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
