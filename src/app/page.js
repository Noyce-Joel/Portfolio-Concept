"use client";

import { Canvas } from "@react-three/fiber";
import Stage from "../../components/Stage";
import { Suspense, useEffect } from "react";
import Head from "next/head";
import Desktop from '../../components/Desktop'
export default function Home() {
  useEffect(() => {
    const imagePaths = [
      "/me.webp",
      "/2.webp",
      "/3.webp",
      "/4.webp",
      "/5.webp",
      "/a1.webp",
      "/a2.webp",
      "/a3.webp",
      "/a4.webp",
      "/p1.webp",
      "/p2.webp",
      "/p3.webp",
      "/Skills/css.webp",
      "/Skills/github.webp",
      "/Skills/gql.webp",
      "/Skills/html.webp",
      "/Skills/js.webp",
      "/Skills/mdb.webp",
      "/Skills/motion.webp",
      "/Skills/next.webp",
      "/Skills/react-spring.webp",
      "/Skills/react.webp",
      "/Skills/tailwindcss.webp",
      "/Skills/Three.webp",
      "/Skills/ts.webp",
      "/Skills/vs.webp",
      "/Backgrounds/right-bg.png",
      "/Backgrounds/bg.png",
      "/Backgrounds/front-bg.png",
      "/Backgrounds/back-bg.png",
      "/Backgrounds/back-bg.png",
      "/Backgrounds/projects-bg.png",

    ];

    imagePaths.forEach((path) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = path;
      document.head.appendChild(link);
    });
  }, []);
  return (
    <>
    <Desktop />
      
      <Suspense fallback={<span>Loading...</span>}>
        <Canvas
          camera={{ position: [0, 0, 500] }}
          gl={{ antialiasing: false }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={4.5} />
          <Stage />
        </Canvas>
      </Suspense>
     
    </>
  );
}
