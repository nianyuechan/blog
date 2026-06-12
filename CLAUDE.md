# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog (大家の幻想乡) built with **Hexo 8.1.1** and the **hexo-theme-reimu** theme. Chinese-language (zh-CN), deployed to GitHub Pages at `https://nianyuechan.github.io/blog`.

## Commands

```bash
npm run server    # Dev server at http://localhost:4000/blog/
npm run build     # Generate static site (hexo generate)
npm run clean     # Clear cache and generated files (hexo clean)
npm run deploy    # Deploy to GitHub Pages (hexo deploy)
npx hexo new post "Title"  # Create a new post from scaffold
```

## Architecture

- **`_config.yml`** — Main Hexo config (permalink pattern `:year/:month/:day/:title/`, deploy target, markdown-it-plus settings)
- **`_config.reimu.yml`** — All theme configuration (menu, sidebar, comments, music player, Live2D, dark mode, CDN, etc.). This is Hexo's alternate theme config convention — the `themes/` directory is empty; the theme loads from `node_modules/hexo-theme-reimu`.
- **`source/_posts/`** — Blog posts (Markdown with YAML front-matter)
- **`source/images/<post-slug>/`** — Each post has a dedicated image folder. Reference images as `/images/<folder>/<file>.webp`
- **`source/_data/covers.yml`** — Random cover images array
- **`source/_data/avatar/`** — Author avatar images
- **`source/about/`**, **`source/friend/`** — Static pages (friend links data in `friend/_data.yml`)
- **`scaffolds/post.md`** — Post template with front-matter fields

## Post Front-Matter

```yaml
title:
date:
tags:
categories:
cover:
sticky: false
comments:
mermaid: false
copyright:
sponsor:
```

Additional optional fields used in some posts: `banner`, `description`, `toc`.

## Key Dependencies

- `@reimujs/hexo-renderer-markdown-it-plus` — Markdown with LaTeX
- `hexo-filter-mermaid-diagrams` — Mermaid diagrams
- `hexo-all-minifier` — HTML/CSS/JS/image minification (enabled in `_config.yml`)
- `hexo-deployer-git` — Deploys to `gh-pages` branch of `https://github.com/nianyuechan/blog`
- `hexo-tag-embed` — `{% externalLinkCard %}` tag for link cards
- `@reimujs/hexo-algoliasearch` — Algolia search (configured but currently disabled)

## Deployment

Git-based: `hexo deploy` pushes the generated `public/` directory to the `gh-pages` branch. No CI/CD workflows — only Dependabot is configured for weekly npm updates.

## Conventions

- Vendor CDN uses `npm.webcache.cn` (Chinese mirror) — configured in `_config.reimu.yml`
- Windows-centric project: startup scripts are `.bat`/`.ps1`, `.gitignore` excludes `Thumbs.db`/`desktop.ini`
- Post filenames use English slugs (recent commits renamed Chinese filenames to English)
