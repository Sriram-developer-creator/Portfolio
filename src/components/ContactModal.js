import { motion, AnimatePresence } from "framer-motion"
import { FaPhone, FaEnvelope, FaTimes } from "react-icons/fa"

export default function ContactModal({ open, setOpen }) {

    return (

        <AnimatePresence>

            {open && (

                <motion.div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-slate-900 text-white p-8 rounded-xl shadow-2xl w-80 relative"
                    >

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white"
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Contact Me
                        </h2>

                        <div className="flex flex-col gap-4">

                            <a
                                href="tel:9080880431"
                                className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg hover:bg-cyan-500 transition"
                            >
                                <FaPhone />
                                Call: 9080880431
                            </a>


                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=sriramsearch44@gmail.com&su=Opportunity&body=Hi%20Sriram,"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg hover:bg-cyan-500 transition"
                            >
                                <FaEnvelope />
                                Email: sriramsearch44@gmail.com
                            </a>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    )

}