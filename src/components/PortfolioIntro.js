import { useEffect } from "react"
import { motion } from "framer-motion"
import { FaArrowDown } from "react-icons/fa"

export default function PortfolioIntro({ scrollToHero }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      scrollToHero()
    }, 2000)

    return () => clearTimeout(timer)

  }, [scrollToHero])


  return (

    <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">

      {/* ANIMATED GRADIENT BACKGROUND */}

      <div className="absolute inset-0">

        <motion.div
          animate={{ x:[-200,200,-200], y:[-100,100,-100] }}
          transition={{ duration:20, repeat:Infinity }}
          className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-[180px] opacity-20"
        />

        <motion.div
          animate={{ x:[200,-200,200], y:[100,-100,100] }}
          transition={{ duration:18, repeat:Infinity }}
          className="absolute right-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[180px] opacity-20"
        />

      </div>


      {/* INTRO CARD */}

      <motion.div

        initial={{ scale:0.6, opacity:0 }}
        animate={{ scale:1, opacity:1 }}
        transition={{ duration:1 }}

        className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-16 text-center shadow-2xl"

      >

        {/* TITLE */}

        <motion.h1
          initial={{ y:50, opacity:0 }}
          animate={{ y:0, opacity:1 }}
          transition={{ delay:0.5 }}
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          PORTFOLIO
        </motion.h1>


        {/* NAME REVEAL */}

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.5 }}
          className="mt-6 text-gray-300 text-xl"
        >
          Sriram Selvaraj
        </motion.p>

      </motion.div>


      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{ y:[0,15,0] }}
        transition={{ repeat:Infinity, duration:1.2 }}
        className="absolute bottom-16 text-gray-400 cursor-pointer"
        onClick={scrollToHero}
      >

        <FaArrowDown size={28}/>

      </motion.div>

    </section>

  )

}