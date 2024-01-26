import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { backContainer, backAnimation } from "../Feature/Anim";
function Back({ anim, isBackVisible }) {
  const call = () => {
    window.location.href = "tel: 07535137261";
  };
  
  return (
    <>
      {isBackVisible && (
        <Html position={[0, 0, -5]} center>
          <motion.div
            className="panel-wrap"
            initial="initial"
            whileInView="whileInView"
            key="panel-wrap-about-back"
          >
            <motion.div
              variants={backContainer}
              initial="initial"
              whileInView="whileInView"
              className="about-back center"
              key='world-back-container'
            >
              <motion.div variants={backAnimation} key='world-back-iamge-wrap' className="about-image-wrap">
                <Image
                  className="about-image"
                  style={{ borderRadius: "20px" }}
                  src="/me.webp"
                  height={700}
                  width={400}
                  alt="me"
                />
              </motion.div>
              <motion.div variants={backAnimation} key='world-back-bio' className="about-back-info">
                <b>Web Developer</b>
                <h1>Joel Noyce</h1>
                <b>BA Hons Spanish & Linguistics</b>
                <div>Sheffield, England</div>
                <p className="phone-number" onClick={call}>
                  077535137261
                </p>
                <section>
                  <button className="social-buttons">
                    <SocialIcon
                      style={{ width: "50px", height: "50px" }}
                      url="https://wwww.github.com"
                    />
                  </button>
                  <button className="social-buttons">
                    <SocialIcon
                      style={{ width: "50px", height: "50px" }}
                      url="https://wwww.linkedin.com"
                    />
                  </button>
                  <button className="social-buttons">
                    <SocialIcon
                      style={{ width: "50px", height: "50px" }}
                      url="https://wwww.gmail.com"
                    />
                  </button>
                </section>
              </motion.div>
            </motion.div>
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
      )}
    </>
  );
}

export default Back;
