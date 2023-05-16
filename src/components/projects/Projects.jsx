import React, { useState } from 'react'
import './style.scss'
import Project from './project/Project'

import memocard from '../../videos/memocard.mp4'
import portfolio from '../../videos/portoflio.mp4'

export const Projects = () => {
    const [activeVideo, setActiveVideo] = useState(1)
    let videos = [
        {
            title: 'Game Memorize Cards',
            build: ['React, JavaScript'],
            description: 'Card game created with React, using different hooks such as useEffect, useContext, useState, useRef.',
            src: memocard,
        },        {
            title: 'Second Portfolio',
            build: ['HTML5, CSS3, JavaScript'],
            description: 'My second portfolio where I had few projects to showcase, I used the ScrollReveal library.',
            src: portfolio,
        }
    ]
  return (
    <section className='section-wrapper gallery-wrap'>
        <div className='gallery'>
            <div className='gallery-counter'>
                <span>{activeVideo}</span>
                <span className='divider' />
                <span>{videos.length}</span>
            </div>
             {videos.map((videos, i) =>(
                <Project 
                    key={i}
                    index={i}
                    {...videos}
                    updateActiveVideo={i=>setActiveVideo(i+1)}
                />
             ))}
        </div>
    </section>
  )
}
