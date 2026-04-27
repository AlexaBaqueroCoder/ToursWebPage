'use client';

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  startTransition,
} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import getTheme from './theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

export const useThemeMode = () => useContext(ThemeContext);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
      const saved = localStorage.getItem('theme-mode') as ThemeMode | null;
      if (saved) setMode(saved);
    });
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', next);
      return next;
    });
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  if (!mounted) {
    return (
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <LanguageProvider>
          <ThemeProvider theme={getTheme('light')}>
            <CssBaseline />
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
          </ThemeProvider>
        </LanguageProvider>
      </AppRouterCacheProvider>
    );
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <LanguageProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
          </ThemeProvider>
        </LanguageProvider>
      </AppRouterCacheProvider>
    </ThemeContext.Provider>
  );
}
