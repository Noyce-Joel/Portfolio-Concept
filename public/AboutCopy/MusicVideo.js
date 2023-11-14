import { motion } from "framer-motion";
import React from "react";

function MusicVideo({ srcUrl }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { type: "spring", duration: 1, delay: 0.25 },
        }}
        key="video"
        className="music-video"
      >
        <iframe
          className="music"
          width="auto"
          height="auto"
          src={srcUrl}
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </motion.div>
    </>
  );
}

export default MusicVideo;
