import { FaWhatsapp, FaPaperPlane } from "react-icons/fa"
import { useState, useEffect } from "react"

export default function WhatsappChat() {

  const message = "Hi, there I am contacting you from your portfolio."
  const [hover, setHover] = useState(false)
  const [typed, setTyped] = useState("")

  useEffect(() => {

    if (!hover) {
      setTyped("")
      return
    }

    let i = 0

    const interval = setInterval(() => {

      setTyped(message.slice(0, i))
      i++

      if (i > message.length) clearInterval(interval)

    }, 35)

    return () => clearInterval(interval)

  }, [hover])

  return (
    <div
      className="relative flex flex-col items-center p-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* WhatsApp Icon */}
        <a href={`https://wa.me/919080880431?text=${encodeURIComponent(message)}`} target="_blank">
            <FaWhatsapp className="text-6xl text-green-500 cursor-pointer transition-transform duration-300 hover:scale-110"/>
        </a>

      {/* Chat Popup */}

      {hover && (

        <div className="absolute top-20 w-72 bg-slate-900 rounded-xl shadow-2xl border border-green-500">

          {/* header */}

          <div className="bg-green-500 text-white px-4 py-2 rounded-t-xl text-sm font-semibold">
            WhatsApp
          </div>

          {/* message */}

          <div className="p-4 text-sm text-gray-200 flex">

            {typed}

            <span className="animate-pulse ml-1">|</span>

          </div>

          {/* send button */}

          <div className="flex justify-end p-3">

            <a
              href={`https://wa.me/919080880431?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >

              Send

              <FaPaperPlane/>

            </a>

          </div>

        </div>

      )}

    </div>

  )

}