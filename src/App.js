import { useRef } from "react"

import PortfolioIntro from "./components/PortfolioIntro"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollLine from "./components/common/ScrollLine"

function App() {

  const heroRef = useRef(null)

  const scrollToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (

    <div className="bg-slate-900">

      <PortfolioIntro scrollToHero={scrollToHero} />
      <ScrollLine />

      <div ref={heroRef}>
        <Hero />
      </div>

      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>

  )
}

export default App