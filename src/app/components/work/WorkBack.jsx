import React from "react";
import Exp from "./Exp";
import { Html } from "@react-three/drei";
import Video from "./Video";
function WorkBack({ isBackVisible }) {
  const position = [0, 0, -5];
  return (
    <>
      {isBackVisible && (
        <Html position={[0, 0, -5]} center>
          <Video />
        </Html>
      )}
    </>
  );
}

export default WorkBack;
