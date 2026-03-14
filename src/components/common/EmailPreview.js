import { useState, useEffect } from "react"
import { FaEnvelope, FaPaperPlane } from "react-icons/fa"

export default function EmailPreview() {

  const message= 'I came across your portfolio and would like to discuss an opportunity with you.'
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

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=sriramsearch44@gmail.com&su=Opportunity%20Discussion&body=Hi%20Sriram,%0A%0AI%20came%20across%20your%20portfolio."

  return (
    <a
      href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center p-6 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* EMAIL ICON */}

      <FaEnvelope
        className="text-6xl text-cyan-400 transition-transform duration-300 hover:scale-110"
      />

      {/* EMAIL PREVIEW POPUP */}

      {hover && (
        <div className="absolute top-20 w-80 bg-slate-900 rounded-xl border border-cyan-400 shadow-2xl z-50">

          {/* Header */}
          <div className="bg-cyan-500 text-white px-4 py-2 rounded-t-xl text-sm font-semibold">
            New Message
          </div>

          {/* To */}
          <div className="border-b border-slate-700 px-4 py-2 text-sm text-gray-300">
            <span className="text-gray-400">To:</span> sriramsearch44@gmail.com
          </div>

          {/* Subject */}
          <div className="border-b border-slate-700 px-4 py-2 text-sm text-gray-300">
            <span className="text-gray-400">Subject:</span> Opportunity Discussion
          </div>

          {/* Body */}
          <div className="pl-4 pt-4 text-sm">
            Hi Sriram,
          </div>
          <div className="p-4 text-sm text-gray-200 whitespace-pre-line min-h-[80px]">
            
            {typed}

            <span className="animate-pulse ml-1">|</span>
          </div>

          {/* Send Button */}
          <div className="flex justify-end p-3">
            <span className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-400 transition text-white">
              Send <FaPaperPlane />
            </span>
          </div>

        </div>
      )}

    </a>
  )
}