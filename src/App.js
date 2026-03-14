import { useEffect, useRef } from "react"

import PortfolioIntro from "./components/PortfolioIntro"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  const heroRef = useRef(null)

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (

    <div className="bg-slate-900">

      <PortfolioIntro scrollToHero={scrollToHero} />

      <div ref={heroRef}>
        <Hero />
      </div>

      <Skills />
      <Experience />
      <Projects />
      <Contact />

    </div>

  )
}

export default App