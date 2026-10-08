# Arman Portfolio

Live: https://mohammed-arman-a.github.io/Arman-Portfolio/

Static portfolio for Mohammed Arman A. Portfolio presents introduction, education, skills, DXC/EY experience and credentials first. The separate AI Lab contains a local portfolio guide, workflow simulation, prompt composer, playful prompt remixer and illustrative architecture studies.

## Rendering and interaction

`immersive-source.js` implements three distinct Three.js models: Neural is a connected node network, Agents is a robot, and Reasoning is a branching logic graph. A perspective Canvas fallback preserves these model distinctions without WebGL. Motion can be paused and respects reduced-motion preferences. Dark is default; a saved light-theme option is available. Loader, parallax, reveals, cursor illumination and hover depth are handled by `cinema.js` and the shared styles.

## Content

Education and experience use supplied profile details. Credentials remain self-reported pending official titles and matching documents. Architecture studies are explicitly illustrative. Lab demos run locally and do not call an LLM or external tools.

## Development

Serve this directory with any static server. Committed bundles require no build for GitHub Pages. Run `npm install` and `npm run build:scene` to rebuild Three.js after source edits. `workspaces.js` handles view routing, portfolio guide and remix interaction; `app.js` handles stack explorer, workflow, prompt composer, dialogs and navigation.

Original Originkit files are retained as reference sources and are not loaded by the active website.
