import { motion } from "framer-motion"
import { FaLock } from "react-icons/fa"

export default function UpcomingLockedProject() {

  return (

    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 group cursor-pointer"
    >

      {/* BLURRED PROJECT CONTENT */}

      <motion.div
        className="p-8 my-16 blur-md opacity-60 group-hover:blur-sm transition"
      >

        <div className="h-6 bg-slate-600 rounded w-2/3 mb-4"></div>

        <div className="h-4 bg-slate-700 rounded mb-3"></div>

        <div className="h-4 bg-slate-700 rounded w-5/6"></div>

        <div className="h-4 bg-slate-700 rounded w-1/2 mt-4"></div>

      </motion.div>


      {/* LOCK OVERLAY */}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

        <motion.div
          animate={{ rotate:[0,10,-10,0] }}
          transition={{ duration:2, repeat:Infinity }}
          className="text-cyan-400 mb-4"
        >
          <FaLock size={32} />
        </motion.div>

        <h3 className="text-lg font-semibold text-white mb-2">
          Locked Project
        </h3>

        <p className="text-cyan-400 text-sm">
          Creating something beautiful
        </p>

        <p className="text-gray-400 text-xs mt-1">
          Unlocking Soon 🚀
        </p>

      </div>


      {/* GLOW BORDER */}

      <motion.div
        className="absolute inset-0 rounded-xl border border-cyan-500 opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow:[
            "0 0 0px rgba(34,211,238,0)",
            "0 0 20px rgba(34,211,238,0.5)",
            "0 0 0px rgba(34,211,238,0)"
          ]
        }}
        transition={{ duration:2, repeat:Infinity }}
      />

    </motion.div>

  )

}