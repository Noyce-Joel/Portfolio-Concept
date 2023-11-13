import React from "react";
import Project from "./Project";

import Door from "../Door";
import { ProjectsDoor } from "../../public/DoorCopy/Copy";
function ProjectsFront({
  isNowVisible,
  isVisible,
  slideShow,
  handleClick,
  projects,
  name,
  setActive,
  active,
  index,
  setIndex,
  escape,
}) {
  const dictionaryImages = [
    { image: "/p2.webp" },
    { image: "/p1.webp" },
    { image: "/p2.webp" },
    { image: "/p3.webp" },
  ];

  const position = [0, 0, 5];
  const doorPosition = [2, 0, 7];
  return (
    <>
      {isNowVisible && (
        <Project
          images={dictionaryImages}
          isVisible={isVisible}
          isNowVisible={isNowVisible}
          slideShow={slideShow}
          handleClick={handleClick}
          index={index}
          setIndex={setIndex}
          position={position}
          href="https://github.com/Noyce-Joel/Dictionary-Thesaurus"
        />
      )}
      {projects && !isNowVisible && (
        <Door
          active={active}
          setActive={setActive}
          name={name}
          position={doorPosition}
          door={ProjectsDoor}
          escape={escape}
        />
      )}
    </>
  );
}

export default ProjectsFront;
