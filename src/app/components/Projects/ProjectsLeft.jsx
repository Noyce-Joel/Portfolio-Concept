import React from "react";
import Project from "./Project";

function ProjectsLeft({
  anim,
  isVisible,
  isNowVisible,
  slideShow,
  handleClick,
  index,
  setIndex,
}) {
  const portfolioImages = [
    { image: "/a2.webp" },
    { image: "/a1.webp" },
    { image: "/a4.webp" },
    { image: "/a3.webp" },
  ];

  const position = [-5, 0, 0];
  return (
    <>
      {isNowVisible && (
        <Project
          images={portfolioImages}
          anim={anim}
          isVisible={isVisible}
          isNowVisible={isNowVisible}
          slideShow={slideShow}
          handleClick={handleClick}
          index={index}
          setIndex={setIndex}
          position={position}
          href="https://github.com/Noyce-Joel/CRUD"
        />
      )}
    </>
  );
}

export default ProjectsLeft;
