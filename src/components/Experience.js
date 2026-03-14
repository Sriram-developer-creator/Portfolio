import { hover, motion } from "framer-motion"
import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

function ExperienceCard({ data }) {

  const [open, setOpen] = useState(false)
  const [hover, setHover] = useState(false)

  return (

    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}

      /* subtle breathing animation */
      animate={{ scale: [1, 1.01, 1] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}

      whileHover={{ scale: 1.03 }}

      className="bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 overflow-hidden"
    >

      {/* HEADER */}

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-lg md:text-xl font-semibold text-white">
            {data.role}
          </h3>

          <p className="text-cyan-400">
            {data.company}
          </p>

        </div>

        <span className="text-gray-400 text-sm">
          {data.duration}
        </span>

      </div>

      {/* TECH */}

      <p className="text-gray-400 text-sm mt-2">
        Tech: {data.tech}
      </p>

      {/* MOBILE INTERACTION */}

      <div
        onClick={() => setOpen(!open)}
        className="flex md:hidden items-center gap-2 text-cyan-400 text-sm mt-4 cursor-pointer"
      >

        Tap to view details

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >

          <FaChevronDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />

        </motion.div>

      </div>

      {/* DESCRIPTION */}

      <motion.ul
        initial={false}
        animate={{
          height: open || hover ? "auto" : 40
        }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden text-gray-300 text-sm space-y-2 mt-3"
      >

        {data.points.map((p, i) => (
          <li key={i}>– {p}</li>
        ))}

      </motion.ul>

    </motion.div>

  )
}

export default function Experience(){

  const experiences = [

    {
      role:"Senior Software Engineer (React / React Native / Full Stack)",
      company:"Mphasis",
      duration:"Jul 2025 – Present",
      tech:"React Native, TypeScript, Firebase Auth, Cloud Functions, SonarQube",
      points:[
        "Led development of scalable React Native features for the DELV digital platform.",
        "Implemented secure authentication using Firebase Auth and Cloud Functions.",
        "Integrated SonarQube to monitor code quality and technical debt.",
        "Introduced Cursor AI workflows improving development productivity by 50%.",
        "Designed modular component architecture improving development scalability."
      ]
    },

    {
      role:"Software Engineer (React / React Native / Full Stack)",
      company:"HST Global",
      duration:"Feb 2023 – Jul 2025",
      tech:"React, React Native, TypeScript, REST APIs, ARIA",
      points:[
        "Architected scalable React Native project structure.",
        "Developed telemedicine features including authentication and payment flows.",
        "Optimized component rendering and API integration improving performance."
      ]
    },

    {
      role:"Software Engineer",
      company:"Emproto Technologies",
      duration:"Jun 2021 – Feb 2023",
      tech:"React, TypeScript, GraphQL, Redux, Chart.js, Material UI",
      points:[
        "Built financial dashboards using React and Chart.js.",
        "Implemented GraphQL integrations and Redux state management.",
        "Developed reusable UI components for e-commerce platform.",
        "Integrated REST APIs for catalog and order workflows.",
        "Implemented secure checkout and payment systems."
      ]
    }

  ]

  return (

    <section id="experience" className="bg-slate-900 py-24 text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20">
          Experience
        </h2>

        <div className="relative">

          {/* TIMELINE LINE */}

          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-500 opacity-30"/>

          <div className="space-y-12">

            {experiences.map((exp,i)=>(

              <div key={i} className="relative pl-12">

                {/* DOT */}

                <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-cyan-500"/>

                <ExperienceCard data={exp}/>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )

}