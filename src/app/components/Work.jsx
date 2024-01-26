import React, { useEffect } from "react";
import WorkBack from "./work/WorkBack";
import WorkRight from "./work/WorkRight";
import WorkFront from "./work/WorkFront";
import WorkLeft from "./work/WorkLeft";
import Navigate from "./Navigate";
function Work({
  work,
  setWork,
  escape,
  active,
  setActive,
  name,
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
  handleClick
}) {
  const isBackVisible = active === name;

  const container = {
    whileInView: {
      transition: {
        friction: 400,
        mass: 0.7,
        duration: 2,
        staggerChildren: 0.2,
        delayChildren: 0.55,
      },
    },
  };

  const panel = {
    initial: {
      opacity: 0,
      scale: 0.5,
      x: -100,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        delayChildren: 0.4,
        type: "spring",
        friction: 200,
        mass: 0.8,
      },
    },
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        escape();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [escape]);

  return (
    <>
      <group
        onClick={(e) => handleClick('work', e)}
        position={[20, 7.5, 0]}
        name={name}
      >
        <mesh
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          geometry={box}
          material={[left, right, front, back, top, bottom]}
        >
          {isBackVisible && nav && <Navigate />}
          <WorkFront
            container={container}
            panel={panel}
            isBackVisible={isBackVisible}
          />

          <WorkBack
            container={container}
            panel={panel}
            isBackVisible={isBackVisible}
          />

          <WorkRight
            container={container}
            panel={panel}
            isBackVisible={isBackVisible}
            active={active}
            setActive={setActive}
            name={name}
            work={work}
            escape={escape}
          />

          <WorkLeft
            container={container}
            panel={panel}
            isBackVisible={isBackVisible}
          />
        </mesh>
      </group>
    </>
  );
}

export default Work;

{
  /* {isBackVisible && (
          <Html center>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.5, delay: 0.55 }}
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
