import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {

  return (

    <footer className="bg-black text-gray-400 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p>
          © {new Date().getFullYear()} Sriram Selvaraj
        </p>

        <div className="flex gap-6 text-xl">

          <a
            href="https://github.com/Sriram-developer-creator"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sriram-selvaraj-28303b228/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sriramsearch44@gmail.com"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>

  )

}