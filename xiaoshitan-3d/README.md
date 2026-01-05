# xiaoshitan-3d

An interactive 3D literary geography model inspired by **《小石潭记》**. The project combines CesiumJS for geographic context with Three.js for scene elements such as water, rocks, and bamboo, emphasizing clarity for educational research and textual interpretation.

## Project Goals
- Present terrain and camera control through CesiumJS.
- Render literary scene elements (water surface, vegetation placeholders, narrative path) with Three.js.
- Allow text-driven interactions via data mappings for academic exploration.

## Getting Started

### Prerequisites
- Node.js 18+

### Installation
```bash
cd xiaoshitan-3d
npm install
```

### Run Locally
```bash
npm run dev
```
This launches a static server at `http://localhost:3000`. Open `public/index.html` to view the experience.

## Educational Intent
The scene is structured to support close reading and teaching:
- Camera presets abstract narrative viewpoints (approach, overlook, focus areas).
- Water and vegetation placeholders emphasize spatial relationships over visual fidelity.
- Text mappings (`src/data/textMapping.json`) decouple literary sections from camera or scene actions, enabling academic annotation without altering core code.

## Notes
- External assets (textures, audio) are intentionally omitted. Add them as needed where TODOs or extension hooks are present.
