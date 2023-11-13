import React, { useEffect, useRef, useState } from "react";
import {
  CameraControls,
  ContactShadows,
  Html,
  useCursor,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import World from "./World";
import Work from "./Work";
import Projects from "./Projects";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const box = new THREE.BoxGeometry(10, 10, 10);
const left = new THREE.MeshStandardMaterial({
  color: "rgb(32, 80, 100)",
  side: THREE.DoubleSide,
});
const right = new THREE.MeshStandardMaterial({
  color: "rgb(32, 80, 100)",
  side: THREE.DoubleSide,
});
const front = new THREE.MeshStandardMaterial({
  color: "rgb(110, 57, 43)",
  side: THREE.DoubleSide,
});
const back = new THREE.MeshStandardMaterial({
  color: "rgb(110, 57, 43)",
  side: THREE.DoubleSide,
});
const top = new THREE.MeshStandardMaterial({
  color: "rgb(19, 34, 61)",
  side: THREE.DoubleSide,
});
const bottom = new THREE.MeshStandardMaterial({
  color: "rgb(19, 34, 61)",
  side: THREE.DoubleSide,
});

function Stage() {
  const [active1, setActive1] = useState(null);
  const [active2, setActive2] = useState(null);
  const [active3, setActive3] = useState(null);

  const [work, setWork] = useState(null);
  const [world, setWorld] = useState(null);
  const [projects, setProjects] = useState(null);

  const [rotateLeft, setRotateLeft] = useState(null);
  const [rotateRight, setRotateRight] = useState(null);

  const [type, setType] = useState(true);
  const [nav, setNav] = useState(null)

  const [isNowVisible, setIsNowVisible] = useState(null);
  
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    if (active1) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active1).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        7.5,
        1.9,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else if (active2) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active2).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        -20,
        7.5,
        1.9,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else if (active3) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(active3).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        20,
        7.5,
        1.9,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else if (work) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(work).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        35,
        7.5,
        10.9,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else if (world) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(world).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        -35,
        7.5,
        10.9,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else  if (projects) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(projects).getWorldPosition(targetPosition);
      controlsRef.current.setLookAt(
        0,
        7.5,
        15.9,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true
      );
    } else {
      controlsRef.current.setLookAt(0, 20,34, 0, 7.5, 0, true);
    }
  }, [scene, work, projects, world, active1, active2, active3]);

 

 

  

  

 

  useEffect(() => {
    if (rotateLeft) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(rotateLeft).getWorldPosition(targetPosition);
      controlsRef.current.rotate(Math.PI / 2, 0, true);
    } else {
      controlsRef.current.rotate(0, 0, true);
    }
  }, [scene, rotateLeft]);

  useEffect(() => {
    if (rotateRight) {
      const targetPosition = new THREE.Vector3();
      scene.getObjectByName(rotateRight).getWorldPosition(targetPosition);
      controlsRef.current.rotate(-Math.PI / 2, 0, true);
    } else {
      controlsRef.current.rotate(0, 0, true);
    }
  }, [scene, rotateRight]);

  const moveLeft = (name) => (e) => {
    setRotateLeft(rotateLeft === name ? null : name);
  };

  const moveRight = (name) => (e) => {
    setRotateRight(rotateRight === name ? null : name);
  };
  const escape = () => {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setIsNowVisible(false);
    setWorld(null);
    setWork(false);
    setProjects(false);
    setType(false);
    setNav(false)
  };
 

  

  const anim = {
    initial: {
      scale: 0.7,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.55,
        staggerChildren: 0.5,
        delayChildren: 0.4
      },
    },
  };

  const [hovered, set] = useState();
  useCursor(hovered, "pointer", "auto");

  const texture = useTexture('/p-bg.png')

  return (
    <>
      <Html position={[1, -10, 0]} center>
        <div className="type-wrap">
          <motion.div
            initial={{ scale: 0.7, y: -20, opacity: 0 }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
              transition: { duration: 0.5,  },
            }}
            key='typewriter'
            className={
              work || world || projects || type === false
                ? "type-hidden"
                : "typewriter"
            }
          >
            <Typewriter
              words={["CLICK ON A BOX"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={5000}
            />
          </motion.div>
        </div>
      </Html>

      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        dollySpeed={0.001}
      />

      <ContactShadows scale={100} blur={3} opacity={0.5} far={10} />
     
      <World
        moveRight={moveRight("world")}
        moveLeft={moveLeft("world")}
        active={active2}
        setActive={setActive2}
        escape={escape}
        name="world"
        world={world}
        setWorld={setWorld}
        box={box}
        left={left}
        right={right}
        front={front}
        back={back}
        top={top}
        bottom={bottom}
        anim={anim}
        set={set}
        nav={nav}
        setNav={setNav}
      />

      <Projects
        moveRight={moveRight("projects")}
        moveLeft={moveLeft("projects")}
        active={active1}
        escape={escape}
        setActive={setActive1}
        name="projects"
        isNowVisible={isNowVisible}
        setIsNowVisible={setIsNowVisible}
        projects={projects}
        setProjects={setProjects}
        box={box}
        left={left}
        right={right}
        front={front}
        back={back}
        top={top}
        bottom={bottom}
        anim={anim}
        set={set}
        nav={nav}
        setNav={setNav}
      />

      <Work
        moveRight={moveRight("work")}
        moveLeft={moveLeft("work")}
        active={active3}
        setActive={setActive3}
        name="work"
        escape={escape}
        work={work}
        setWork={setWork}
        box={box}
        left={left}
        right={right}
        front={front}
        back={back}
        top={top}
        bottom={bottom}
        anim={anim}
        set={set}
        nav={nav}
        setNav={setNav}
      />
    </>
  );
}

export default Stage;
