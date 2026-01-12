import { Project } from '@/types';

const generateDate = (daysAgo: number) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
};

export const projects: Project[] = [
    {
        id: '1',
        slug: 'foam-memory-index',
        title: 'Foam Memory Index',
        date: generateDate(0), // Today
        type: 'essay',
        excerpt: 'Exploring the retention of structure in transient mediums.',
        content: '<p>Full essay content here...</p>'
    },
    {
        id: '2',
        slug: 'triangle-sonics-notes',
        title: 'Triangle Sonics Notes',
        date: generateDate(1),
        type: 'note',
        excerpt: 'Acoustic properties of pyramidal forms in virtual space.',
        content: '<p>Notes on sound...</p>'
    },
    {
        id: '3',
        slug: 'glass-topology-study-01',
        title: 'Glass Topology Study 01',
        date: generateDate(2),
        type: 'image',
        excerpt: 'Render study: refractive index 1.5, dispersion enabled.',
        content: '<p>Image details...</p>'
    },
    {
        id: '4',
        slug: 'three-scenes-suspended',
        title: 'Three Scenes in Suspended Time',
        date: generateDate(3),
        type: 'story',
        excerpt: 'A narrative fragment about a paused simulation.',
        content: '<p>Story content...</p>'
    },
    {
        id: '5',
        slug: 'micro-thought-taste',
        title: 'Micro-Thought: On Taste and Signal',
        date: generateDate(4),
        type: 'note',
        excerpt: 'Why curation is an act of noise reduction.',
        content: '<p>Thought...</p>'
    },
    {
        id: '6',
        slug: 'shader-sketch-milky',
        title: 'Shader Sketch: Milky Refraction',
        date: generateDate(5),
        type: 'sketch',
        excerpt: 'GLSL experiment with subsurface scattering approximations.',
        content: '<p>Shader code...</p>'
    },
    {
        id: '7',
        slug: 'field-notes-berlin',
        title: 'Field Notes: Berlin Interface Walk',
        date: generateDate(6),
        type: 'essay',
        excerpt: 'Observing physical UI patterns in urban transit.',
        content: '<p>Essay...</p>'
    },
    {
        id: '8',
        slug: 'image-set-porous',
        title: 'Image Set: Porous Surface Experiments',
        date: generateDate(7),
        type: 'image',
        excerpt: 'Procedural holes and erosion simulation.',
        content: '<p>Images...</p>'
    },
    {
        id: '9',
        slug: 'micro-thought-tooling',
        title: 'Micro-Thought: Tooling Becomes Cognition',
        date: generateDate(8),
        type: 'note',
        excerpt: 'We shape our linters, thereafter they shape us.',
        content: '<p>Note...</p>'
    },
    {
        id: '10',
        slug: 'short-essay-structures',
        title: 'Short Essay: Why I Collect Structures',
        date: generateDate(9),
        type: 'essay',
        excerpt: 'The archival impulse applied to topology.',
        content: '<p>Essay...</p>'
    },
    {
        id: '11',
        slug: 'story-fragment-archive',
        title: 'Story Fragment: The Archive That Floats',
        date: generateDate(10),
        type: 'story',
        excerpt: 'They built the library out of lighter-than-air aerogel.',
        content: '<p>Story...</p>'
    },
    {
        id: '12',
        slug: 'sketch-depth-time',
        title: 'Sketch: Depth as Time',
        date: generateDate(11),
        type: 'sketch',
        excerpt: 'Interactive canvas mapping Z-depth to cronological order.',
        content: '<p>Sketch...</p>'
    },
    {
        id: '13',
        slug: 'link-log-references',
        title: 'Link Log: 5 References I’m Stealing',
        date: generateDate(13),
        type: 'link',
        excerpt: 'Inspiration from biology papers and brutalist architecture.',
        content: '<p>Links...</p>'
    },
    {
        id: '14',
        slug: 'micro-thought-calm',
        title: 'Micro-Thought: Calm UI Is a Moral Choice',
        date: generateDate(14),
        type: 'note',
        excerpt: 'Against the attention economy of flashing red badges.',
        content: '<p>Note...</p>'
    },
    {
        id: '15',
        slug: 'image-cellular-blob',
        title: 'Image: Cellular Blob Render',
        date: generateDate(15),
        type: 'image',
        excerpt: 'Voronoi patterns mapped to sphere displacement.',
        content: '<p>Image...</p>'
    },
    {
        id: '16',
        slug: 'essay-anti-feed',
        title: 'Essay: The Anti-Feed Manifesto',
        date: generateDate(16),
        type: 'essay',
        excerpt: 'Why linear chronological feeds destroy context.',
        content: '<p>Essay...</p>'
    },
    {
        id: '17',
        slug: 'note-better-hover',
        title: 'Note: A Better Hover',
        date: generateDate(17),
        type: 'note',
        excerpt: 'Deconstructing the physics of the perfect mouseover state.',
        content: '<p>Note...</p>'
    },
    {
        id: '18',
        slug: 'sketch-camera-drift',
        title: 'Sketch: Camera Drift Study',
        date: generateDate(19),
        type: 'sketch',
        excerpt: 'Smooth dampening algorithms for virtual cameras.',
        content: '<p>Sketch...</p>'
    },
    {
        id: '19',
        slug: 'story-soft-machine',
        title: 'Story: The Soft Machine Room',
        date: generateDate(20),
        type: 'story',
        excerpt: 'The servers were silent and made of velvet.',
        content: '<p>Story...</p>'
    },
    {
        id: '20',
        slug: 'week-3-recap',
        title: 'Week 3 Recap: What Shipped, What Didn’t',
        date: generateDate(21), // 21 days ago
        type: 'essay',
        excerpt: 'A retrospective on the creation of this very timeline.',
        content: '<p>Recap...</p>'
    },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
