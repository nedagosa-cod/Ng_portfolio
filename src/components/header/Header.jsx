import React from 'react'
import './style.css'
import cartoonMe from '../../img/headerMe.png'

const Header = () => {
  return (
    <header className='header' data-scroll-section>
        <article>
            <h1>Nestor David Gomez</h1>
            <h2>Frontend Developer</h2>
        </article>
        <section>
            <figure>
                <img src={cartoonMe} alt="Foto de perfil version cartoon" />
            </figure>
        </section>
    </header>
  )
}

export default Header
