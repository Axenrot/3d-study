"use client";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Load from "../components/Load";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
// import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const [width, setWidth] = useState(null);
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  let camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const [islandScale, islandPosition, islandRotation] = [
    [0.5, 0.6, 0.6],
    [3, -6.5, -43],
    [0.1, 4.7, 0],
  ];

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      // console.log(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <span className="w-full h-screen">
      <Canvas
        data-rotating={isRotating}
        className="data-[rotating=true]:cursor-grabbing bg-transparent"
        camera={camera}
      >
        <Suspense fallback={<Load />}>
          {/* <OrbitControls camera={camera} /> */}
          <ambientLight intensity={0.7} />
          <directionalLight intensity={2} />
          {/* <pointLight /> */}
          {/* <hemisphereLight /> */}
          <Sky />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            scale={width < 768 ? islandScale : Array(3).fill(0.8)}
            position={islandPosition}
            rotation={islandRotation}
          />
          <Plane
            isRotating={isRotating}
            position={[0, -2, -8]}
            rotation={[0, 90, 0]}
          />
        </Suspense>
      </Canvas>
    </span>
  );
};

export default Scene;
