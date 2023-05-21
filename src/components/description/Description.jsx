import React, { useEffect } from "react";
import "./style.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
  useEffect(() => {
    let ctx3 = gsap.context(() => {
      const tl3 = gsap.timeline();
      tl3.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          scroller: "#main-container",
          start: "top top",
          end: "+=10000",
          scrub: 1,
          pin: true,
        },
      });
    });
    return () => ctx3.revert();
  }, []);

  useEffect(() => {
    let ctx4 = gsap.context(() => {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: ".description",
          scroller: "#main-container",
          start: "-10% top",
          end: "+=2500",
          scrub: 1,
        },
      });
      tl4.to(".back", {
        duration: 4,
        opacity: 0.2,
        fontSize: "20rem",
      })
      tl4.to('.description-box', {
        y: '-220%',
        duration: 8,
        scrollTrigger: {
          trigger: '.description',
          scroller: "#main-container",
          start: "top top",
          end: "+=8000",
          scrub: 1,
        }
      })
      tl4.to('.skills', {
        width: '100%',
        height: '100vh',
        duration: 4,
        zIndex: 20,
        scrollTrigger: {
          trigger: '.description',
          scroller: "#main-container",
          start: "+=50% bottom",
          end: "+=1000",
          scrub: 1,
        }
      })
      tl4.to('.skills__back-front', {
        width: '+=50%',
        scrollTrigger: {
          trigger: '.skill',
          scroller: "#main-container",
          start: "+=58% bottom",
          end: "+=1000",
          scrub: 1,
        }
      })
    })

    return () => ctx4.revert() ;
  }, []);

  return (
    <section className="description" data-scroll-section>
      <article className="box">
        <span className="back">ABOUT ME</span>
        <div className="description-box">
          <p className="description-p">
            My name is Néstor Gómez, and I am an individual deeply passionate
            about the development and creation of innovative solutions. Each
            day, I find motivation in solving complex logical problems and
            experiencing the gratification of providing effective solutions.
            With 2 year of experience as a formal front-end developer and 3 year
            as an empirical developer, I have cultivated a solid foundation in
            the field.
          </p>
          <p>
            My journey into software development began during my studies in
            graphic design, where I first encountered the world of software
            development. Overcoming various challenges along the way, I pursued
            further education in business administration. However, it became
            evident to me that my true calling was in development, as I
            consistently automated administrative processes using programs I
            created with VBA. Today, I proficiently utilize HTML, CSS,
            JavaScript, and React to continue my learning journey, consistently
            striving to deliver my best work.
          </p>
          <p>
            Currently, I am employed as a developer in the training department
            at Atento, where I contribute to the development of web pages for
            various campaigns, including Claro, Liberty, Facebook, Colpatria,
            Telefonica, and more. Through the automation of processes via web
            solutions, I aid in enhancing the efficiency of advisor management.
            Moving forward, I am eager to continue expanding my knowledge and
            skills in pursuit of excellence.
          </p>
        </div>
        <div className="skills">
            <div className="skills__back-front"></div>
        </div>
      </article>
    </section>
  );
};

export default Description;
