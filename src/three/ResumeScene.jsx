'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ResumeScene() {
  const meshRef = useRef(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color={'#38bdf8'} />
    </mesh>
  );
}