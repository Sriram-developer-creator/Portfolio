import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import profile from "../assets/profile_pic.jpeg"
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import ContactModal from "./ContactModal"

import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"

export default function Hero() {

  const [open, setOpen] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const tech = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Redux",
    "React Native"
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (

    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden px-6">

      {/* PARTICLES BACKGROUND */}

      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            color: { value: "#22d3ee" },
            links: {
              enable: true,
              distance: 150,
              color: "#22d3ee",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1
            },
            size: { value: 2 },
            opacity: { value: 0.3 }
          }
        }}
      />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT SIDE */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left"
        >

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            Sriram S
          </motion.h1>

          <motion.div
            variants={item}
            className="text-lg sm:text-xl text-cyan-400 mb-3"
          >

            <TypeAnimation
              sequence={[
                "Senior Software Engineer",
                2000,
                "React / React Native Developer",
                2000,
                "Frontend Engineer",
                2000,
                "Full Stack Developer",
                2000
              ]}
              speed={50}
              repeat={Infinity}
            />

          </motion.div>

          <motion.p
            variants={item}
            className="text-gray-400 mb-4"
          >
            React • React Native • TypeScript • JavaScript
          </motion.p>

          <motion.p
            variants={item}
            className="text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Senior Software Engineer with 5+ years of experience building scalable web and mobile applications using React, React Native and Node.js.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start gap-4 items-center"
          >

            {/* CONTACT */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-400 transition"
            >
              <FaEnvelope /> Contact
            </motion.button>


            {/* LINKEDIN */}

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/sriram-selvaraj-28303b228/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
            >
              <FaLinkedin /> LinkedIn
            </motion.a>


            {/* RESUME */}

            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            >

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="/Sriram_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
              >
                <FaFileAlt /> Resume
              </motion.a>


              {/* RESUME PREVIEW */}

              {showPreview && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-full ml-4 top-0 w-72 backdrop-blur-lg bg-white/5 rounded-xl shadow-2xl border border-white/10 p-3 z-50"
                >

                  <p className="text-xs text-gray-400 mb-2">
                    Resume Preview
                  </p>

                  <iframe
                    src="/Sriram_S_Resume.pdf"
                    title="resume preview"
                    className="w-full h-44 rounded-md border border-slate-700"
                  />

                </motion.div>
              )}

            </div>

          </motion.div>

        </motion.div>


        {/* RIGHT SIDE IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* GLOW HALO */}

          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30"/>

          <motion.img
            src={profile}
            alt="profile"
            className="relative w-56 sm:w-64 md:w-72 lg:w-80 rounded-xl shadow-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />


          {/* FLOATING TECH TAGS */}

          {tech.map((t, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                delay: i * 0.3
              }}
              className="absolute bg-slate-800 border border-cyan-400 text-xs px-3 py-1 rounded-full shadow-lg"
              style={{
                top: `${15 + i * 10}%`,
                left: i % 2 ? "-30px" : "90%"
              }}
            >
              {t}
            </motion.div>
          ))}

        </motion.div>

      </div>


      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
        className="absolute bottom-10 text-gray-400 text-xl"
      >
        ↓
      </motion.div>

      <ContactModal open={open} setOpen={setOpen} />

    </section>
  )
}