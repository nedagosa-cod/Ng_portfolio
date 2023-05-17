import React from 'react'
import logo from '../../img/logo.png'
import './style.scss'

export const NavBar = () => {
  return (
    <nav className='navbar' data-scroll-section>
      <span>{'<NG>'}</span>
      <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="About">About</a></li>
          <li><a href="Skills">Skills</a></li>
          <li><a href="Projects">Projects</a></li>
          <li><a href="Contact">Contact</a></li>
      </ul>
    </nav>
  )
}
