# CLAUDE.md

## Project
Trimsel - AI-Powered Software Development Company website
Tech stack: Next.js 16.1.6 (App Router) + Tailwind CSS
Repo: github.com/Trimsel/trimsel_website_new
Branch: mobile_resp_opti

## What's Been Done

### SEO Code Fixes (21 issues fixed)
- 3 marquee ssr:false → ssr:true (Client.js, testimonial.js, Contactform.js)
- Homepage case study carousel: translateX → CSS opacity/z-index (all slides in DOM)
- FAQ accordion: conditional render → CSS max-height toggle (all answers in DOM)
- 9 href="#" links fixed (contact, case studies, digital marketing)
- 8 heading hierarchy fixes (H3→H2 across homepage, about, web dev)
- 15 alt text fixes across 6 files
- Tailwind darkMode removed, prefers-reduced-motion guard added
- Web dev tool tabs: all tab content in DOM via CSS hidden class

### Code Quality & Performance
- Removed Three.js + framer-motion + react-icons (-755KB, 58 packages)
- AiHero.js converted to CSS particle effect (server component)
- "use client" removed from AI dev and About pages
- Footer centralized to layout.js (removed from 14 files)
- Image sizes prop added to 14 images
- font-display: swap on all 4 Gilroy @font-face
- Tailwind class purging fixed (tab classes moved to constants)
- Duplicate/unused CSS removed from globals.css
- Hydration mismatches fixed (marquee autoFill, html/body suppressHydrationWarning)

### Mobile & Tablet Fixes
- Responsive tab gaps and tool icon spacing (web dev + mobile app pages)
- Touch targets on carousel nav buttons (44px minimum)
- Carousel container min-height for mobile
- FAQ animation smoothed (max-h-[600px], transition timing)
- Tablet carousel fixed (responsive heights, w-full cards)
- Contact page mobile layout (stacking grid, responsive gaps)

### Meta Tags & Schema
- Metadata on all 14 pages (title, description, OG, Twitter, canonical)
- 6 client pages split into server wrapper + client component for metadata
- JSON-LD: Organization (layout.js), FAQPage (homepage), SoftwareCompany (contact), 6 Service schemas
- Blog posts: Article + FAQ schemas from frontmatter

### Blog System
- 11 MDX posts migrated from existing site
- Blog rendering: gray-matter + next-mdx-remote + reading-time
- Blog listing page with tag filter
- Blog post page with: full-width banner, breadcrumb overlay, prose typography
- Table of Contents sidebar with IntersectionObserver active heading
- Share buttons (LinkedIn, X, Facebook, WhatsApp)
- FAQ accordion on blog posts (BlogFaq.js client component)
- Decap CMS configured (/admin)

### AI & Crawl Configuration
- sitemap.js: 14 pages + 11 blog posts with priorities
- robots.js: AI crawler rules (allow citation, block training)
- llms.txt: full site index for LLM discoverability
- 2 Tirunelveli listicle posts set to noindex

## What's Still Pending

### Design & Content
- Some pages still need design updates (identify which)
- Content updates on pages with dummy text
- Blog post: add missing /images/mobile-app-growth.webp image

### Pre-Launch
- Enable indexing: change robots index:false → index:true in metadata
- Set up 301 redirects if any URL slugs changed
- Submit sitemap to Google Search Console
- Set up Google Analytics / GA4
- Configure Decap CMS GitHub OAuth
- Add real author names/bios to blog posts (E-E-A-T)
- Create OG default image (/public/og-default.png)
- Test all pages in Google PageSpeed Insights
- Final mobile QA across all pages

## File Structure Notes
- Blog content: /content/blog/*.mdx
- Blog images: /public/images/blog/
- Shared metadata helper: src/lib/metadata.js
- Blog utilities: src/lib/blog.js
- Client components split from pages: HomeClient.js, ContactUsClient.js, PortfolioClient.js, CloudConsultingClient.js, DevOpsClient.js, WebDevelopmentClient.js, MobileAppDevelopmentClient.js
- CMS admin: /public/admin/

## Key Decisions
- Using Next.js built-in metadata API (not next-seo package)
- JSON-LD via manual <script> tags (no package)
- Decap CMS with GitHub backend
- No dark mode (removed from Tailwind config)
- Header stays per-page due to transparent prop variation
- Portfolio page keeps "use client" (has filter UI)
