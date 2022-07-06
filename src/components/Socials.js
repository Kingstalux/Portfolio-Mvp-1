import React from 'react';
import { social } from '../data';

const Socials = () => (
  <ul className="flex space-x-6">
    {social.map((item) => (
      <li className="flex justify-center items-center text-accent" key={social.indexOf(item)}>
        <a href={item.href}>{item.icon}</a>
      </li>
    ))}
  </ul>
);

export default Socials;
