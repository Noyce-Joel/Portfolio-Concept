import React, { useEffect } from "react";
import WorkBack from "./work/WorkBack";
import WorkRight from "./work/WorkRight";
import WorkFront from "./work/WorkFront";
import WorkLeft from "./work/WorkLeft";
import Navigate from "./Navigate";
import { container, panel } from "./Feature/Anim";
function Work({
  work,
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
  handleClick,
}) {
  const isBackVisible = active === name;

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
        onClick={(e) => handleClick("work", e)}
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

