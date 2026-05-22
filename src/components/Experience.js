import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll
} from "framer-motion"
import { useRef, useState } from "react"
import { experiences } from "./common/Constant"

function MagneticCard({ children }) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 150, damping: 12 })
  const springY = useSpring(y, { stiffness: 150, damping: 12 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.15
    const deltaY = (e.clientY - centerY) * 0.15

    x.set(deltaX)
    y.set(deltaY)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}

function ExperienceCard({ data, index, active, setActive }) {

  return (
    <MagneticCard>
      <motion.div
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(null)}

        className="relative p-[1px] rounded-2xl"
      >

        {/* GLOW BORDER */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-purple-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* GLASS CARD */}
        <motion.div
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
          animate={{
            scale: active === index ? 1.03 : 1,
            opacity: active === null || active === index ? 1 : 0.4
          }}
          transition={{ duration: 0.4 }}
        >

          <h3 className="text-2xl font-semibold">{data.role}</h3>
          <p className="text-white/60">{data.company}</p>
          <p className="text-white/40 text-sm mt-1">{data.duration}</p>

          <p className="text-white/40 mt-3 text-sm">{data.tech}</p>

          <motion.ul
            initial={false}
            animate={{
              opacity: active === index ? 1 : 0,
              height: active === index ? "auto" : 0
            }}
            className="overflow-hidden mt-4 space-y-2 text-white/70 text-sm"
          >
            {data.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </motion.ul>

        </motion.div>

      </motion.div>
    </MagneticCard>
  )
}

export default function Experience() {

  const [active, setActive] = useState(null)
  const ref = useRef(null)

  /* PARALLAX */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const yCards = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-32 overflow-hidden"
    >

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-[200px]"
      />

      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold mb-20 tracking-tight"
        >
          Experience
        </motion.h2>

        {/* PARALLAX CARD WRAPPER */}
        <motion.div
          style={{ y: yCards }}
          className="space-y-12"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              data={exp}
              index={i}
              active={active}
              setActive={setActive}
            />
          ))}
        </motion.div>

      </div>

    </section>
  )
}