import { motion } from "framer-motion"
import { FaTimes } from "react-icons/fa"

export default function RecruiterQuickView({ open, setOpen }) {

  if (!open) return null

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 text-white rounded-xl p-8 w-[90%] md:w-[500px] shadow-2xl border border-slate-700"
      >

        {/* CLOSE BUTTON */}

        <div className="flex justify-end">
          <FaTimes
            className="cursor-pointer text-gray-400 hover:text-white"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* TITLE */}

        <h2 className="text-2xl font-bold mb-6 text-center">
          Recruiter Quick View
        </h2>

        {/* SUMMARY */}

        <div className="space-y-4 text-gray-300">

          <p>🚀 <b>5+ Years Experience</b> building scalable web & mobile applications</p>

          <p>⚛️ <b>React / React Native Specialist</b> with TypeScript</p>

          <p>📱 Built production mobile apps for healthcare platforms</p>

          <p>⚡ Focused on performance, scalable UI architecture, and clean code</p>

          <p>🧠 Experienced with Firebase Auth, REST APIs, GraphQL, Redux</p>

          <p>🤖 Uses AI-assisted workflows to accelerate development</p>

        </div>

        {/* ACTIONS */}

        <div className="flex justify-center gap-4 mt-8">

          <a
            href={`${process.env.PUBLIC_URL}/Sriram_S_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
          >
            View Resume
          </a>

        </div>
      </motion.div>

    </div>
  )
}