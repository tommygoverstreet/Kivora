// Regenerates js/data.js from data/*.json — the JSON files are the source of
// truth; the generated bundle is what the pages load (works from file://,
// where fetch() of local JSON is blocked). Run: node scripts/sync-data.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const components = JSON.parse(readFileSync(join(root, 'data/components.json'), 'utf8'));
const presets = JSON.parse(readFileSync(join(root, 'data/presets.json'), 'utf8'));
const out = `// Generated from data/*.json — do not edit by hand.\n// Run: node scripts/sync-data.mjs\nconst KV_DATA = ${JSON.stringify({ components, presets }, null, 2)};\n`;
writeFileSync(join(root, 'js/data.js'), out);
console.log(`js/data.js written: ${components.length} components, ${Object.keys(presets).length} presets`);
