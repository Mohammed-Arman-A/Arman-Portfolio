# Arman Portfolio

A responsive technical portfolio for Mohammed Arman A, built from the supplied design brief. Includes an interactive particle swarm with perspective-projected 3D motion, architecture case studies, a six-discipline stack explorer, keyboard command palette, responsive navigation, reduced-motion support and accessible native dialogs.

## Run

No build step or package installation is required. Serve the folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Deploy the root folder as a static site on Vercel, Netlify, GitHub Pages or another static host.

## Content honesty

The supplied brief describes a design direction, not Arman's employment history, completed projects, credentials, email or resume. The included project architectures are explicitly marked as illustrative studies. No employer, metrics, certification or professional achievement is fabricated. Replace these studies with verified real projects and add professional details before using this as a finished career portfolio.

## Editing

- `index.html`: identity, section copy, GitHub links and metadata.
- `styles.css`: design tokens, layouts and responsive styles.
- `app.js`: architecture study content, stack explorer, navigation and particle scene.

The 3D scene has no third-party runtime dependency. Google Fonts are optional; system fonts provide a fallback. Rendering pauses outside the viewport and in hidden tabs. Mobile uses fewer nodes and a capped pixel ratio. Reduced motion uses a static scene. A pause control lets visitors stop or resume particle motion.

## AI focus and interactive lab

The portfolio now focuses on AI engineering, prompt engineering and agent creation. The AI Lab includes a clearly labeled local workflow simulation with three missions and two execution styles, plus a live structured-prompt composer. It does not call a language model or external tools. The hero includes switchable swarm, agent and reasoning modes, with a dependency-free Canvas renderer inspired by a binary supernova particle scene. Professional history is awaiting actual role details.

## Terrain and cursor atmosphere

`atmosphere.js` adapts the supplied Originkit cursor and WireTerrain references into a full-page Canvas terrain with a striped copper sun, pointer steering, a background pause control and a constellation cursor trail. The mesh uses perspective projection and layered noise, with fewer cells on phones. Cursor particles are limited to fine mouse pointers and stop after fading. Both effects respect reduced-motion preferences and pause in hidden tabs.

The atmosphere now bundles the original supplied React WireTerrain shaders and CursorAnimations preset. Only viewport sizing and pointer coordinates are adapted for a fixed background. Original terrain defaults (orange/red, density 120, speed 100, hover 200) and purple constellation cursor are preserved. `WireTerrain.tsx`, `CursorAnimations.tsx` and `atmosphere-entry.jsx` contain editable sources; `atmosphere.js` is the production React bundle. Browsers without WebGL use `atmosphere-fallback.js` for terrain.

## Cinematic portfolio chapters

Dedicated education, certification/badge archive, skills and professional experience sections now use sculptural CSS 3D artwork, pointer depth, scroll reveals and chapter navigation. Education tabs and credential filters support keyboard interaction. Personal education and work records remain explicitly empty until supplied. Rebuild the bundled original effects with `npm install` and `npm run build:effects`; the committed production bundle remains usable without a build step.

## Immersive visual redesign

The active website now uses `immersive.js`, built from `immersive-source.js` with Three.js. It replaces the terrain and sketch styling with illuminated 3D solids, rotating orbital rings, moving satellites and scroll-responsive camera composition. Education and credentials use continuously animated dimensional objects. A shaded perspective Canvas scene provides a non-WebGL fallback. The scene modes and motion control work in both renderers. Rebuild with `npm run build:scene`. Original Originkit files are retained as reference sources and no longer loaded by the active page.

## Bright cinematic edition

`cinema.js` adds a bounded loading entrance (skippable and capped at 1.8 seconds), layered scroll/pointer parallax, staggered visibility reveals, magnetic CTAs and click ripples. All effects respect reduced motion. The thinking section presents intuition, logic and creation. The visual palette now uses bright pearl and lilac surfaces with contrast-tuned purple text. Education and professional records still await supplied details.

Dark is now the default theme. The header theme toggle switches to the optional bright palette and saves the choice locally. Loading, scene motion, parallax, entrance reveals, hover depth and micro-interactions remain available in either theme.

## Profile details and technical polish

Education now lists BCA (data and AI, completed 2025) and MCA at Manipal Academy of Higher Education (AI, cloud and data engineering; ongoing, expected 2027). Experience includes an EY full-stack internship and infrastructure work at DXC Technology from January 2026, including AI core-team agent/bot automation. Credentials remain explicitly self-reported until official documents and titles are confirmed; uploaded documents with a different recipient name are not published. Text is slightly larger, model lighting is cooler and quieter, and pointer hover illumination extends across the viewport.

Profile correction: company is DXC Technology (D–X–C); the team label is XCPA Core Team, following the latest supplied wording.
