import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

export default function GitHubPreview() {

  const [hover, setHover] = useState(false)

  return (

    <motion.a
      href="https://github.com/Sriram-developer-creator"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center justify-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* ICON */}

      <FaGithub className="text-6xl text-white hover:text-cyan-400 transition" />

      {/* TOOLTIP */}

      {hover && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 bg-slate-800 border border-cyan-400 rounded-lg px-4 py-2 text-center shadow-lg whitespace-nowrap"
        >
          <p className="font-semibold text-white">GitHub</p>
          <p className="text-xs text-gray-400">
            github.com/Sriram-developer-creator
          </p>
        </motion.div>
      )}

    </motion.a>

  )

}