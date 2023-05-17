import React, { useEffect, useState } from 'react'
import './style.scss'
import cartoonMe from '../../img/headerMe.png'

import Marquee from 'react-fast-marquee'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

  const [scrolled, setScrolled] = useState('left')


  return (
    <header className='header' data-scroll-section>
        <article data-scroll data-scroll-speed="2">
            <h2>Welcome!</h2>
            <h3>I'm a Frontend Developer</h3>
            <p>I hope you enjoy the experience with my portfolio, I did my best to make it a different personal Web Site. <br />Follow me on my social media accounts.</p>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faGithub} />
            </div>
        </article>
        <section data-scroll data-scroll-speed="-2">
            <figure>
                <img src={cartoonMe} alt="Foto de perfil version cartoon" />
            </figure>
        </section>
        <Marquee 
          className='Marquee'
          direction={scrolled}
        ><h1>Néstor David Gómez -</h1></Marquee>
    </header>
  )
}

export default Header
