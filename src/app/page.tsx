'use client';

import dynamic from 'next/dynamic';
import { FallbackList } from '@/components/dom/FallbackList';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 flex items-center justify-center text-gray-500">Loading Space...</div>
});

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* 3D Scene Layer */}
      <Scene />

      {/* UI Overlay */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h1 className="text-2xl font-light tracking-wide text-gray-800">Portfolio Archive</h1>
        <p className="text-sm text-gray-600 mt-1">Spatial Timeline</p>
      </div>

      {/* Fallback / SEO Content (Hidden visually when 3D is active, customizable) */}
      <div className="absolute inset-0 z-[-1] opacity-0 pointer-events-none" aria-hidden="true">
        <FallbackList />
      </div>
    </main>
  );
}
