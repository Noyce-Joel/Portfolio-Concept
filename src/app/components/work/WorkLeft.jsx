import React from "react";
import Exp from "./Exp";

function WorkLeft({ isBackVisible }) {
  const position = [-5, 0, 0]
  return (
    <>
      {isBackVisible && <Exp className='work-teacher' position={position} />}
    </>
  );
}

export default WorkLeft;
