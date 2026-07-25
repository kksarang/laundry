export const colors = {
  light: {
    primary: '#0F6E6B',
    primaryDark: '#0A524F',
    primarySoft: '#E8F7F5',
    accent: '#7ED8D0',
    accentSoft: '#C8F0EB',
    background: '#FAFAF7',
    surface: '#FFFFFF',
    surfaceMuted: '#F1F1EC',
    text: '#1C1C1E',
    textMuted: '#5C5C63',
    textSubtle: '#8A8A93',
    border: '#E4E4DE',
    success: '#1F8A70',
    warning: '#C9842A',
    danger: '#C23B3B',
    glass: 'rgba(250, 250, 247, 0.72)',
    shadow: 'rgba(15, 110, 107, 0.12)',
  },
  dark: {
    primary: '#3DB8B2',
    primaryDark: '#2A9E98',
    primarySoft: '#123534',
    accent: '#7ED8D0',
    accentSoft: '#1A4543',
    background: '#0F1211',
    surface: '#171B1A',
    surfaceMuted: '#1F2524',
    text: '#F2F4F3',
    textMuted: '#A8B0AE',
    textSubtle: '#6F7876',
    border: '#2A3230',
    success: '#3DB8B2',
    warning: '#E0A34A',
    danger: '#E06A6A',
    glass: 'rgba(23, 27, 26, 0.78)',
    shadow: 'rgba(0, 0, 0, 0.35)',
  },
} as const

export const typography = {
  display: '"Clash Display", "Satoshi", system-ui, sans-serif',
  body: '"Satoshi", system-ui, sans-serif',
  scale: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },
} as const

export const spacing = {
  sectionY: '5rem',
  sectionYLg: '7rem',
  container: '72rem',
  gutter: '1.25rem',
} as const

export const radius = {
  sm: '0.5rem',
  md: '0.875rem',
  lg: '1.25rem',
  xl: '1.75rem',
  full: '9999px',
} as const

export const motion = {
  fast: 0.2,
  base: 0.35,
  slow: 0.55,
} as const
