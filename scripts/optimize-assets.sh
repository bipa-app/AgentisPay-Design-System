#!/bin/bash
# optimize-assets.sh
# Otimiza SVGs e converte ilustrações PNG → WebP
# Dependências: svgo (npm i -g svgo), sharp-cli (npm i -g sharp-cli)
# Uso: bash scripts/optimize-assets.sh

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "AgentisPay Design System — Asset Optimizer"
echo "==========================================="
echo ""

# ── SVGs ──────────────────────────────────────────────────────────────────────

echo "▸ Otimizando SVGs..."

SVG_FILES=(
  "assets/logo/logo-transparent-dark.svg"
  "assets/logo/logo-transparent-light.svg"
  "assets/logo/wordmark-transparent-dark.svg"
  "assets/logo/wordmark-transparent-light.svg"
  "assets/mascot/hermes-icon-dark.svg"
)

for f in "${SVG_FILES[@]}"; do
  if [ -f "$f" ]; then
    before=$(stat -f%z "$f")
    svgo "$f" -o "$f" 2>/dev/null
    after=$(stat -f%z "$f")
    reduction=$(( (before - after) * 100 / before ))
    echo "  ✓ $f  (${reduction}% menor)"
  fi
done

echo ""

# ── Ilustrações PNG → WebP ────────────────────────────────────────────────────

echo "▸ Convertendo ilustrações PNG → WebP (quality 80)..."

for f in assets/illustrations/*.png; do
  out="${f%.png}.webp"
  sharp -i "$f" -f webp -o "$out" 2>/dev/null
  png_kb=$(( $(stat -f%z "$f") / 1024 ))
  webp_kb=$(( $(stat -f%z "$out") / 1024 ))
  echo "  ✓ $(basename "$f")  ${png_kb}KB → ${webp_kb}KB"
done

echo ""
echo "✓ Concluído."
