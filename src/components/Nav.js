/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-scroll';
import { navigation } from '../data';

const Nav = () => (
  <nav>
    <ul className="flex space-x-8 capitalize text-[15px]">
      {navigation.map((item) => (
        <li className="text-white hover:text-accent cursor-pointer" key={navigation.indexOf(item)}>
          <Link
            to={item.href}
            activeClass="active"
            spy
            smooth
            duration={500}
            offset={-70}
            className="transition-all duration-300"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
