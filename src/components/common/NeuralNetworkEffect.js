import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function NeuralNetworkEffect() {

  const [nodes, setNodes] = useState([])
  const [travel, setTravel] = useState(null)

  useEffect(() => {

    const createNode = () => {

      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight

      const id = Date.now()

      setNodes(prev => [...prev, { x, y, id }])

      setTimeout(() => {
        setNodes(prev => prev.filter(n => n.id !== id))
      }, 5000)

    }

    const interval = setInterval(createNode, 1200)

    return () => clearInterval(interval)

  }, [])

  useEffect(() => {

    if (nodes.length < 2) return

    const start = nodes[Math.floor(Math.random() * nodes.length)]
    const end = nodes[Math.floor(Math.random() * nodes.length)]

    setTravel({ start, end })

  }, [nodes])

  return (

    <div className="absolute inset-0 pointer-events-none z-0">

      {/* NODES */}

      {nodes.map(node => (

        <div
          key={node.id}
          style={{
            left: node.x,
            top: node.y
          }}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_12px_4px_rgba(34,211,238,0.8)]"
        />

      ))}

      {/* TRAVELING PARTICLE */}

      {travel && (

        <motion.div
          initial={{
            x: travel.start.x,
            y: travel.start.y,
            opacity: 1
          }}
          animate={{
            x: travel.end.x,
            y: travel.end.y,
            opacity: 0.8
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_6px_rgba(34,211,238,0.9)]"
        />

      )}

    </div>

  )

}