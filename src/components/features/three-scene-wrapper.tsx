'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create a loading component
const LoadingSpinner = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
    <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin" />
  </div>
);

// Dynamically import Three.js components
const ThreeCanvas = dynamic(
  () => import('./three-scene-component'),
  {
    ssr: false,
    loading: LoadingSpinner,
  }
);

interface ThreeSceneProps {
  initialRotation: [number, number, number];
}

export default function ThreeSceneWrapper({ initialRotation }: ThreeSceneProps) {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if window and WebGL are available
    const checkEnvironment = () => {
      try {
        if (typeof window !== 'undefined' && window.WebGLRenderingContext) {
          const canvas = document.createElement('canvas');
          const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
          if (!gl) {
            throw new Error('WebGL not supported');
          }
          setIsReady(true);
        }
      } catch (error) {
        console.error('WebGL not supported:', error);
        setIsReady(false);
      }
    };

    checkEnvironment();

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  if (!isReady) {
    return <LoadingSpinner />;
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      <ThreeCanvas initialRotation={initialRotation} />
    </div>
  );
} 