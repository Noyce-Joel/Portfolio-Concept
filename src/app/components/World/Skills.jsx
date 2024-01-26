import React from "react";
import Skill from "./Skill";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { skillsContainer, skillsAnimation } from "../Feature/Anim";
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
  

  return (
    <Html center position={[-5, 0, 0]}>
      <motion.div
        variants={skillsContainer}
        initial="initial"
        whileInView="whileInView"
        className="skills"
      >
        {skills.map((skill, idx) => (
          <motion.div key={idx} variants={skillsAnimation}>
            <Skill src={skill} />
          </motion.div>
        ))}
      </motion.div>
    </Html>
  );
}

export default Skills;
