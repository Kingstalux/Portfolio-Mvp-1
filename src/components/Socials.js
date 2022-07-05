import React from 'react'
import { social } from '../data'

export const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return <li className="flex justify-center items-center text-accent" key={index}>
          <a href={item.href}>{item.icon}</a>
        </li>
      })}
    </ul>
  )
}
