import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Navigate() {
  return (
    <>
    
        <Html center position={[0.4, -0.25, 1.5]}>
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 1}}}
          className="nav-buttons-wrap">
            <div className="nav-buttons">
              <div>
                <Image 
                  src="/keys.png"
                  alt='arrow-keys'
                  width={100}
                  height={100}
                />
              </div>
              <div className="keys-icon">
                <Image
                  alt='escape'
                  src="/escape.png"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </motion.div>
        </Html>
      
      </>
  )
}

export default Navigate