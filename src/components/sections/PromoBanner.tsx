'use client';

import React, { useMemo } from 'react';
import { Box, Container, Typography } from '@mui/material';
import LocalOffer from '@mui/icons-material/LocalOffer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const MARQUEE_KEYS = ['promo.marquee1', 'promo.marquee2', 'promo.marquee3', 'promo.marquee4', 'promo.marquee5'] as const;

export default function PromoBanner() {
  const { t } = useLanguage();

  const items = useMemo(() => MARQUEE_KEYS.map((key) => t(key)), [t]);

  const track = [...items, ...items];

  return (
    <Box
      component="section"
      aria-label={t('promo.title')}
      sx={{
        py: { xs: 1.5, md: 2 },
        px: { xs: 0, sm: 0 },
        bgcolor: '#0a0e14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%' }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 2, md: 3 },
              minHeight: { xs: 80, md: 88 },
              maxHeight: 100,
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexShrink: 0,
                pr: { xs: 0, sm: 1 },
                borderRight: { sm: '1px solid rgba(232,197,71,0.35)' },
              }}
            >
              <LocalOffer sx={{ color: '#e8c547', fontSize: 22 }} />
              <Typography
                component="span"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.95)',
                  whiteSpace: 'nowrap',
                }}
              >
                {t('promo.badge')}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                overflow: 'hidden',
                maskImage: 'linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: 'max-content',
                  gap: { xs: 5, md: 7 },
                  alignItems: 'center',
                  animation: 'promoMarquee 42s linear infinite',
                  '@keyframes promoMarquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                  },
                  '@media (prefers-reduced-motion: reduce)': {
                    animation: 'none',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'center',
                    rowGap: 1,
                  },
                }}
              >
                {track.map((label, idx) => (
                  <Typography
                    key={`${label}-${idx}`}
                    component="span"
                    sx={{
                      fontSize: { xs: '0.8125rem', sm: '0.875rem' },
                      fontWeight: 600,
                      color: '#fff',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.02em',
                      fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                      pl: 1.5,
                      borderLeft: '2px solid',
                      borderColor: idx % 2 === 0 ? '#e8c547' : '#22c55e',
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
