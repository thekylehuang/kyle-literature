"use client"

import { Canvas } from '@react-three/fiber';
import { Environment, Stats } from '@react-three/drei';
import Game from '@/components/not-found/Game';
import { Suspense } from 'react';

const NotFoundClient = () => {
  return (
    <div className='flex items-center justify-center w-full h-[calc(100vh-80px)] mt-20'>
      <div id="canvas-container" className='w-11/12 h-11/12 rounded-2xl overflow-hidden'>
        <Canvas>
          <Stats />
          <Environment files="/images/not-found/blackhole-skybox.exr" background />
          <Suspense fallback={null}>
            <Game />
          </Suspense>
        </Canvas> 
      </div>
    </div>
  )
};

export default NotFoundClient;