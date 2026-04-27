'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/** Palette aligned with caribetours.lovable.app (navy / gold / sand). */
const NAVY = '#0a1628';
const NAVY_LIGHT = '#132a45';
const GOLD = '#e8c547';
const GOLD_LIGHT = '#f0d56e';
const GOLD_DARK = '#c9a227';
const SAND = '#f5f2eb';

const getTheme = (mode: 'light' | 'dark') => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: GOLD,
        light: GOLD_LIGHT,
        dark: GOLD_DARK,
        contrastText: NAVY,
      },
      secondary: {
        main: NAVY,
        light: NAVY_LIGHT,
        dark: '#050d18',
        contrastText: SAND,
      },
      ...(mode === 'light'
        ? {
            background: {
              default: SAND,
              paper: '#fffcf7',
            },
            text: {
              primary: NAVY,
              secondary: '#4a5568',
            },
            divider: 'rgba(10, 22, 40, 0.1)',
          }
        : {
            background: {
              default: '#12161C',
              paper: '#1A2028',
            },
            text: {
              primary: '#E6EAEF',
              secondary: '#9BA3AF',
            },
            divider: 'rgba(255, 255, 255, 0.08)',
          }),
      info: {
        main: '#3B82F6',
      },
      success: {
        main: '#0D9B72',
      },
      warning: {
        main: '#D4922C',
      },
      error: {
        main: '#DC5A5A',
      },
    },
    typography: {
      fontFamily: 'var(--font-urbanist), "Urbanist", system-ui, sans-serif',
      h1: {
        fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
        fontWeight: 600,
        letterSpacing: '-0.015em',
      },
      h3: {
        fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      subtitle1: {
        fontWeight: 500,
        lineHeight: 1.65,
      },
      body1: {
        lineHeight: 1.75,
        fontSize: '1.0625rem',
      },
      body2: {
        lineHeight: 1.7,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.01em',
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
            textRendering: 'optimizeLegibility',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '11px 26px',
            fontSize: '0.9375rem',
            transition: 'background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease',
          },
        },
        variants: [
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              background: `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD} 55%, ${GOLD_LIGHT} 100%)`,
              color: NAVY,
              boxShadow: '0 4px 20px rgba(232, 197, 71, 0.35)',
              '&:hover': {
                background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD_LIGHT} 100%)`,
                boxShadow: '0 8px 28px rgba(232, 197, 71, 0.4)',
              },
            },
          },
          {
            props: { variant: 'contained', color: 'secondary' },
            style: {
              background: `linear-gradient(135deg, #050d18 0%, ${NAVY} 50%, ${NAVY_LIGHT} 100%)`,
              color: SAND,
              boxShadow: '0 4px 20px rgba(10, 22, 40, 0.25)',
              '&:hover': {
                background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_LIGHT} 100%)`,
                boxShadow: '0 8px 28px rgba(10, 22, 40, 0.32)',
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              borderWidth: 1.5,
              '&:hover': {
                borderWidth: 1.5,
              },
            },
          },
        ],
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            transition: 'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
            ...(mode === 'light'
              ? {
                  boxShadow: '0 2px 16px rgba(30, 38, 48, 0.06)',
                  border: '1px solid rgba(30, 38, 48, 0.06)',
                  '&:hover': {
                    boxShadow: '0 10px 32px rgba(30, 38, 48, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }
              : {
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    boxShadow: '0 10px 36px rgba(0, 0, 0, 0.35)',
                    transform: 'translateY(-4px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  },
                }),
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            fontWeight: 500,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 'clamp(20px, 5vw, 48px)',
            paddingRight: 'clamp(20px, 5vw, 48px)',
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
};

export default getTheme;
