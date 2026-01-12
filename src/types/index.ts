export type ProjectType = 'essay' | 'note' | 'image' | 'story' | 'sketch' | 'link';

export interface Project {
    id: string;
    slug: string;
    title: string;
    date: string; // ISO date
    type: ProjectType;
    excerpt: string;
    content: string; // Simplified for prototype: raw text or html string
    // For prototype, we might skip actual image assets if not strictly needed, 
    // but let's keep a placeholder prop
    image?: string;
}
