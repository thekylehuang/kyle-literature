"use client"

import { useGLTF, OrthographicCamera, Float } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

useGLTF.preload('/models/not-found/404.glb')

const Model = () => {
  const { viewport } = useThree();
  const { scene: sceneModel } = useGLTF('/models/not-found/404.glb');
  return(
    <group>
      <OrthographicCamera
            makeDefault 
            position={[0, 0.75, 5]}
            zoom={100}
            near={0.01}
            far={1000}
      />
      <Float speed={10}>
        <primitive object={sceneModel} scale={Math.min(viewport.width / 2, 6)}/>
      </Float>
    </group>
  );
};

export default Model;