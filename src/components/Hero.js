import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaArrowCircleRight
} from "react-icons/fa"

import ContactModal from "./ContactModal"
import RecruiterQuickView from "./common/RecruiterQuickView"

const logs = [
  "Initializing frontend systems...",
  "Loading React runtime...",
  "Connecting to scalable architecture...",
  "Optimizing performance pipelines...",
  "Deploying high-quality UI components...",
  "System ready."
]

export default function Hero() {

  const [open, setOpen] = useState(false)
  const [recruiterView, setRecruiterView] = useState(false)
  const [visibleLogs, setVisibleLogs] = useState([])
  const [showPreview, setShowPreview] = useState(false)

  useEffect(() => {
    let index = 0
    let interval

    const startLogs = () => {
      interval = setInterval(() => {

        setVisibleLogs((prev) => {
          if (index < logs.length) {
            return [...prev, logs[index]]
          }
          return prev
        })

        index++

        // when finished → reset cleanly
        if (index > logs.length) {
          clearInterval(interval)

          setTimeout(() => {
            index = 0
            setVisibleLogs([])
            startLogs() // restart loop safely
          }, 1200)
        }

      }, 600)
    }

    startLogs()

    return () => clearInterval(interval)

  }, [])

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="max-w-3xl w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Sriram Selvaraj
          </h1>

          <p className="text-cyan-400 text-sm mt-2">
            status: active • role: Senior Software Engineer
          </p>
        </motion.div>

        {/* TERMINAL */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-xl p-6 font-mono text-sm h-[220px] overflow-hidden">

          {visibleLogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/70 mb-2"
            >
              <span className="text-cyan-400 mr-2">›</span>
              {log}
            </motion.div>
          ))}

        </div>

        {/* METRICS */}
        <div className="flex gap-6 mt-10 text-sm">

          <div>
            <p className="text-cyan-400 text-lg font-semibold">5+</p>
            <p className="text-white/50">Years</p>
          </div>

          <div>
            <p className="text-cyan-400 text-lg font-semibold">10+</p>
            <p className="text-white/50">Projects</p>
          </div>

          <div>
            <p className="text-cyan-400 text-lg font-semibold">50%</p>
            <p className="text-white/50">Productivity</p>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-10 flex-wrap items-center">

          <button
            onClick={() => setOpen(true)}
            className="px-5 py-2 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition"
          >
            <FaEnvelope className="inline mr-2" />
            Contact
          </button>

          <a
            href="https://www.linkedin.com/in/sriram-selvaraj-28303b228/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-white/20 rounded-md hover:bg-white/10 transition"
          >
            <FaLinkedin className="inline mr-2" />
            LinkedIn
          </a>

          {/* RESUME WITH PREVIEW */}
          <div
            className="relative"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
          >
            <a
              href={`${process.env.PUBLIC_URL}/Sriram_S_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white/20 rounded-md hover:bg-white/10 transition"
            >
              <FaFileAlt className="inline mr-2" />
              Resume
            </a>

            {showPreview && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute left-full ml-4 top-0 w-72 bg-black border border-white/10 rounded-lg p-2 shadow-xl"
              >
                <iframe
                  src={`${process.env.PUBLIC_URL}/Sriram_S_Resume.pdf`}
                  className="w-full h-40 rounded"
                  title="resume preview"
                />
              </motion.div>
            )}
          </div>

          <button
            onClick={() => setRecruiterView(true)}
            className="px-5 py-2 border border-purple-500 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition"
          >
            <FaArrowCircleRight className="inline mr-2" />
            Quick View
          </button>

        </div>

      </div>

      <ContactModal open={open} setOpen={setOpen} />
      <RecruiterQuickView open={recruiterView} setOpen={setRecruiterView} />

    </section>
  )
}