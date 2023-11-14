import React from "react";
import Skill from "./Skill";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "/Skills/js.webp",
    "/Skills/ts.webp",
    "/Skills/gql.webp",
    "/Skills/mdb.webp",
    "/Skills/Three.webp",
    "/Skills/react-spring.webp",
    "/Skills/motion.webp",
    "/Skills/vs.webp",
    "/Skills/github.webp",
    "/Skills/next.webp",
    "/Skills/css.webp",
    "/Skills/html.webp",
    "/Skills/tailwindcss.webp",
    "/Skills/react.webp",
    "/Skills/ts.webp",
  ];
  const container = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
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
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <Html center position={[-5, 0, 0]}>
      <motion.div
        variants={container}
        initial="initial"
        whileInView="whileInView"
        className="skills"
      >
        {skills.map((skill, idx) => (
          <motion.div variants={animation}>
            <Skill src={skill} key={idx} />
          </motion.div>
        ))}
      </motion.div>
    </Html>
  );
}

export default Skills;
