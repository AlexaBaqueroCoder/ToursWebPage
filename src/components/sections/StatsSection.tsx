'use client';

import React, { useMemo } from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage, type Locale } from '@/contexts/LanguageContext';

function numberLocale(locale: Locale) {
  if (locale === 'en') return 'en-US';
  if (locale === 'fr') return 'fr-FR';
  return 'es-CO';
}

export default function StatsSection() {
  const { t, locale } = useLanguage();
  const theme = useTheme();

  const stats = useMemo(
    () => [
      {
        value: (2500).toLocaleString(numberLocale(locale)),
        suffix: '+',
        labelKey: 'stats.travelers' as const,
      },
      { value: '180', suffix: '+', labelKey: 'stats.tours' as const },
      { value: '99', suffix: '%', labelKey: 'stats.satisfaction' as const },
      { value: '8', suffix: '+', labelKey: 'stats.experience' as const },
    ],
    [locale],
  );

  return (
    <Box
      component="section"
      aria-label={t('stats.travelers')}
      sx={{
        py: { xs: 5, md: 6 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(90deg, rgba(15,107,111,0.35) 0%, rgba(12,90,94,0.5) 50%, rgba(15,107,111,0.35) 100%)'
            : 'linear-gradient(90deg, rgba(15,107,111,0.92) 0%, rgba(12,90,94,0.98) 50%, rgba(15,107,111,0.92) 100%)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, sm: 2, md: 4 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          {stats.map((item, i) => (
            <Grid size={{ xs: 6, sm: 3 }} key={item.labelKey}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Box sx={{ textAlign: 'center', px: { xs: 0.5, sm: 1 } }}>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                      fontWeight: 700,
                      fontSize: { xs: '1.65rem', sm: '1.85rem', md: '2.15rem' },
                      lineHeight: 1.1,
                      color: '#e8c547',
                      mb: 0.75,
                    }}
                  >
                    {item.value}
                    {item.suffix}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.88)',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      fontSize: { xs: '0.62rem', sm: '0.68rem', md: '0.72rem' },
                      lineHeight: 1.35,
                    }}
                  >
                    {t(item.labelKey)}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
