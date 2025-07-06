"use client"

import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import Model from "@/components/not-found/Model";

useGLTF.preload('/models/not-found/404.glb')

const NotFoundClient = () => {
  return(
    <div className='flex items-center justify-center w-full h-[calc(100vh-80px)] mt-20'>
      <div id="canvas-container" className='w-full h-full'>
        <Canvas>
          <Environment preset="studio" environmentIntensity={0.5}/>
          <Model />
        </Canvas> 
        <div className="w-full h-[1000px] bg-red-500">
          <h1>Hi</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundClient;