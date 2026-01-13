'use client';

import dynamic from 'next/dynamic';
import { Project } from '@/types';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 flex items-center justify-center text-gray-500">Loading Space...</div>
});

interface SceneLoaderProps {
    projects: Project[];
}

export function SceneLoader({ projects }: SceneLoaderProps) {
    return <Scene projects={projects} />;
}
