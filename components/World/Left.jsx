import React from "react";
import Follow from "../Follow";
import { WorldDoor } from "../../public/DoorCopy/Copy";
import Door from "../Door";
import About from "../../components/World/About";

function Left({  world, active, setActive, name, isBackVisible, escape}) {
  const doorPosition = [-2.5, -1, 0];
  const position = [-5, 0, 0];
  return (
    <>
      {isBackVisible && (
        <About
          
          position={position}
        />
      )}
      {world && !isBackVisible && (
        <>
          <Follow />
          <Door
            active={active}
            setActive={setActive}
            name={name}
            position={doorPosition}
            door={WorldDoor}
            escape={escape}
          />
        </>
      )}
    </>
  );
}

export default Left;
