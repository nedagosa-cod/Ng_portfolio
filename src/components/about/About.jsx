import React, { useEffect, useRef } from 'react'
import './styles.scss'

import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#aboutme',
          scroller: '#main-container',
          start: '+=70% bottom',
          end: '+=700',
          scrub: 1
        },
      });
      tl.to('.text.one', {
        x: 200,
        opacity: 0
      });
      tl.to('.text.two', {
          x: -200,
          opacity: 0
        })       
    });
    return () => ctx.revert();
  }, []);


  return (
    <section className='about' id='aboutme' data-scroll-section>
        <h1 className='text one'>THE NEXT</h1>
        <h1 className='text two'>SECTION IS</h1>
        <h1 className='text three'>ABOUT ME</h1>
    </section>
  )
}

export default About
