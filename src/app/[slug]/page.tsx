import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProjectBySlug as getMdxProject, getAllProjects } from '@/lib/mdx';
import { getProjectBySlug as getStaticProject, projects as staticProjects } from '@/data/projects';

// Combine static params for static generation
export async function generateStaticParams() {
    const mdxProjects = getAllProjects();
    const allSlugs = new Set([
        ...mdxProjects.map(p => p.slug),
        ...staticProjects.map(p => p.slug)
    ]);

    return Array.from(allSlugs).map((slug) => ({
        slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // Try finding in MDX first, then static
    let project: import('@/types').Project | null | undefined = getMdxProject(slug);
    let isMdx = true;

    if (!project) {
        project = getStaticProject(slug);
        isMdx = false;
    }

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

                <section className="prose prose-lg prose-gray max-w-none font-light">
                    {isMdx ? (
                        <MDXRemote source={project.content} />
                    ) : (
                        <div dangerouslySetInnerHTML={{ __html: project.content }} />
                    )}
                </section>
            </article>

            <div className="h-32" /> {/* Spacer */}
        </div>
    );
}
