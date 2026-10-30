# Kivora UI

A complete, zero-dependency UI/UX library for all devices — plus a visual page
builder and a live code editor. No build step, no frameworks, no packages to
install. Open the files in a browser (or deploy the folder) and it works.

- **Library** — `css/kivora.css` + `js/kivora.js`: tokens, 20+ components,
  page templates (dashboard, docs, invoice, proposal, report, book), charts,
  carousel, tabs, accordion, modal, toast, dropdown, typewriter, marquee,
  scroll reveals, and a light/dark theme.
- **Showcase** — `index.html`: every component and template, live, with a
  hash router (`#/home`, `#/landing`, `#/dashboard`, …) and a JS-builder demo.
- **Visual builder** — `builder.html`: drag or tap components onto a page,
  edit props in the inspector, preview at desktop / tablet / phone widths,
  undo/redo, and export standalone HTML or a JSON page spec.
- **Code editor** — `editor.html`: HTML/CSS/JS panes with syntax highlighting,
  live preview, an in-page console, templates (including a JSON page spec),
  and save / download / copy.

## Quick start

```html
<link rel="stylesheet" href="css/kivora.css">
<script src="js/kivora.js"></script>
```

Then use components as plain HTML (classes prefixed `kv-`) or build them from
JavaScript:

```js
UI.create({
  type: 'Page', props: {}, children: [
    { type: 'Navbar', props: { brand: 'Kivora', links: [{ label: 'Features', href: '#f' }] } },
    { type: 'Hero', props: { eyebrow: 'Hello', title: 'A page from JSON', text: 'One object, one page.' } },
    { type: 'Footer', props: { text: '© Kivora' } }
  ]
}).mount('#app');
```

The same spec format is what the builder exports and imports, so a page can
move freely between the builder, the editor, and your own code.

## File structure

```
index.html            Showcase app (router + component/template demos)
builder.html          Visual page builder
editor.html           Live HTML/CSS/JS code editor
css/kivora.css        The whole library stylesheet (tokens, components, templates)
js/kivora.js          Library runtime (KV behaviors + UI component classes)
js/data.js            Generated bundle of the JSON specs below (do not edit by hand)
data/components.json  Builder catalog: 15 components with defaults + editable fields
data/presets.json     Builder presets: blank, saas, report, pricing
scripts/sync-data.mjs Regenerates js/data.js from data/*.json
```

Why a generated bundle instead of `fetch()`? `fetch()` of local JSON is blocked
on `file://` pages in most browsers. The JSON files stay the source of truth;
`js/data.js` is the runtime copy so everything still works opened straight
from disk, on a phone, or on any static host.

## The JSON setup

**Page specs** are plain JSON: `{ type, props, children }`, where `type` is a
component name from `UI.reg` (Btn, Badge, Alert, Navbar, Hero, Section, Grid,
Card, Stat, Chart, Table, Tabs, Accordion, Modal, Carousel, Pricing, Timeline,
Dropdown, Footer, Page). `UI.create(spec)` builds the tree; `.mount(selector)`
renders it. Register your own with `UI.register('Name', YourClass)`.

**Builder catalog** (`data/components.json`) is an array of:

```json
{ "id": "hero", "label": "Hero", "icon": "✦",
  "props": { "eyebrow": "New", "title": "Headline", "text": "…" },
  "fields": [["eyebrow", "Eyebrow"], ["title", "Headline"], ["text", "Text", "textarea"]] }
```

Field types: text (default), `textarea`, `json`, `select` (with an options
array), `bool`, `number`. After editing a JSON file, run:

```sh
node scripts/sync-data.mjs
```

…and the builder, editor, and showcase pick it up.

## Builder

- **Palette** (left): tap to add a block after the selected one, or drag it
  onto the stage (desktop). The drop position follows your cursor.
- **Stage** (center): an isolated preview iframe. Click a block to select it.
- **Inspector** (right): edit the selected block's fields. `json` fields
  validate as you type; bad JSON is flagged, not saved.
- **Toolbar**: preset picker, undo/redo (Ctrl/Cmd+Z / Shift+Z), device widths
  (100% / 768px / 390px), Download HTML, Copy HTML, Export JSON, Import JSON,
  Clear. Pages auto-save to the browser (`kv-builder`).
- **Exported HTML** is standalone: it embeds the page spec and the component
  builders, and links `css/kivora.css` + `js/kivora.js`, so keep the exported
  file inside this folder layout.

## Code editor

- Three panes (HTML / CSS / JS) with a live preview and an in-page console
  that captures the preview's logs, warnings, and errors.
- **Run** (Ctrl/Cmd+Enter), **Auto-run**, layout (side/top), preview width
  (100% / 768px / 390px), and a light/dark editor theme. Work auto-saves
  (`kv-ed`); Ctrl/Cmd+S saves explicitly.
- **Templates** include hero, charts, motion, UI, tabs, todo, canvas, and
  **JSON: page from a spec** — the `UI.create` format, rendered live.
- The **Kivora UI** checkbox includes the library in the preview. Download
  and Copy HTML export a clean file (the console-capture helper is stripped).

## Theming

Design tokens live at the top of `css/kivora.css` (`--navy`, `--yellow`,
`--orange`, `--red`, `--blue`, `--cyan`, `--mint`, spacing, radius). Toggle
dark mode with any element carrying `data-kv-theme`, or set
`document.documentElement.dataset.theme = 'dark'`. The choice persists
(`kv-theme`). Motion respects `prefers-reduced-motion`.

## All devices

Grids collapse at 800px and 520px; template navigation collapses to a burger
menu at 700px; the dashboard/docs sidebars become a horizontal wrap row on
phones; the builder and editor stack their panels on small screens (palette
tap-to-add works on touch — HTML5 drag does not, so tap is the touch path).
Touch targets are sized for fingers, and pages print cleanly.

## Deploy

The folder is a static site. `netlify.toml` deploys the repo root as-is on
Netlify; on GitHub Pages, serve from the default branch root. No build
command, no environment variables.

## Version

**2.0** — rebuild of the original flat prototype: full rebrand to Kivora
(text, `kv-` classes, `KV` global, storage keys), files are organized into `css/` / `js/` / `data/` / `scripts/`, the builder catalog and
presets live in JSON, and the builder, editor, and showcase bugs found in
review (broken editor link, wrong drop position, doubling marquee, missing
mobile navigation, fragile export stripping) are fixed.
