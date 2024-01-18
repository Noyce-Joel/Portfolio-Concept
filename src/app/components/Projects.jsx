import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTexture } from "@react-three/drei";
import ProjectsBack from "./Projects/ProjectsBack";
import ProjectsFront from "./Projects/ProjectsFront";
import ProjectsRight from "./Projects/ProjectsRight";
import ProjectsLeft from "./Projects/ProjectsLeft";
import Navigate from "./Navigate";
function Projects({
  setIsNowVisible,
  isNowVisible,
  active,
  setActive,
  name,
  escape,
  projects,
  setProjects,
  box,
  left,
  right,
  front,
  back,
  top,
  bottom,
  set,
  nav,
  setNav,
}) {
  const isVisible = active === name;

  const [slideShow, setSlideShow] = useState(null);
  const [src, setSrc] = useState("/p2.png");
  const [index, setIndex] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();
    setSlideShow(!slideShow);
    let imgId = e.target.id;
    setSrc(imgId);
  };

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "Escape" && active === name && slideShow) {
  //       escape();

  //       e.stopPropagation();
  //       setSlideShow(!slideShow);
  //     }
  //   };
  //   const handleRotate = (e) => {
  //     if (active === name) {
  //       if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
  //         setIsNowVisible(true);
  //         setSlideShow(false);
  //       }
  //       if (e.key === "a" || e.key === "d") {
  //         setIsNowVisible(true);
  //       }
  //     }
  //   };

  //   const handleMouseDown = () => {
  //     if (active === name) {
  //       setIsNowVisible(true);
  //       setNav(false);
  //     }
  //   };
  //   window.addEventListener("mousedown", handleMouseDown);
  //   window.addEventListener("keydown", handleKeyDown);
  //   window.addEventListener("keydown", handleRotate);

  //   return () => {
  //     window.removeEventListener("mousedown", handleMouseDown);
  //     window.removeEventListener("keydown", handleKeyDown);
  //     window.removeEventListener("keydown", handleRotate);
  //   };
  // }, [escape, slideShow, setIsNowVisible, setNav, active, name]);

  return (
    <>
      <group
        position={[0, 7.5, 0]}
        onClick={(e) => {
          projects
            ? e.stopPropagation()
            : (setProjects(projects === name ? null : name), setNav(true));
        }}
        name={name}
      >
        <mesh
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          geometry={box}
          material={[left, right, front, back, top, bottom]}
        >
          {isVisible && nav && <Navigate />}
          <ProjectsFront
            handleClick={handleClick}
            slideShow={slideShow}
            setSlideShow={setSlideShow}
            src={src}
            isNowVisible={isNowVisible}
            setProjects={setProjects}
            projects={projects}
            active={active}
            setActive={setActive}
            name={name}
            index={index}
            setIndex={setIndex}
            escape={escape}
          />

          <ProjectsBack
            handleClick={handleClick}
            isVisible={isVisible}
            slideShow={slideShow}
            setSlideShow={setSlideShow}
            src={src}
            index={index}
            setIndex={setIndex}
            nav={nav}
          />

          <ProjectsRight
            handleClick={handleClick}
            slideShow={slideShow}
            setSlideShow={setSlideShow}
            src={src}
            isNowVisible={isNowVisible}
            index={index}
            setIndex={setIndex}
          />

          <ProjectsLeft
            handleClick={handleClick}
            slideShow={slideShow}
            setSlideShow={setSlideShow}
            src={src}
            isNowVisible={isNowVisible}
            index={index}
            setIndex={setIndex}
          />
        </mesh>
      </group>
    </>
  );
}

export default Projects;

{
  /* {isVisible && (
          <Html center>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="move-buttons"
            >
              <button
                className="left"
                onClick={(e) => {
                  e.stopPropagation();
                  moveLeft();
                }}
              >
                LEFT
              </button>
              <button
                className="right"
                onClick={(e) => {
                  e.stopPropagation();
                  moveRight();
                }}
              >
                RIGHT
              </button>
            </motion.div>
          </Html>
        )} */
}
