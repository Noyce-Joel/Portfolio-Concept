import { Html } from "@react-three/drei";
import React, {  } from "react";
import Gallery from "./Gallery";
import { motion } from "framer-motion";

function Project({
 
  isVisible,
  isNowVisible,
  slideShow,
  href,
  handleClick,
  index,
  setIndex,
  images,
  
  position,
}) {
  const container = {
    whileInView: {
      transition: {
        staggerChildren: 0.15,
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
      },
    },
  };

  return (
    <>
      <Html position={position} center>
        <div className="panel-wrap-projects" key="panel-wrap">
          <motion.div
            className="backgrounds-wrap"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            }}
            key="background"
          ></motion.div>
          <motion.div
            variants={container}
            whileInView="whileInView"
            initial="initial"
            animate="animate"
            transition="transition"
            className="projects-back"
            key="projects-back"
          >
            <motion.div variants={animation} className="panel">
              <motion.div
                variants={animation}
                className="projects-gallery-wrap"
              >
                <Gallery
                  className="projects-image"
                  images={images}
                  handleClick={handleClick}
                  index={index}
                  setIndex={setIndex}
                  href={href}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Html>

      {isVisible ||
        (isNowVisible && slideShow && (
          <>
            <Html center>
              <motion.div
                className="slide-show-wrap"
                key="slide-show-wrap-back"
              >
                <div className="exit-button" onClick={handleClick}>
                  <button className="door-button" style={{ fontSize: "20px" }}>
                    X
                  </button>
                </div>
                <Gallery
                  className="ssImg"
                  images={images}
                  handleClick={handleClick}
                  index={index}
                  setIndex={setIndex}
                />
              </motion.div>
            </Html>
          </>
        ))}
    </>
  );
}

export default Project;
