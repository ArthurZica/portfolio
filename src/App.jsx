import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import PhosphorGrid from './components/PhosphorGrid'

function App() {
  return (
    <div className="relative z-0 bg-bg-primary">
      <PhosphorGrid />
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
