
import Image from "next/image";
import React from "react";



function Skill({src, id}) {
  return (
    <>
      <Image
        src={src}
        alt='skill'
        className="skill-img"
        width={200}
        height={200}
        id={id}
      />
    </>
  );
}
export default Skill;
