import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

const Avatar3dOrbit = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Avatar />
      <Environment preset={"city"} />
      <mesh>
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

export default Avatar3dOrbit;
