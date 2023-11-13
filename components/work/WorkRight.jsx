import React, { useRef } from "react";
import { WorkDoor } from "../../public/DoorCopy/Copy";
import Door from "../Door";
import Exp from "./Exp";
function WorkBack({ work, active, setActive, name, isBackVisible, escape }) {
  const ref = useRef();
  const doorPosition = [5, -1, 0];
  const position = [5, 0, 0]
  return (
    <>
     {isBackVisible && <Exp position={position} />}
      {work && !isBackVisible && (
        <Door
          active={active}
          setActive={setActive}
          name={name}
          position={doorPosition}
          door={WorkDoor}
          escape={escape}
        />
      )}
    </>
  );
}

export default WorkBack;
