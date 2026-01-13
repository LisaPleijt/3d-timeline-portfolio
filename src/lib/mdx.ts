import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, ProjectType } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all MDX files from a directory
 */
export function getAllContentFiles(type: 'projects' | 'blog'): string[] {
    const dir = path.join(contentDirectory, type);

    if (!fs.existsSync(dir)) {
        return [];
    }

    return fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));
}

/**
 * Get content from a single MDX file
 */
export function getContentBySlug(slug: string, type: 'projects' | 'blog') {
    const dir = path.join(contentDirectory, type);
    const filePath = path.join(dir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        frontmatter: data,
        content,
    };
}

/**
 * Get all projects as an array (compatible with your current setup)
 */
export function getAllProjects(): Project[] {
    const files = getAllContentFiles('projects');

    const projects = files.map(filename => {
        const slug = filename.replace(/\.mdx$/, '');
        const result = getContentBySlug(slug, 'projects');

        if (!result) return null;

        return {
            id: result.frontmatter.id || slug,
            slug,
            title: result.frontmatter.title,
            date: result.frontmatter.date,
            type: result.frontmatter.type as ProjectType,
            excerpt: result.frontmatter.excerpt || '',
            content: result.content,
            image: result.frontmatter.image,
        } as Project;
    }).filter(Boolean) as Project[];

    // Sort by date (newest first)
    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | null {
    const result = getContentBySlug(slug, 'projects');

    if (!result) return null;

    return {
        id: result.frontmatter.id || slug,
        slug,
        title: result.frontmatter.title,
        date: result.frontmatter.date,
        type: result.frontmatter.type as ProjectType,
        excerpt: result.frontmatter.excerpt || '',
        content: result.content,
        image: result.frontmatter.image,
    };
}
