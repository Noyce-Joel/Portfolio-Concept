import React, { useEffect } from "react";
import Back from "./World/Back";
import Right from "./World/Right";
import Left from "./World/Left";
import Front from "./World/Front";
import { Html } from "@react-three/drei";
import Image from "next/image";
import Navigate from "./Navigate";
function World({
  world,
  setWorld,
  active,
  setActive,
  name,
  moveLeft,
  moveRight,
  escape,
  box,
  left,
  right,
  front,
  back,
  top,
  bottom,
  anim,
  set,
  nav,
  setNav
}) {
  const isBackVisible = active === name;

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "ArrowLeft") {
  //       moveLeft();
  //       setNav(false)
  //     } else if (e.key === "ArrowRight") {
  //       moveRight();
  //       setNav(false)
  //     } else if (e.key === "Escape") {
  //       escape();
  //     } else if (e.key === "a") {
  //       moveLeft();
  //       setNav(false)
  //     } else if (e.key === "d") {
  //       moveRight();
  //       setNav(false)
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [moveLeft, moveRight, escape, setNav]);

  return (
    <>
      <group
        name={name}
        onClick={(e) => {
          world ? e.stopPropagation() : (setWorld(world === name ? null : name), setNav(true));
        }}
        position={[-20, 7.5, 0]}
      >
       {isBackVisible && nav && <Navigate />}
        <mesh
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          geometry={box}
          material={[left, right, front, back, top, bottom]}
        >
          <Front isBackVisible={isBackVisible} anim={anim} />
          <Back isBackVisible={isBackVisible} anim={anim} />
          <Right isBackVisible={isBackVisible} anim={anim} />
          <Left
            active={active}
            setActive={setActive}
            name={name}
            isBackVisible={isBackVisible}
            world={world}
            anim={anim}
            escape={escape}
            setNav={setNav}
            nav={nav}
          />
        </mesh>
      </group>
    </>
  );
}

export default World;

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
