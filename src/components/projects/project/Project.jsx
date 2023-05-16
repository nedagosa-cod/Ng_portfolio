import React from 'react'
import './style.scss'

const Project = ({src, title, build, description, updateActiveVideo, index}) => {
  return (
    <div className='gallery-item-wrapper' data-scroll-section>
        <div />
        <div className='gallery-item'>
            <div className="gallery-item-info">
                <h1 className='gallery-info-title'>{title}</h1>
                <p className='gallery-info-category'>{description}</p>
                <h4 className='gallery-info-subtitle'>{build}</h4>
            </div>
            <video className="gallery-item-video">
                <source src={src}/>
            </video>
        </div>
        <div/>
    </div>
  )
}

export default Project
