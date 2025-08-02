'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import ResumeScene from '@/three/ResumeScene';

export default function Hero() {
  return (
    <section className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <ResumeScene />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Mehul</h1>
        <p className="text-lg text-accent">Frontend Developer | AI Enthusiast</p>
      </div>
    </section>
  );
}
