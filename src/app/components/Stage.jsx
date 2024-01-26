import React, { useEffect, useReducer, useRef, useState } from "react";
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

import { box, left, right, front, back, top, bottom } from "./Box";
import { anim } from "./Feature/Anim";
function Stage() {
  const controlsRef = useRef();
  const scene = useThree((state) => state.scene);
  const initialState = {
    active1: null,
    active2: null,
    active3: null,
    work: null,
    world: null,
    projects: null,
    rotateLeft: null,
    rotateRight: null,
    type: true,
    nav: null,
    isNowVisible: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ACTIVE1":
        return { ...state, active1: action.payload };
      case "SET_ACTIVE2":
        return { ...state, active2: action.payload };
      case "SET_ACTIVE3":
        return { ...state, active3: action.payload };
      case "SET_WORK":
        return { ...state, work: action.payload };
      case "SET_WORLD":
        return { ...state, world: action.payload };
      case "SET_PROJECTS":
        return { ...state, projects: action.payload };
      case "SET_ROTATE_LEFT":
        return { ...state, rotateLeft: action.payload };
      case "SET_ROTATE_RIGHT":
        return { ...state, rotateRight: action.payload };
      case "SET_TYPE":
        return { ...state, type: action.payload };
      case "SET_NAV":
        return { ...state, nav: action.payload };
      case "SET_IS_NOW_VISIBLE":
        return { ...state, isNowVisible: action.payload };
      case "SET_HOVERED":
        return { ...state, hovered: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useCursor(state.hovered, "pointer", "auto");

  const texture = useTexture("/p-bg.png");
  const handleLookAt = (objectName, x, y, z) => {
    const targetPosition = new THREE.Vector3();
    scene.getObjectByName(objectName).getWorldPosition(targetPosition);
    controlsRef.current.setLookAt(
      x,
      y,
      z,
      targetPosition.x,
      targetPosition.y,
      targetPosition.z,
      true
    );
  };

  useEffect(() => {
    if (state.active1) {
      handleLookAt(state.active1, 0, 7.5, 1.9);
    } else if (state.active2) {
      handleLookAt(state.active2, -20, 7.5, 1.9);
    } else if (state.active3) {
      handleLookAt(state.active3, 20, 7.5, 1.9);
    } else if (state.work) {
      handleLookAt(state.work, 35, 7.5, 10.9);
    } else if (state.world) {
      handleLookAt(state.world, -35, 7.5, 10.9);
    } else if (state.projects) {
      handleLookAt(state.projects, 0, 7.5, 15.9);
    } else {
      controlsRef.current.setLookAt(0, 20, 34, 0, 7.5, 0, true);
    }
  }, [
    scene,
    state.work,
    state.projects,
    state.world,
    state.active1,
    state.active2,
    state.active3,
  ]);

  const handleRotate = (objectName, rotation) => {
    const targetPosition = new THREE.Vector3();
    scene.getObjectByName(objectName).getWorldPosition(targetPosition);
    controlsRef.current.rotate(rotation, 0, true);
  };

  useEffect(() => {
    if (state.rotateLeft) {
      handleRotate(state.rotateLeft, Math.PI / 2);
    } else {
      controlsRef.current.rotate(0, 0, true);
    }
  }, [scene, state.rotateLeft]);

  useEffect(() => {
    if (state.rotateRight) {
      handleRotate(state.rotateRight, -Math.PI / 2);
    } else {
      controlsRef.current.rotate(0, 0, true);
    }
  }, [scene, state.rotateRight]);

  const moveLeft = (name) => (e) => {
    dispatch({
      type: "SET_ROTATE_LEFT",
      payload: state.rotateLeft === name ? null : name,
    });
  };

  const moveRight = (name) => (e) => {
    dispatch({
      type: "SET_ROTATE_RIGHT",
      payload: state.rotateRight === name ? null : name,
    });
  };
  const escape = () => {
    dispatch({ type: "SET_ACTIVE1", payload: false });
    dispatch({ type: "SET_ACTIVE2", payload: false });
    dispatch({ type: "SET_ACTIVE3", payload: false });
    dispatch({ type: "SET_IS_NOW_VISIBLE", payload: false });
    dispatch({ type: "SET_WORLD", payload: null });
    dispatch({ type: "SET_WORK", payload: false });
    dispatch({ type: "SET_PROJECTS", payload: false });
    dispatch({ type: "SET_TYPE", payload: false });
    dispatch({ type: "SET_NAV", payload: false });
  };

  const handleClick = (boxName, e) => {
    switch (boxName) {
      case "world":
        dispatch({ type: "SET_WORLD", payload: "world" });
        dispatch({ type: "SET_NAV", payload: true });
        dispatch({ type: "SET_PROJECTS", payload: false });
        dispatch({ type: "SET_WORK", payload: false });
        break;
      case "work":
        dispatch({ type: "SET_WORK", payload: "work" });
        dispatch({ type: "SET_NAV", payload: true });
        dispatch({ type: "SET_PROJECTS", payload: false });
        dispatch({ type: "SET_WORLD", payload: false });
        break;
      case "projects":
        dispatch({ type: "SET_PROJECTS", payload: "projects" });
        dispatch({ type: "SET_NAV", payload: true });
        dispatch({ type: "SET_WORK", payload: false });
        dispatch({ type: "SET_WORLD", payload: false });
        break;
      default:
        break;
    }
  };
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
              transition: { duration: 0.5 },
            }}
            key="typewriter"
            className={
              state.work ||
              state.world ||
              state.projects ||
              state.type === false
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
        handleClick={handleClick}
        moveRight={moveRight("world")}
        moveLeft={moveLeft("world")}
        active={state.active2}
        setActive={(value) => dispatch({ type: "SET_ACTIVE2", payload: value })}
        escape={escape}
        name="world"
        world={state.world}
        setWorld={(value) => dispatch({ type: "SET_WORLD", payload: value })}
        box={box}
        left={left}
        right={right}
        front={front}
        back={back}
        top={top}
        bottom={bottom}
        anim={anim}
        set={(value) => dispatch({ type: "SET_HOVERED", payload: value })}
        nav={state.nav}
        setNav={(value) => dispatch({ type: "SET_NAV", payload: value })}
      />

      <Projects
        handleClick={handleClick}
        moveRight={moveRight("projects")}
        moveLeft={moveLeft("projects")}
        active={state.active1}
        escape={escape}
        setActive={(value) => dispatch({ type: "SET_ACTIVE1", payload: value })}
        name="projects"
        isNowVisible={state.isNowVisible}
        setIsNowVisible={(value) =>
          dispatch({ type: "SET_IS_NOW_VISIBLE", payload: value })
        }
        projects={state.projects}
        setProjects={(value) =>
          dispatch({ type: "SET_PROJECTS", payload: value })
        }
        box={box}
        left={left}
        right={right}
        front={front}
        back={back}
        top={top}
        bottom={bottom}
        anim={anim}
        set={(value) => dispatch({ type: "SET_HOVERED", payload: value })}
        nav={state.nav}
        setNav={(value) => dispatch({ type: "SET_NAV", payload: value })}
      />

      <Work
        handleClick={handleClick}
        moveRight={moveRight("work")}
        moveLeft={moveLeft("work")}
        active={state.active3}
        setActive={(value) => dispatch({ type: "SET_ACTIVE3", payload: value })}
        name="work"
        escape={escape}
        work={state.work}
        setWork={(value) => dispatch({ type: "SET_WORK", payload: value })}
        box={box}
        left={left}
        right={right}
        front={front}
        back={back}
        top={top}
        bottom={bottom}
        anim={anim}
        set={(value) => dispatch({ type: "SET_HOVERED", payload: value })}
        nav={state.nav}
        setNav={(value) => dispatch({ type: "SET_NAV", payload: value })}
      />
    </>
  );
}

