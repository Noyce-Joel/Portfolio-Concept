import React from "react";
import Project from "./Project";

function ProjectsBack({
  isVisible,
  slideShow,
  setSlideShow,
  handleClick,
  index,
  setIndex,
}) {
  const cafeImages = [
    { image: "/cafe1.webp" },
    { image: "/cafe2.webp" },
    { image: "/cafe3.webp" },
    { image: "/cafe4.webp" },
  ];

  const position = [0, 0, -5];

  return (
    <>
      {isVisible && (
        <Project
          images={cafeImages}
          isVisible={isVisible}
          slideShow={slideShow}
          handleClick={handleClick}
          index={index}
          setIndex={setIndex}
          position={position}
          setSlideShow={setSlideShow}
          href="https://cafeidea.vercel.app"
        />
      )}
    </>
  );
}

export default ProjectsBack;
