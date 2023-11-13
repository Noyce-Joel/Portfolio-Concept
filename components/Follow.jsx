import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import React from "react";

import { SocialIcon } from "react-social-icons";

function Follow() {
  const socialIconUrls = [
    "https://twitter.com/NoyceJoel",
    "https://www.linkedin.com/in/joel-noyce-16a034188",
    "https://github.com/Noyce-Joel",
  ];

  return (
    <mesh>
      <Html center position={[25, 17, -5]}>
        
        <div className="follow">
          {socialIconUrls.map((icon, index) => (
            <motion.div className="follow-icon" initial={{scale: 0}} whileInView={{scale: 1.2}} exit={{scale: 0}} key={index}>
              <SocialIcon url={icon} />
            </motion.div>
          ))}
        </div>
       
      </Html>
    </mesh>
  );
}

export default Follow;
