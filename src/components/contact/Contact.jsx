import React from 'react'
import './styles.scss'

const Contact = () => {
  return (
    <section className='Contact' data-scroll-section>
        <h1>Contact Me</h1>
        <form>
            <input type="text" placeholder='Nombre'/>
            <input type="email" placeholder='Correo'/>
            <textarea name="descripcion" id="" cols="30" rows="10"></textarea>
        </form>
    </section>
  )
}

export default Contact
