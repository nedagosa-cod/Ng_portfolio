import './App.css'
import { NavBar } from './components/navbar/NavBar'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import Contact from './components/contact/Contact'
import useLocoScroll from './components/hooks/useLocoScroll'


function App() {

  useLocoScroll()

  return (
    <>
      <div className='main-container' id='main-container' data-scroll-container>
        <NavBar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
