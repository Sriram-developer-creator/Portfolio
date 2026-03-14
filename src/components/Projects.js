import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import UpcomingLockedProject from "./common/UpcomingLockedProject"

const projects = [
    {
        title: "Telemedicine App",
        description:
            "Mobile healthcare platform built with React Native enabling secure authentication, appointment booking and payment integration.",
        tech: ["React Native", "TypeScript", "Firebase"],
        github: "#",
        demo: "#"
    },
    {
        title: "Financial Dashboard",
        description:
            "Interactive financial analytics dashboard using React, GraphQL and Chart.js with dynamic data visualization.",
        tech: ["React", "GraphQL", "Redux"],
        github: "#",
        demo: "#"
    },
    {
        title: "Form Handling System",
        description:
            "Full-stack application enabling form submission, validation and data storage using Node.js and MongoDB.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "#",
        demo: "#"
    }
]

export default function Projects() {

    return (

        <section id="projects" className="bg-slate-950 text-white py-24">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-16">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col justify-between"
                        >

                            <div>

                                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">

                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-slate-700 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            <UpcomingLockedProject />

            </div>

        </section>

    )

}