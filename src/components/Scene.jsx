"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Load from "../components/Load";
// import Island from "../models/Island";

const Scene = () => {
  return (
    <Canvas
      className="flex-1 w-full h-screen bg-transparent"
      camera={{ near: 0.1, far: 1000 }}
    >
      <Suspense fallback={<Load />}></Suspense>
      <directionalLight />
      <ambientLight />
      <pointLight />
      <hemisphereLight />
      {/* <Island /> */}
    </Canvas>
  );
};

export default Scene;
