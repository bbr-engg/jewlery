'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei';
import { type FC } from 'react';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Extend Three.js elements to fix TypeScript errors
extend(THREE);

interface SceneProps {
  initialRotation: [number, number, number];
}

const ThreeScene: FC<SceneProps> = ({ initialRotation }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Check if the canvas was created successfully
    if (canvasRef.current) {
      setIsLoaded(true);
    }

    // Cleanup function
    return () => {
      setIsLoaded(false);
    };
  }, []);

  if (!isLoaded) {
    return null;
  }

  return (
    <Canvas
      ref={canvasRef}
      shadows
      dpr={[1, 2]}
      camera={{ fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <Stage environment="city" intensity={0.6}>
        <mesh rotation={initialRotation}>
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </Stage>
      <OrbitControls
        autoRotate
        autoRotateSpeed={4}
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
    </Canvas>
  );
};

export default ThreeScene; 