export default Stage;

// const active1 = appState.state.active1;
// const setActive1 = (value) => appState.dispatch({ type: 'SET_ACTIVE1', payload: value });
// const active2 = appState.state.active2;
// const setActive2 = (value) => appState.dispatch({ type: 'SET_ACTIVE2', payload: value });
// const active3 = appState.state.active3;
// const setActive3 = (value) => appState.dispatch({ type: 'SET_ACTIVE3', payload: value });
// const work = appState.state.work;
// const setWork = (value) => appState.dispatch({ type: 'SET_WORK', payload: value });
// const world = appState.state.world;
// const setWorld = (value) => appState.dispatch({ type: 'SET_WORLD', payload: value });
// const projects = appState.state.projects;
// const setProjects = (value) => appState.dispatch({ type: 'SET_PROJECTS', payload: value });
// const rotateLeft = appState.state.rotateLeft;
// const setRotateLeft = (value) => appState.dispatch({ type: 'SET_ROTATELEFT', payload: value });
// const rotateRight = appState.state.rotateRight;
// const setRotateRight = (value) => appState.dispatch({ type: 'SET_ROTATERIGHT', payload: value });
// const type = appState.state.type;
// const setType = (value) => appState.dispatch({ type: 'SET_TYPE', payload: value });
// const nav = appState.state.nav;
// const setNav = (value) => appState.dispatch({ type: 'SET_NAV', payload: value });
// const isNowVisible = appState.state.isNowVisible;
// const setIsNowVisible = (value) => appState.dispatch({ type: 'SET_ISNOWVISIBLE', payload: value });
