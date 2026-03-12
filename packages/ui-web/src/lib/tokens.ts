/**
 * Token aliases for use in TypeScript/JS logic.
 * For CSS, always prefer using the CSS custom properties directly via var(--token).
 */
export const tokens = {
  color: {
    orange:       '#FF5500',
    orangeDark:   '#CC4400',
    orangeLight:  '#FF9000',
    teal:         '#1A7A8A',
    tealDark:     '#0E6070',
    bg:           '#0D1117',
    bg2:          '#111D27',
    bg3:          '#161F2A',
    bg4:          '#1C2733',
    text:         '#FFFFFF',
    textSecondary:'#8A9BB0',
    textTertiary: '#4A6070',
    textAccessible:'#6B8FA8',
    success:      '#34D399',
    danger:       '#C03A2B',
    dangerFg:     '#E05040',
    info:         '#60A5FA',
  },
} as const;
