"use client";

import { Canvas } from "@react-three/fiber";
import Stage from "./components/Stage";
import { Suspense, useEffect } from "react";
import Desktop from "./components/Desktop";

export default function Home() {
  useEffect(() => {
    const imagePaths = [
      "/me.webp",
      "/b21.webp",
      "/b22.webp",
      "/b23.webp",
      "/cafe1.webp",
      "/cafe2.webp",
      "/cafe3.webp",
      "/cafe4.webp",
      "/a1.webp",
      "/a2.webp",
      "/a3.webp",
      "/a4.webp",
      "/p1.webp",
      "/p2.webp",
      "/p3.webp",
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
