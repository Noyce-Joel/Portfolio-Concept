import React from "react";
import About from "../World/About";

function Front({ isBackVisible }) {
  const position = [0, 0, 5];
  const vid =
    "https://www.youtube.com/embed/DwtXRxpv6fA?si=ztuA5lPPPTTeestl&amp;start=25&controls=0";

  return <>{isBackVisible && <About video={vid} position={position} />}</>;
}

export default Front;
