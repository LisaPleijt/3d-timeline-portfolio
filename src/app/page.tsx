import { SceneLoader } from '@/components/canvas/SceneLoader';
import { FallbackList } from '@/components/dom/FallbackList';
import { getAllProjects } from '@/lib/mdx';
import { projects as staticProjects } from '@/data/projects';

export default function Home() {
  // Fetch MDX projects
  const mdxProjects = getAllProjects();

  // Combine with static projects (filtering out duplicates by slug if any)
  const allProjects = [...mdxProjects, ...staticProjects.filter(sp => !mdxProjects.some(mp => mp.slug === sp.slug))]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* 3D Scene Layer */}
      <SceneLoader projects={allProjects} />

      {/* UI Overlay */}
      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h1 className="text-2xl font-light tracking-wide text-gray-800">Portfolio Archive</h1>
        <p className="text-sm text-gray-600 mt-1">Spatial Timeline</p>
      </div>

      {/* Fallback / SEO Content (Hidden visually when 3D is active, customizable) */}
      <div className="absolute inset-0 z-[-1] opacity-0 pointer-events-none" aria-hidden="true">
        <FallbackList projects={allProjects} />
      </div>
    </main>
  );
}
