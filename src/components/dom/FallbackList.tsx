import Link from 'next/link';
import { projects } from '@/data/projects';

export function FallbackList() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-24">
            <h2 className="text-xl font-light mb-8 text-gray-400 uppercase tracking-widest">Index</h2>
            <ul className="space-y-4">
                {projects.map((project) => (
                    <li key={project.id} className="border-b border-gray-100 last:border-0 pb-4">
                        <Link href={`/${project.slug}`} className="group block">
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs font-mono text-gray-400">{project.date}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 max-w-xl truncate">{project.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
