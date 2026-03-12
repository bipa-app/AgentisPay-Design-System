import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const SVG_DIR  = './src/svg';
const OUT_WEB  = './dist/svelte';
const OUT_RN   = './dist/native';
const OUT_ROOT = './dist';

mkdirSync(OUT_WEB,  { recursive: true });
mkdirSync(OUT_RN,   { recursive: true });
mkdirSync(OUT_ROOT, { recursive: true });

// ─── helpers ────────────────────────────────────────────────────────────────

function toPascalCase(str) {
  return str.replace(/(^|[-_])([a-z0-9])/g, (_, __, c) => c.toUpperCase());
}

function extractInner(svg) {
  // Remove <svg ...> wrapper, keep inner elements
  return svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .trim();
}

function extractViewBox(svg) {
  const m = svg.match(/viewBox="([^"]+)"/);
  return m ? m[1] : '0 0 24 24';
}

// Convert SVG element attributes to React Native SVG props
function svgToRN(inner) {
  return inner
    // Self-closing fix
    .replace(/<(circle|line|polyline|polygon|rect|path|ellipse|text)([^/]*)\/>/g,
      (_, tag, attrs) => `<${toPascalCase(tag)}${attrs}/>`)
    // Wrap non-self-closing
    .replace(/<(circle|line|polyline|polygon|rect|path|ellipse)([^/]*?)>/g,
      (_, tag, attrs) => `<${toPascalCase(tag)}${attrs}>`)
    .replace(/<\/(circle|line|polyline|polygon|rect|path|ellipse)>/g,
      (_, tag) => `</${toPascalCase(tag)}>`)
    // Attribute: stroke-width → strokeWidth
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    // class → no class in RN
    .replace(/\sclass="[^"]*"/g, '');
}

// ─── process each SVG ────────────────────────────────────────────────────────

const files   = readdirSync(SVG_DIR).filter(f => f.endsWith('.svg')).sort();
const meta    = [];
const exports = [];
const rnExports = [];

for (const file of files) {
  const name       = basename(file, '.svg');
  const pascal     = toPascalCase(name);
  const raw        = readFileSync(join(SVG_DIR, file), 'utf-8');
  const inner      = extractInner(raw);
  const viewBox    = extractViewBox(raw);

  meta.push({ name, pascal, viewBox });
  exports.push(`export { default as Icon${pascal} } from './${pascal}.svelte';`);
  rnExports.push(`export { default as Icon${pascal} } from './${pascal}.js';`);

  // ── Svelte component ──────────────────────────────────────────────────────
  const svelte = `<script lang="ts">
  let {
    size   = 24,
    color  = 'currentColor',
    class: className = '',
    'aria-label': ariaLabel,
    ...rest
  }: {
    size?:       number | string;
    color?:      string;
    class?:      string;
    'aria-label'?: string;
    [key: string]: unknown;
  } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="${viewBox}"
  width={size}
  height={size}
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="bipa-icon bipa-icon--${name} {className}"
  aria-hidden={ariaLabel ? undefined : 'true'}
  aria-label={ariaLabel}
  role={ariaLabel ? 'img' : undefined}
  {...rest}
>
  ${inner}
</svg>
`;
  writeFileSync(join(OUT_WEB, `${pascal}.svelte`), svelte);

  // ── React Native component ─────────────────────────────────────────────────
  const rnInner = svgToRN(inner);
  const rn = `import React from 'react';
import Svg, { ${getRNImports(inner)} } from 'react-native-svg';

interface Props {
  size?:  number;
  color?: string;
  style?: object;
}

export default function Icon${pascal}({ size = 24, color = 'currentColor', style }: Props) {
  return (
    <Svg
      viewBox="${viewBox}"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      ${rnInner}
    </Svg>
  );
}
`;
  writeFileSync(join(OUT_RN, `${pascal}.js`), rn);
}

function getRNImports(inner) {
  const tags = new Set();
  const matches = inner.matchAll(/<(circle|line|polyline|polygon|rect|path|ellipse)/g);
  for (const m of matches) tags.add(toPascalCase(m[1]));
  return [...tags].join(', ');
}

// ─── Barrel exports ──────────────────────────────────────────────────────────

writeFileSync(join(OUT_WEB, 'index.js'), exports.join('\n') + '\n');
writeFileSync(join(OUT_RN,  'index.js'), rnExports.join('\n') + '\n');

// ─── SVG sprite ──────────────────────────────────────────────────────────────

const symbols = files.map(file => {
  const name   = basename(file, '.svg');
  const raw    = readFileSync(join(SVG_DIR, file), 'utf-8');
  const inner  = extractInner(raw);
  const vb     = extractViewBox(raw);
  return `  <symbol id="icon-${name}" viewBox="${vb}">\n    ${inner}\n  </symbol>`;
}).join('\n');

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">
${symbols}
</svg>
`;
writeFileSync(join(OUT_ROOT, 'sprite.svg'), sprite);

// ─── Meta JSON ───────────────────────────────────────────────────────────────

writeFileSync(join(OUT_ROOT, 'meta.json'), JSON.stringify(meta, null, 2) + '\n');

console.log(`✓ ${files.length} icons → dist/svelte/  (Svelte 5)`);
console.log(`✓ ${files.length} icons → dist/native/  (React Native SVG)`);
console.log(`✓ dist/sprite.svg`);
console.log(`✓ dist/meta.json`);
console.log(`\n@bipa/icons build complete`);
