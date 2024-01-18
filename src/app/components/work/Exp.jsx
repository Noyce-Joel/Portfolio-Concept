import React from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";

function Exp({
  anim,
  heading,
  h1,
  p1,
  h2,
  p2,
  p3,
  p4,
  pHeading,
  pHeading2,
  uni1,
  uni2,
  image,
  heading2,
  heading3,
  a3Content,
  position,
  className,
  video,
  icons,
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

export default Exp;
