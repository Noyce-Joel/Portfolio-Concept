import React from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import MusicVideo from "../../public/AboutCopy/MusicVideo";

function About({
  
  
  video,
  position,
  className,
}) {
  const container = {
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.15,
      },
    },
  };
  const animation = {
    initial: {
      opacity: 0,
      scale: 0.7,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        type: "spring",
      },
    },
  };
  return (
    <>
      <Html position={position} center>
        <motion.div className="panel-wrap" key="panel-wrap-right-about">
          
           <MusicVideo srcUrl={video} />
         
          <motion.div
            className="backgrounds-wrap"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            key="background"
          />
        </motion.div>
      </Html>
    </>
  );
}

export default About;
