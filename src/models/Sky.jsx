import { useGLTF } from "@react-three/drei";

export default function Sky() {
  const sky = useGLTF("/3d/sky.glb");

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}

useGLTF.preload("/3d/sky.glb");
