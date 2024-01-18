import { motion } from 'framer-motion'
import React from 'react'

function Video() {
  return (
    <motion.div
    className="work-panel-wrap work-text"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.55 }}
    key="work-panel-right"
  >
    <div className="cafes-vid">
      <video
        alt='coffee-video'
        src="/video.mov"
        autoPlay
        loop="infinite"
        width="auto"
        height="auto"
        muted
        
      />
    </div>
  </motion.div>
  )
}

export default Video