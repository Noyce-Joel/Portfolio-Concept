
import Image from "next/image";
import React from "react";



function Skill({src, id}) {
  return (
    <>
      <Image
        src={src}
        alt='skill'
        className="skill-img"
        width={80}
        height={80}
        id={id}
      />
    </>
  );
}
export default Skill;
