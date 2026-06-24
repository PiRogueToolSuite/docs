# PiRogue Tool Suite — Documentation

Documentation site for the [PiRogue Tool Suite](https://pts-project.org), built with [Docusaurus](https://docusaurus.io/).

## Prerequisites

- Node.js ≥ 20
- npm

## Local development

```bash
npm install
npm start
```

Opens the site at `http://localhost:3000`. Changes to content reload live.

## Build

```bash
npm run build
```

Generates static output to `build/`. Preview the production build locally:

```bash
npm run serve
```

## Publishing to GitHub

### First push

```bash
git init
git add .
git commit -m "Initial documentation"
git branch -M main
git remote add origin https://github.com/PiRogueToolSuite/pts-docs.git
git push -u origin main
```

### Subsequent updates

```bash
git add .
git commit -m "Update documentation"
git push
```

### What to exclude

Add a `.gitignore` at the root with at least:

```
node_modules/
build/
.docusaurus/
```

### Deploy to GitHub Pages

Set `url` and `organizationName`/`projectName` in `docusaurus.config.js` to match your repository, then:

```bash
GIT_USER=<your-github-username> npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch automatically.

For SSH authentication:

```bash
USE_SSH=true npm run deploy
```

## Project structure

```
docs/               Documentation content (MDX)
  PiRogue-ToolSuite/  Suite overview, background, philosophy
  PiRogue/            PiRogue setup and usage
  Colander/           Colander platform
  Threatr/            Threatr threat intelligence
  Mongoose/           Mongoose mobile forensics
  Recipes/            Step-by-step guides
blog/               Blog posts and reports
src/
  pages/index.js    Homepage
  css/custom.css    Brand theme (PTS purple #7122dc)
  components/       Shared MDX components
static/img/         Images, logos, favicons
docusaurus.config.js  Site configuration
```
