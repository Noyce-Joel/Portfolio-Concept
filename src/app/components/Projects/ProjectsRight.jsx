import React from "react";
import Project from "./Project";

function ProjectsRight({
  isNowVisible,
  isVisible,
  slideShow,
  handleClick,

  index,
  setIndex,
}) {
  const crudImages = [
    {
      image: "/b21.webp",
    },
    {
      image: "/b22.webp",
    },
    {
      image: "/b23.webp",
    },
    {
      image: "/b21.webp",
    },
  ];

  const position = [5, 0, 0];

  return (
    <>
      {isNowVisible && (
        <Project
          images={crudImages}
          isVisible={isVisible}
          isNowVisible={isNowVisible}
          slideShow={slideShow}
          handleClick={handleClick}
          index={index}
          setIndex={setIndex}
          position={position}
          href="https://joelnoyce.vercel.app"
        />
      )}
    </>
  );
}

export default ProjectsRight;
