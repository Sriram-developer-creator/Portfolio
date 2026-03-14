import { motion } from "framer-motion"
import { useState } from "react"

const sections = [
  { id: "hero", label: "Hero" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
]

export default function CircleNavigator({ activeIndex }) {

  const [open, setOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    })
    setOpen(false)
  }

  return (

    <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50">

      {/* Rotating circle */}

      <motion.div
        onClick={() => setOpen(!open)}
        animate={{ rotate: activeIndex * 60 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="sm:w-36 sm:h-36 w-24 h-24 rounded-full border border-cyan-400 flex items-center justify-center cursor-pointer bg-slate-900 text-white"
      >

        <span className="sm:text-2xl text-sm font-semibold">
          {sections[activeIndex]?.label}
        </span>

      </motion.div>

      {/* Expanded menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="mt-4 flex flex-col gap-2 bg-slate-900 p-4 rounded-xl shadow-lg"
        >

          {sections.map((section) => (

            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="sm:text-2xl text-xl hover:text-cyan-400 text-white"
            >
              {section.label}
            </button>

          ))}

        </motion.div>

      )}

    </div>

  )

}