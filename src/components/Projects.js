import React from 'react';
import { projectsData } from '../data';
import Project from './Project';

const Projects = () => (
  <div>

    <div className="mb-12 max-w-xl mx-auto" />

    <section className="grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
      {projectsData.map((item) => <Project item={item} key={item.id} />)}
    </section>
  </div>
);

export default Projects;
