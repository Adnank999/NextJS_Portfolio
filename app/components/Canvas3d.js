import { Canvas } from "@react-three/fiber";
import Avatar3dOrbit from "./Avatar3dOrbit";

const Canvas3d = () => {
  return (
    <Canvas shadows camera={{ position: [0,1.5,6], fov: 50 }}>
      
      <Avatar3dOrbit />
    </Canvas>
  )
}

export default Canvas3d