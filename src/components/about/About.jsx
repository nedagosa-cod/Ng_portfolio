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
          start: '350px bottom',
          end: '+=700',
          scrub: 2
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
      tl.to('.text.three', {
        y: 180,
        scale: 1.5
      })        
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx2 = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.about__blender',
          scroller: '#main-container',
          start: '50% bottom',
          end: '150%',
          scrub: 2
        },
      });
      tl2.to('.about__blender', {
        x: '+=-82%'
      })      
    });
      return () => ctx2.revert();
  },[])


  return (
    <section className='about' id='aboutme' data-scroll-section>
        <div className='about__blender'>
          <div className='blends'></div>
          <div className='blends'></div>
          <div className='blends'></div>
        </div>
        <h1 className='text one'>THE NEXT</h1>
        <h1 className='text two'>SECTION IS</h1>
        <h1 className='text three'>ABOUT ME</h1>
    </section>
  )
}

export default About
