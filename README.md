<div align="center">
<img width="60px" src="https://pts-project.org/android-chrome-512x512.png">
<h1>PiRogue Tool Suite documentation</h1>
<p>
The documentation site of the PiRogue Tool Suite, built with Docusaurus.
</p>
<p>
<a href="https://pts-project.org">Website</a> | 
<a href="https://docs.pts-project.org">Documentation</a> | 
<a href="https://discord.com/invite/qGX73GYNdp">Support</a>
</p>
</div>


## Getting Started

This is a quick guide to contributing to the documentation.

### Setting Up
Node.js 20 or newer and `npm` are required. Install the dependencies with:
```
npm install
```

### Development
Start the site locally and automatically reload it while editing the content:
```
npm start
```
The site opens on `http://localhost:3000`.

### Build
Build the static site with the `build` command. The output is written to `build/`:
```
npm run build
```

### Preview
To preview the production build locally, use the `serve` command:
```
npm run serve
```


## Project structure

```
docs/                   Documentation (MDX)
  PiRogue-ToolSuite/    Suite overview, background, philosophy
  PiRogue/              The PiRogue network probe
  Colander/             Case and digital investigation platform
  Threatr/              Threat intelligence
  Mandolin/             Offline file analysis
  Octopus/              Dynamic analysis of Android apps
  Mongoose/             Network event collection and enrichment
  Recipes/              Step-by-step recipes
guides/                 Guides, shown in their own "Guides" tab
blog/                   Blog posts and reports
src/
  pages/                Home page and contact page
  css/custom.css        Brand theme (PTS purple #7122dc)
  components/           Shared MDX components
static/img/             Images, logos, favicons
docusaurus.config.js    Site configuration
```

Each product has a Quick start, an Overview and, when needed, an `advanced/` folder for the deeper topics. Keep the Quick start and Overview pages up to date first, they are the most read.

If you move a page, add a redirect for its old URL in `docusaurus.config.js` so that existing links keep working.


## Contributing
If you find any issues or have suggestions, please submit a pull request.

## Community
[GitHub](https://github.com/PiRogueToolSuite) | 
[Mastodon](https://infosec.exchange/@pts) | 
[X](https://x.com/PiRogueTools) | 
[Discord](https://discord.com/invite/qGX73GYNdp) | 
[Open Collective](https://opencollective.com/pts)
