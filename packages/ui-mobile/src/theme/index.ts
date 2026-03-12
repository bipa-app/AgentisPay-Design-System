// ─────────────────────────────────────────────────────────
// @bipa/ui-mobile — Design Tokens (React Native / NativeWind)
// Migrated from agent-pay/mobile/src/lib/theme.ts
// Aligned with packages/tokens/src/tokens.json
// ─────────────────────────────────────────────────────────

// ── Colors ────────────────────────────────────────────────
export const colors = {
  // Backgrounds
  "ap-bg":  "#0D1117",
  "ap-bg2": "#111D27",
  "ap-bg3": "#161F2A",
  "ap-bg4": "#1C2733",

  // Borders
  "ap-border":  "#1E2D3D",
  "ap-border2": "#263545",
  "ap-border-sub": "rgba(30,45,61,0.6)",

  // Text
  "ap-t1": "#FFFFFF",
  "ap-t2": "#8A9BB0",
  "ap-t3": "#4A6070",           // decorative only — not WCAG AA
  "ap-t3-accessible": "#6B8FA8", // use for readable tertiary text (5.51:1)
  "ap-t5": "#2A3D4F",

  // Brand — Orange
  "ap-orange":       "#FF5500",
  "ap-orange-dark":  "#CC4400",
  "ap-orange-light": "#FF9000",
  "ap-orange-bg":    "rgba(255,85,0,0.08)",
  "ap-orange-brd":   "rgba(255,85,0,0.22)",

  // Brand — Teal
  "ap-teal":      "#1A7A8A",
  "ap-teal-dark": "#0E6070",
  "ap-teal-bg":   "rgba(26,122,138,0.08)",
  "ap-teal-brd":  "rgba(26,122,138,0.22)",

  // Semantic — Success
  "ap-success":     "#34D399",
  "ap-success-bg":  "rgba(52,211,153,0.08)",
  "ap-success-brd": "rgba(52,211,153,0.2)",

  // Semantic — Danger
  "ap-danger":     "#C03A2B",
  "ap-danger-fg":  "#E05040",
  "ap-danger-bg":  "rgba(192,58,43,0.08)",
  "ap-danger-brd": "rgba(192,58,43,0.22)",

  // Info
  "ap-info":     "#60A5FA",
  "ap-info-bg":  "rgba(96,165,250,0.08)",
  "ap-info-brd": "rgba(96,165,250,0.22)",

  // Misc
  "ap-glass":        "rgba(255,255,255,0.04)",
  "ap-glass-border": "rgba(255,255,255,0.08)",
} as const;

// ── Radius ─────────────────────────────────────────────────
export const radius = {
  screen:  40,
  cardLg:  20,
  card:    14,
  btn:     12,
  input:   14,  // mobile inputs slightly larger
  inner:   8,
  pill:    100,
} as const;

// ── Typography ─────────────────────────────────────────────
export const fonts = {
  sans:        "SpaceGrotesk",
  sansMedium:  "SpaceGrotesk-Medium",
  sansSemiBold:"SpaceGrotesk-SemiBold",
  sansBold:    "SpaceGrotesk-Bold",
  serif:       "Philosopher",
  serifBold:   "Philosopher-Bold",
  mono:        "SpaceMono",
  monoBold:    "SpaceMono-Bold",
} as const;

// ── Spacing (4px grid) ─────────────────────────────────────
export const spacing = {
  1:    4,
  2:    8,
  3:    12,
  4:    16,
  6:    24,
  8:    32,
  12:   48,
  16:   64,
} as const;

// ── Shadows ────────────────────────────────────────────────
export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 8,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 32,
    elevation: 16,
  },
} as const;

// ── Type aliases ───────────────────────────────────────────
export type ColorName   = keyof typeof colors;
export type RadiusName  = keyof typeof radius;
export type FontName    = keyof typeof fonts;
export type SpacingName = keyof typeof spacing;
