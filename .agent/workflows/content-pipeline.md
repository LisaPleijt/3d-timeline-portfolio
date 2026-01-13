---
description: How to add new content to your portfolio
---

# Content Pipeline Workflow

This is your smooth, friction-free pipeline for adding new projects, blog posts, images, and animations to your portfolio website.

## 🚀 Quick Start: Adding New Content

### Create a New Project

```bash
npm run new:project
```

This will:
1. Ask you for a title, type, and excerpt
2. Generate a new `.mdx` file in `content/projects/`
3. Auto-slug the filename
4. Pre-fill frontmatter with today's date
5. Open ready for you to edit

### Create a New Blog Post

```bash
npm run new:blog
```

Same flow, but creates files in `content/blog/`.

## 📝 Manual Content Creation

If you prefer to create files manually:

1. Create a new file: `content/projects/my-project-name.mdx`
2. Add frontmatter (see template below)
3. Write your content in Markdown
4. Save and reload—it auto-updates!

### MDX Template

```mdx
---
id: 'unique-id'
title: 'Your Project Title'
date: '2026-01-13'
type: 'essay'  # essay | note | image | story | sketch | link
excerpt: 'A short description that appears on cards'
image: '/images/my-image.jpg'
---

# Your Project Title

Write your content here using **Markdown** and React components!

## Rich Content Support

- Code blocks with syntax highlighting
- Images and videos
- Custom React components
- Embedded animations

```javascript
const example = "You can include code!";
```

![Alt text](/images/example.jpg)
```

## 🎨 Adding Images & Animations

### Static Images

1. Drop images in `public/images/`
2. Reference in MDX: `![Alt](/images/my-image.jpg)`
3. Or in frontmatter: `image: '/images/my-image.jpg'`

### Animations/Videos

1. Add to `public/animations/`
2. Embed in MDX:

```mdx
<video autoPlay loop muted>
  <source src="/animations/my-anim.mp4" type="video/mp4" />
</video>
```

### Generated Images (AI)

If you create images with AI tools:
1. Save to `public/images/generated/`
2. Use descriptive names: `foam-structure-blue-2026-01-13.jpg`

## 🚢 Deploying to Vercel

### First-Time Setup

// turbo
```bash
# Install Vercel CLI
npm i -g vercel

# turbo
# Login to Vercel
vercel login

# turbo
# Link your project
vercel link
```

### Deploying Updates

**Option 1: Git Push (Recommended)**

```bash
git add .
git commit -m "Add new project: Foam Memory Index"
git push
```

✨ Vercel auto-deploys on push to `main`!

**Option 2: Manual Deploy**

```bash
npm run deploy
```

### Preview Deployments

Every git branch gets a preview URL automatically. Great for testing!

```bash
git checkout -b new-feature
git push origin new-feature
# → Vercel creates preview URL
```

## 🔄 Daily Workflow

Here's your typical flow:

1. **New idea?**
   ```bash
   npm run new:project
   ```

2. **Write content** in your editor
   - Use MDX for rich content
   - Add images to `public/images/`
   - Preview at `localhost:3000`

3. **Commit & push**
   ```bash
   git add content/projects/my-new-project.mdx public/images/
   git commit -m "Add: My New Project"
   git push
   ```

4. **Live in ~2 minutes** ☕
   - Vercel auto-builds
   - Check deployment at vercel.com/dashboard

## 📂 Directory Structure

```
3d-timeline-portfolio/
├── content/
│   ├── projects/        # Your portfolio projects
│   │   ├── foam-memory-index.mdx
│   │   └── glass-topology-study-01.mdx
│   └── blog/           # Long-form blog posts
│       └── my-post.mdx
├── public/
│   ├── images/         # Static images
│   ├── animations/     # Videos, GIFs, etc.
│   └── files/          # Downloads, PDFs, etc.
├── scripts/
│   └── new-content.js  # Content generator
└── src/
    ├── lib/
    │   └── mdx.ts      # MDX loader
    └── data/
        └── projects.ts # (deprecated, use MDX now)
```

## 🎯 Content Types

Your portfolio supports these types:

- **essay**: Long-form writing
- **note**: Short thoughts, micro-essays
- **image**: Visual work, renders, photos
- **story**: Creative fiction, narratives
- **sketch**: Code experiments, interactive pieces
- **link**: Curated references, link logs

## 💡 Tips

1. **Use consistent naming**: `foam-structure-01.mdx` not `FoAmStRuCtUrE1.mdx`
2. **Date in frontmatter**: Controls position in 3D timeline
3. **Commit often**: Small commits = easier to track changes
4. **Preview before deploy**: Run `npm run build` locally to catch errors

## 🔧 Advanced: Custom React Components

You can use React components directly in MDX:

```mdx
import { MyComponent } from '@/components/MyComponent'

<MyComponent prop="value" />
```

Perfect for interactive demos, data visualizations, or custom galleries!

## 🚨 Troubleshooting

**Build fails?**
- Check MDX syntax (closing tags, valid frontmatter)
- Run `npm run build` locally first

**Images not showing?**
- Must be in `public/` folder
- Reference without `public/`: `/images/foo.jpg` ✅ not `/public/images/foo.jpg` ❌

**Content not updating?**
- Hard refresh: `Cmd+Shift+R`
- Restart dev server: `Ctrl+C` then `npm run dev`

---

Now go make something beautiful! 🎨
