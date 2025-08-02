'use client';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ResumeScene() {
  const groupRef = useRef();

  const particles = useMemo(() => {
    const points = [];
    for (let i = 0; i < 300; i++) {
      points.push([
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(5),
        THREE.MathUtils.randFloatSpread(10),
      ]);
    }
    return points;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map(([x, y, z], idx) => (
        <mesh key={idx} position={[x, y, z]}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      ))}
    </group>
  );
}
