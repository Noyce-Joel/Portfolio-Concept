import React from "react";
import About from "./About";


function Right({  isBackVisible }) {
  const position = [5, 0, 0];
  


  return (
    <>{isBackVisible && <About position={position} />}</>
  );
}

export default Right;
