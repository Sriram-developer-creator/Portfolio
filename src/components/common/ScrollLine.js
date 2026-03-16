import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollLine() {

  const { scrollYProgress } = useScroll()

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (

    <div className="fixed left-6 top-0 h-full w-[2px] bg-slate-800 z-50">

      <motion.div
        style={{ scaleY }}
        className="origin-top h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"
      />

    </div>

  )

}