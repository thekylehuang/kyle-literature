'use client';

import { useGLTF } from "@react-three/drei";

const Game = () => {
  const { scene } = useGLTF('/models/not-found/city.glb');
  return(
    <group>
      <fog attach="fog" args={["#111111", 20, 200]} />  
      <primitive object={scene} />
      <mesh position={[0,0,-5]}>
        <sphereGeometry />
        <meshStandardMaterial color={'red'} />
      </mesh>
    </group>
  );
};

export default Game;