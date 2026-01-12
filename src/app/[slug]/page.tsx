import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/data/projects';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // Need to make sure heroicons is installed or use SVG

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen w-full bg-[#f0f2f5] text-[#1a1a1a] overflow-auto px-4 py-12 md:px-8">
            {/* Back Button */}
            <div className="max-w-3xl mx-auto mb-12">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-widest"
                >
                    <span className="mr-2">←</span> Back to Space
                </Link>
            </div>

            <article className="max-w-3xl mx-auto bg-white p-8 md:p-16 shadow-sm rounded-sm">
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <div className="flex items-baseline justify-between mb-4">
                        <span className="text-xs font-mono text-gray-400 uppercase">{project.date}</span>
                        <span className="text-xs font-mono text-gray-400 uppercase">{project.type}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-gray-900 mb-6">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        {project.excerpt}
                    </p>
                </header>

                <section
                    className="prose prose-lg prose-gray max-w-none font-light"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />
            </article>

            <div className="h-32" /> {/* Spacer */}
        </div>
    );
}
