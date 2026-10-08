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
