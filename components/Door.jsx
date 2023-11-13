import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import React from 'react'
import LeftArrow from '../public/svgs/LeftArrow';

function Door({active, setActive, name, position, door, escape}) {
  return (
    <Html position={position} center>
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        config: { tension: 200, friction: 500, mass: 0.8 },
      }}
      exit={{ scale: 0, opacity: 0 }}
      className="door"
      key="door-proj"
    >
      <h1>{door}</h1>
      <div className='door-buttons-wrap'>
      <button
        onClick={(e) => {
          active
            ? e.stopPropagation()
            : setActive(active === name ? null : name);
        }}
        className="door-button"
      >
        ENTER
      </button>
      <button
        onClick={() => escape()}
        className="door-button-back"
        
      >
        <LeftArrow />
      </button>
      </div>
    </motion.div>
  </Html>
  )
}

export default Door