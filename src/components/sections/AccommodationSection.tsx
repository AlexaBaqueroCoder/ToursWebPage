'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Chip, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { accommodations, localizeAccommodation } from '@/data/experiences';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AccommodationSection() {
  const { ref, controls } = useScrollAnimation();
  const theme = useTheme();
  const { t, locale } = useLanguage();

  return (
    <Box
      id="alojamiento"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, transparent, rgba(196,154,74,0.035), transparent)'
            : 'linear-gradient(180deg, transparent, rgba(196,154,74,0.022), transparent)',
      }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label={t('accommodation.chip')}
              size="small"
              sx={{
                mb: 2,
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.7rem',
                background: 'transparent',
                border: '1px solid',
                borderColor: 'secondary.main',
                color: 'secondary.main',
              }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              {t('accommodation.title')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 650, mx: 'auto', fontSize: '1.05rem' }}
            >
              {t('accommodation.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={controls}>
          <Grid container spacing={3}>
            {accommodations.map((rawAcc, i) => {
              const acc = localizeAccommodation(rawAcc, locale);
              return (
              <Grid size={{ xs: 12, sm: 6, md: i < 2 ? 6 : 4 }} key={acc.id}>
                <motion.div variants={staggerItem}>
                  <Card
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: i < 2 ? '16/9' : '4/3',
                      cursor: 'pointer',
                      '& img': {
                        transition: 'transform 0.6s ease !important',
                      },
                      '&:hover img': {
                        transform: 'scale(1.08) !important',
                      },
                    }}
                  >
                    <Image
                      src={acc.image}
                      alt={acc.city}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.75) 100%)',
                      }}
                    />
                    <CardContent
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        color: '#fff',
                        p: 3,
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1.15rem', md: '1.35rem' } }}>
                        {acc.emoji} {acc.city}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255,255,255,0.85)',
                          lineHeight: 1.65,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          fontSize: '0.85rem',
                        }}
                      >
                        {acc.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              );
            })}
          </Grid>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              {t('accommodation.tagline')}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
