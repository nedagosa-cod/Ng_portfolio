import './App.css'
import { NavBar } from './components/navbar/NavBar'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import Contact from './components/contact/Contact'
import useLocoScroll from './components/hooks/useLocoScroll'

import ContextCompo from './context/useVariables'
import Description from './components/description/Description'


function App() {

  useLocoScroll(true)

  return (
    <ContextCompo>
      <div className='main-container' id='main-container' data-scroll-container style={{position:'relative'}}>
        <NavBar />
        <Header />
        <About />
        <Description />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ContextCompo>
  )
}

export default App
