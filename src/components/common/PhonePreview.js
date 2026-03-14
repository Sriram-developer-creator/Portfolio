import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaPhone } from "react-icons/fa"

export default function PhonePreview(){

  const [hover,setHover] = useState(false)

  return (
    <a href="tel:9080880431">
    <div
      className="relative flex flex-col items-center p-6 cursor-pointer"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >

      {/* Pulse glow */}

      <motion.div
        animate={{ scale:[1,1.6,1], opacity:[0.5,0,0.5] }}
        transition={{ duration:2, repeat:Infinity }}
        className="absolute w-20 h-20 rounded-full border border-cyan-400"
      />

      {/* Phone Icon */}

      <motion.a
        href="tel:9080880431"
        whileHover={{ y:-6, scale:1.15 }}
        transition={{ type:"spring", stiffness:300 }}
      >
        <FaPhone className="text-6xl text-cyan-400"/>
      </motion.a>


      {/* Call Card */}

      <AnimatePresence>

        {hover && (

          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0 }}
            className="absolute top-20 w-40 bg-slate-900 border border-cyan-400 rounded-xl p-4 text-sm shadow-xl"
          >

            <p className="text-gray-300">Call Me</p>
            <a href="tel:9080880431">
            <p className="text-cyan-400 font-semibold">
              +91 90808 80431
            </p>
            </a>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
    </a>
  )

}