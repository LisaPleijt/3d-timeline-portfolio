#!/usr/bin/env node

/**
 * Content Creation CLI
 * Quick tool to scaffold new projects/blog posts
 * 
 * Usage:
 *   npm run new:project
 *   npm run new:blog
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim();
}

function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

async function createProject() {
    console.log('\n📝 Creating a new project...\n');

    const title = await question('Title: ');
    const typeInput = await question('Type (essay/note/image/story/sketch/link): ');
    const excerpt = await question('Short excerpt: ');

    const slug = slugify(title);
    const date = getTodayDate();
    const type = typeInput || 'note';

    const template = `---
id: '${Date.now()}'
title: '${title}'
date: '${date}'
type: '${type}'
excerpt: '${excerpt}'
image: '/images/${slug}.jpg'
---

# ${title}

${excerpt}

## Content

Write your content here...

---

*Created: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}*
`;

    const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.mdx`);

    fs.writeFileSync(filePath, template);

    console.log(`\n✅ Created: ${filePath}`);
    console.log(`📂 Edit it now and it will auto-reload!\n`);

    rl.close();
}

async function createBlog() {
    console.log('\n📝 Creating a new blog post...\n');

    const title = await question('Title: ');
    const excerpt = await question('Short excerpt: ');

    const slug = slugify(title);
    const date = getTodayDate();

    const template = `---
title: '${title}'
date: '${date}'
excerpt: '${excerpt}'
author: 'Lisa Pleijt'
tags: []
---

# ${title}

${excerpt}

## Introduction

Write your blog post here...

`;

    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);

    fs.writeFileSync(filePath, template);

    console.log(`\n✅ Created: ${filePath}`);
    console.log(`📂 Edit it now and it will auto-reload!\n`);

    rl.close();
}

// Check command
const command = process.argv[2];

if (command === 'project') {
    createProject();
} else if (command === 'blog') {
    createBlog();
} else {
    console.log('Usage: node scripts/new-content.js [project|blog]');
    rl.close();
}
