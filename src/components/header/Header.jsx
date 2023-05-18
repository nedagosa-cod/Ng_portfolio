import React, { useContext, useEffect, useRef, useState } from 'react'

import './style.scss'
import cartoonMe from '../../img/headerMe.png'

import Marquee from 'react-fast-marquee'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {

  const welcome = useRef()

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('#welcome', {
        duration: 1,
        opacity: 1,
        marginTop: 20
      });   
    });
    return () => ctx.revert();
  }, []);

  return (
    <header className='header' id='header-id' data-scroll-section>
        <article data-scroll data-scroll-speed="2" ref={welcome} id='welcome'>
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
        <div data-scroll>
          <Marquee
            className='Marquee'
            direction='left'
            data-scroll
          ><h1>Néstor David Gómez -</h1>
          </Marquee>
        </div>

    </header>
  )
}

export default Header
