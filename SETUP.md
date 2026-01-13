# Portfolio Website - Complete Setup Guide

## ✨ Overview

Your portfolio is now equipped with a **smooth content pipeline** that makes it incredibly easy to add new projects, blog posts, images, and animations.

## 🎯 What You Get

1. **File-based content** - Write in MDX (Markdown + React)
2. **Auto-deployment** - Push to Git → Live on Vercel in minutes
3. **CLI tools** - Quick project scaffolding with `npm run new:project`
4. **Hot reload** - Changes appear instantly in dev mode
5. **Type-safe** - Full TypeScript support

## 🚀 Initial Setup (One-Time)

### 1. Initialize Git Repository

If not already done:

```bash
cd /Users/lisapleijt/B_Projects/Portfoliolibrary/3d-timeline-portfolio
git init
git add .
git commit -m "Initial commit: 3D Timeline Portfolio"
```

### 2. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `3d-timeline-portfolio` (or your preferred name)
3. **Don't** initialize with README (you already have files)
4. Click "Create repository"

### 3. Connect Local to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/3d-timeline-portfolio.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login (use GitHub account)
3. Click "Add New Project"
4. Import your `3d-timeline-portfolio` repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click "Deploy"

✅ Your site will be live at `https://your-project.vercel.app` in ~2 minutes!

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
cd /Users/lisapleijt/B_Projects/Portfoliolibrary/3d-timeline-portfolio
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? 3d-timeline-portfolio
# - Directory? ./
# - Override settings? No

# For production deployment:
vercel --prod
```

### 5. Configure Auto-Deployment

Vercel automatically sets up:
- ✅ **Main branch** → Production deploys
- ✅ **Other branches** → Preview deploys
- ✅ **Every commit** → Auto-build & deploy

No extra config needed!

## 📝 Your Daily Workflow

### Creating New Content

```bash
# Start dev server
npm run dev

# In another terminal, create new project
npm run new:project

# Answer prompts:
# Title: Glass Topology Study 02
# Type: image
# Excerpt: Exploring refractive surfaces

# Edit the generated file:
# content/projects/glass-topology-study-02.mdx
```

### Adding Images/Animations

```bash
# Copy image to public folder
cp ~/Downloads/my-render.jpg public/images/

# Reference in MDX:
# ![My Render](/images/my-render.jpg)
```

### Publishing to Web

```bash
# Commit your changes
git add .
git commit -m "Add: Glass Topology Study 02"

# Push to GitHub
git push

# ✨ That's it! Vercel auto-deploys in ~2 min
```

## 🔄 Content Migration

### From Old projects.ts to New MDX System

Your old `src/data/projects.ts` file can coexist with the new MDX system. To migrate:

**Option 1: Keep Both (Recommended for now)**
- MDX files in `content/projects/` load automatically
- Update `src/data/projects.ts` to import from MDX:

```typescript
import { getAllProjects } from '@/lib/mdx';

export const projects = getAllProjects();
```

**Option 2: Convert Manually**
- Create MDX files for important projects
- Delete old entries from `projects.ts`
- Gradual migration

## 📂 Project Structure

```
3d-timeline-portfolio/
├── .agent/workflows/
│   └── content-pipeline.md      # This workflow guide
├── content/
│   ├── projects/                # 👈 Add MDX files here
│   │   ├── foam-memory-index.mdx
│   │   └── glass-topology-study-01.mdx
│   └── blog/                    # For longer blog posts
├── public/
│   ├── images/                  # 👈 Add images here
│   ├── animations/              # 👈 Add videos/GIFs here
│   └── files/                   # Downloads, PDFs
├── scripts/
│   └── new-content.js           # Content generator CLI
├── src/
│   ├── app/                     # Next.js pages
│   ├── components/              # React components
│   ├── lib/
│   │   ├── mdx.ts              # MDX content loader
│   │   └── store.ts            # Zustand state
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   └── data/
│       └── projects.ts         # (Legacy - can migrate to MDX)
├── package.json
└── README.md
```

## 🎨 Customization

### Custom Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS (Vercel provides instructions)

### Environment Variables

For API keys, secrets, etc:

1. Vercel dashboard → Settings → Environment Variables
2. Add variables
3. Redeploy for changes to take effect

### Build Configuration

Edit `next.config.ts` for:
- Image optimization
- Redirects
- Headers
- etc.

## 🔧 NPM Scripts Reference

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production (test locally)
npm run start        # Start production server
npm run lint         # Run ESLint
npm run new:project  # Create new project (interactive)
npm run new:blog     # Create new blog post (interactive)
npm run deploy       # Deploy to Vercel (if using CLI)
```

## 🚨 Troubleshooting

### "Module not found: gray-matter"

```bash
npm install gray-matter next-mdx-remote
```

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Test locally: `npm run build`
3. Common issues:
   - Missing frontmatter in MDX
   - Invalid image paths
   - TypeScript errors

### Content Not Updating

```bash
# Hard refresh: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

# Or restart dev server:
# Ctrl+C
npm run dev
```

### Git Issues

```bash
# Check remote
git remote -v

# Reset to specific commit
git log
git reset --hard <commit-hash>

# Force push (careful!)
git push --force
```

## 📊 Analytics (Optional)

### Vercel Analytics

Free tier includes:
1. Vercel dashboard → Analytics tab
2. Click "Enable" (one click)
3. View traffic, performance, etc.

### Custom Analytics

Add to `src/app/layout.tsx`:
- Google Analytics
- Plausible
- Fathom
- etc.

## 🎯 Next Steps

1. ✅ Complete Vercel setup
2. ✅ Create your first project with `npm run new:project`
3. ✅ Add some images to `public/images/`
4. ✅ Push to GitHub and watch it deploy!
5. 🎨 Customize the design
6. 📱 Test on mobile
7. 🔗 Share with the world!

## 💡 Pro Tips

1. **Use branches for experiments**: `git checkout -b experiment`
2. **Preview URLs**: Every branch gets a unique URL
3. **Commit often**: Small commits > large ones
4. **Descriptive messages**: "Add foam study" > "update"
5. **Test builds locally** before pushing: `npm run build`

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

**Questions?** Check `/content-pipeline` workflow or explore the code!

Now go create something beautiful! 🎨✨
