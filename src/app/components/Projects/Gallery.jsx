import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense, useState } from "react";
import RightArrow from "../../../../public/svgs/RightArrow";
import LeftArrow from "../../../../public/svgs/LeftArrow";
import Image from "next/image";

function Gallery({ href, images, handleClick, className, index, setIndex }) {
  let photo = images[index];

  const handleNext = () => {
    setIndex(index + 1);
    if (index === images.length - 1) {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(images.length - 1);
    }
  };

  return (
    <>
      <Suspense>
        <motion.div className="gallery-img-wrap" key="photo-wrap">
          <button className="gallery-button-left" onClick={handleNext}>
            <LeftArrow />
          </button>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image
              key={photo.image}
              alt="gallery-image"
              className={className}
              id={photo.image}
              onClick={handleClick}
              src={photo.image}
              width={1500}
              height={1000}
              priority
              quality={100}
            />
          </motion.div>

          <a className="visit-button" href={href}>
            VIEW
          </a>
          <button className="gallery-button-right" onClick={handlePrev}>
            <RightArrow />
          </button>
        </motion.div>
      </Suspense>
    </>
  );
}

export default Gallery;
