'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

// Loading component
export function JewelryViewerLoading() {
  return (
    <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-700 border-t-purple-600 dark:border-t-purple-400 rounded-full animate-spin" />
    </div>
  );
}

// Error fallback
const ErrorFallback = () => (
  <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center p-4">
    <div className="text-center text-gray-500 dark:text-gray-400">
      <p>Unable to load 3D viewer.</p>
      <p className="text-sm">Please try refreshing the page.</p>
    </div>
  </div>
);

// Dynamically import the Three.js scene with strict client-side only loading
const ThreeScene = dynamic(
  () => import('./three-scene-wrapper').then(mod => mod.default),
  {
    ssr: false,
    loading: JewelryViewerLoading,
  }
);

interface JewelryViewer3DProps {
  initialRotation?: [number, number, number];
}

export function JewelryViewer3D({ 
  initialRotation = [0, 0, 0] 
}: JewelryViewer3DProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <JewelryViewerLoading />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="w-full aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <Suspense fallback={<JewelryViewerLoading />}>
          <ThreeScene initialRotation={initialRotation} />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
} 