import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faSass, faJs, faCss3Alt, faReact, faNpm, faPhp, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <section className='skills'>
        <h1>My Skills and Technologies</h1>
        <article className='icons'>
            <FontAwesomeIcon icon={faHtml5} className='FontAwesomeIcon'/>
            <FontAwesomeIcon icon={faJs} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faCss3Alt} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faSass} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faReact} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faNpm} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faPhp} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faPython} className='FontAwesomeIcon' />
            <FontAwesomeIcon icon={faNodeJs} className='FontAwesomeIcon' />
        </article>
    </section>
  )
}

export default Skills
