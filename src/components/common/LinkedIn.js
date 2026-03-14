import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedinIn } from "react-icons/fa"

export default function LinkedInPreview(){

  const [hover,setHover] = useState(false)

  return (

    <div
      className="relative flex flex-col items-center p-6 cursor-pointer"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >

      {/* Icon */}

      <motion.a
        href="https://www.linkedin.com/in/sriram-selvaraj-28303b228/"
        target="_blank"
        whileHover={{ scale:1.2 }}
      >

        <div className="bg-[#0A66C2] p-4 rounded">
          <FaLinkedinIn className="text-white text-4xl" />
        </div>

      </motion.a>


      {/* Profile Card */}

      <AnimatePresence>

        {hover && (

          <motion.div
            initial={{ opacity:0, y:30, scale:0.9 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.3 }}
            className="absolute top-20 w-64 bg-slate-900 rounded-xl border border-cyan-400 shadow-xl p-4"
          >

            <h3 className="text-white font-semibold">
              Sriram Selvaraj
            </h3>

            <p className="text-cyan-400 text-sm">
              Senior Software Engineer
            </p>

            <p className="text-gray-400 text-xs mt-2">
              React • React Native • TypeScript
            </p>

            <p className="text-xs text-gray-300 mt-2">
              Click to view full LinkedIn profile
            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  )

}