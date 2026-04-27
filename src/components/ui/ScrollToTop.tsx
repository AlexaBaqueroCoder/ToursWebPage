'use client';

import React, { useState, useEffect } from 'react';
import { Fab, Tooltip, useTheme } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();
  const theme = useTheme();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <Tooltip title={t('scrollTop')} placement="right">
          <Fab
            component={motion.button}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={scrollUp}
            aria-label={t('scrollTop')}
            size="medium"
            sx={{
              position: 'fixed',
              bottom: 28,
              left: 28,
              zIndex: 1100,
              background:
                theme.palette.mode === 'dark'
                  ? 'rgba(26, 32, 40, 0.85)'
                  : 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(255,255,255,0.12)'
                  : 'rgba(0,0,0,0.08)',
              color: 'primary.main',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              '&:hover': {
                background:
                  theme.palette.mode === 'dark'
                    ? 'rgba(26, 32, 40, 0.95)'
                    : 'rgba(255, 255, 255, 0.98)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.16)',
              },
            }}
          >
            <KeyboardArrowUp />
          </Fab>
        </Tooltip>
      )}
    </AnimatePresence>
  );
}
