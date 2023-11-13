import React from "react";

import Exp from "./Exp";
function WorkFront({ isBackVisible }) {
  const position = [0, 0, 5];
  return (
    <>{isBackVisible && <Exp position={position} />}</>
  );
}

export default WorkFront;
