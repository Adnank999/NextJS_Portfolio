import React from "react";
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Photonic from "./Photonic";
import { Avatar } from "./Avatar";




// const Model = () => {
//   const gltf = useLoader(GLTFLoader, "/Space/scene.gltf");

//   // const { actions } = useAnimations(gltf.animations, gltf.scene);

//   // actions.Animation.play();

//   return (
//     <mesh>
      
//       <primitive object={gltf.scene} scale={0.8} />
//     </mesh>
//   );
// };

const Space3d = () => {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {/* <Model /> */}

       

        
        {/* <Environment preset={"night"} /> */}
      </Suspense>

      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default Space3d;
