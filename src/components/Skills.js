import { motion } from "framer-motion"

import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiNextdotjs,
  SiChartdotjs,
  SiGit,
  SiNodedotjs,
  SiJest
} from "react-icons/si"

import { FaReact, FaCss3Alt } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"

const skills = [
  { name: "React", icon: <SiReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Chart.js", icon: <SiChartdotjs /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Jest", icon: <SiJest /> }
]

export default function Skills() {

  return (

    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>


        {/* GRID */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              whileHover={{
                scale: 1.15,
                rotate: 2
              }}

              transition={{ duration: 0.3 }}

              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-slate-800 border border-slate-700 shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/20 transition"
            >

              <div className="text-4xl text-cyan-400">
                {skill.icon}
              </div>

              <p className="text-sm text-gray-300">
                {skill.name}
              </p>

            </motion.div>

          ))}


          {/* MANY MORE / GROWING SKILLS */}

          <motion.div

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            whileHover={{
              scale: 1.15
            }}

            animate={{
              y: [0, -6, 0]
            }}

            transition={{
              duration: 2,
              repeat: Infinity
            }}

            className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400 shadow-xl"
          >

            <div className="text-4xl text-cyan-400">
              <GiBrain />
            </div>

            <p className="text-sm text-gray-300 text-center">
              Always Learning
            </p>

            <p className="text-xs text-gray-400 text-center">
              + Many More
            </p>

          </motion.div>

        </div>

      </div>

    </section>

  )

}