import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import Confetti from "react-confetti"

export default function ContactForm() {

    const form = useRef()
    const [success, setSuccess] = useState(false)

    const [loading,setLoading] = useState(false)

    const sendEmail = (e) => {

        e.preventDefault()
        setLoading(true)
        emailjs.sendForm(
            "service_gh46k0t",
            "template_njamd3b",
            form.current,
            "CG0nFUp45iRJlhfWQ"
        ).then(() => {
            setSuccess(true)
            form.current.reset()
            setTimeout(() => {
                setSuccess(false)
            }, 4000)
        }).catch(() => {
            alert("Something went wrong")
        }).finally(()=>{
            setLoading(false)
        })

    }

    return (

        <div className="relative">

            {success && (
                <>
                    <Confetti numberOfPieces={200} />

                    <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl z-50"
                    >
                        Message Sent Successfully 🚀
                    </motion.div>
                </>
            )}

            <form
                ref={form}
                onSubmit={sendEmail}
                className="grid md:grid-cols-2 gap-6"
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none"
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none md:col-span-2"
                />

                <textarea
                    name="message"
                    rows="5"
                    placeholder="Description"
                    required
                    className="p-4 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-400 outline-none md:col-span-2"
                />

                <button
                    type="submit"
                    className="bg-cyan-500 py-3 rounded-lg hover:bg-cyan-400 transition md:col-span-2"
                >
                    {loading ? 'Thanks for contacting...' : 'Send Message'}
                </button>

            </form>

        </div>

    )

}