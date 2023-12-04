import { useGLTF } from "@react-three/drei";

const Bird = (props) => {
  const bird = useGLTF("/3d/bird.glb");
  return (
    <mesh {...props}>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
