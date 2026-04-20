import { useState, useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const resumeRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (section) => {
    setActiveSection(section)
    const refs = {
      hero: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      experience: experienceRef,
      resume: resumeRef,
      contact: contactRef,
    }
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <div ref={heroRef}><Hero scrollToSection={scrollToSection} /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>      <div ref={resumeRef}><Resume /></div>      <div ref={contactRef}><Contact /></div>
    </div>
  )
}

export default App
