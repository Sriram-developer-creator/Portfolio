import { motion } from "framer-motion"
import WhatsappChat from "./common/Watsapp"
import EmailPreview from "./common/EmailPreview"
import LinkedInPreview from "./common/LinkedIn"
import PhonePreview from "./common/PhonePreview"
import ContactForm from "./common/ContactForm"
import GitHubPreview from "./common/GitHubPreview"

export default function Contact() {

    return (

        <section id="contact" className="min-h-screen bg-slate-900 text-white py-24">

            <div className="max-w-7xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-16"
                >
                    Get In Touch
                </motion.h2>


                {/* MAIN GRID */}

                <div className="grid md:grid-cols-2  gap-16 items-center">


                    {/* LEFT SIDE CONTACT ICONS */}

                    <div className="grid grid-cols-2 md:grid-cols-1 gap-6">

                        <PhonePreview />

                        <EmailPreview />

                        <LinkedInPreview />

                        <GitHubPreview />

                        <WhatsappChat />

                    </div>




                    {/* RIGHT SIDE FORM */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-800 p-10 rounded-xl shadow-xl"
                    >
                        <ContactForm />
                    </motion.div>

                </div>

            </div>

        </section>

    )

}