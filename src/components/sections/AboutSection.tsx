'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import LocationOn from '@mui/icons-material/LocationOn';
import WbSunny from '@mui/icons-material/WbSunny';
import BeachAccess from '@mui/icons-material/BeachAccess';
import Waves from '@mui/icons-material/Waves';

export default function AboutSection() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();
  const theme = useTheme();

  const features = [
    { icon: <LocationOn />, title: t('about.f1.title'), desc: t('about.f1.desc') },
    { icon: <WbSunny />, title: t('about.f2.title'), desc: t('about.f2.desc') },
    { icon: <BeachAccess />, title: t('about.f3.title'), desc: t('about.f3.desc') },
    { icon: <Waves />, title: t('about.f4.title'), desc: t('about.f4.desc') },
  ];

  return (
    <Box
      component="section"
      id="traditional"
      sx={{
        py: { xs: 8, md: 11 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        scrollMarginTop: 96,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,107,111,0.06) 0%, transparent 72%)',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: 'center' }} ref={ref}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={fadeInLeft} initial="hidden" animate={controls}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? '0 24px 48px rgba(0,0,0,0.35)'
                      : '0 20px 50px rgba(30,38,48,0.12)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Image
                  src="/images/hero/terrace.png"
                  alt="Cartagena de Indias"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                {/* Chip arriba para que no quede cortado abajo */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    right: 16,
                    zIndex: 2,
                  }}
                >
                  <Chip
                    label={t('about.imageChip')}
                    size="small"
                    sx={{
                      background: 'rgba(212, 168, 83, 0.95)',
                      color: '#1A1A1A',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      maxWidth: '100%',
                      height: 'auto',
                      py: 0.75,
                      '& .MuiChip-label': {
                        whiteSpace: 'normal',
                        lineHeight: 1.35,
                        display: 'block',
                        textAlign: 'left',
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '45%',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                    pointerEvents: 'none',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={fadeInRight} initial="hidden" animate={controls}>
              <Chip
                label={t('about.chip')}
                size="small"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  fontSize: '0.68rem',
                  height: 28,
                  background: (t) =>
                    t.palette.mode === 'dark' ? 'rgba(58,148,152,0.15)' : 'rgba(15,107,111,0.08)',
                  color: 'primary.main',
                  border: '1px solid',
                  borderColor: 'primary.main',
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                  mb: 2.5,
                  fontSize: { xs: '1.85rem', sm: '2.15rem', md: '2.65rem' },
                  lineHeight: 1.2,
                  color: 'text.primary',
                }}
              >
                {t('about.title')}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 2,
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  maxWidth: '52ch',
                }}
              >
                {t('about.text1')}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 4,
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  maxWidth: '52ch',
                }}
              >
                {t('about.text2')}
              </Typography>

              <motion.div variants={staggerContainer} initial="hidden" animate={controls}>
                <Grid container spacing={2}>
                  {features.map((f, i) => (
                    <Grid size={{ xs: 6 }} key={i}>
                      <motion.div variants={staggerItem}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            height: '100%',
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor:
                              theme.palette.mode === 'dark'
                                ? 'rgba(255,255,255,0.1)'
                                : 'rgba(15,107,111,0.14)',
                            boxShadow:
                              theme.palette.mode === 'dark'
                                ? '0 4px 16px rgba(0,0,0,0.2)'
                                : '0 2px 12px rgba(30,38,48,0.06)',
                          }}
                        >
                          <Box sx={{ color: 'primary.main', mb: 1, display: 'flex' }}>{f.icon}</Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.75, color: 'text.primary' }}>
                            {f.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55, fontSize: '0.8125rem' }}>
                            {f.desc}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
