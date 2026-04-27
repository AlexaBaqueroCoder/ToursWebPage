'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import WhatsApp from '@mui/icons-material/WhatsApp';
import LocationOn from '@mui/icons-material/LocationOn';
import Image from 'next/image';
import { whatsappUrl } from '@/lib/siteConfig';
import { useLanguage } from '@/contexts/LanguageContext';
import { stats as headerStats, localizeStat } from '@/data/experiences';

export default function HeroSection() {
  const { t, locale } = useLanguage();
  const localizedHeaderStats = headerStats.map((s) => localizeStat(s, locale));
  const scrollToTours = () => {
    const el = document.querySelector('#rosario');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const advisorMsg =
    locale === 'en'
      ? 'Hello! I would like to speak with an advisor about tours in Cartagena.'
      : locale === 'fr'
        ? 'Bonjour ! Je souhaite parler à un conseiller pour des excursions à Carthagène.'
        : 'Hola! Me gustaría hablar con un asesor sobre tours en Cartagena.';

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        '@supports (min-height: 100dvh)': {
          minHeight: '100dvh',
        },
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/caribetours/hero.jpg"
          alt="Cartagena Luxury Tours — Islas del Rosario"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          priority
          quality={88}
          sizes="100vw"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(165deg, rgba(2,16,34,0.92) 0%, rgba(6,26,50,0.55) 55%, rgba(6,26,50,0.25) 100%)',
              md: 'linear-gradient(160deg, rgba(2,16,34,0.88) 0%, rgba(6,26,50,0.42) 58%, rgba(6,26,50,0.08) 100%)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 95% 90% at 12% 48%, rgba(4,6,10,0.38) 0%, transparent 52%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(0deg, rgba(10,12,18,0.92) 0%, transparent 32%)',
            pointerEvents: 'none',
          }}
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          py: { xs: 4, md: 2 },
          pt: {
            xs: 'clamp(7.5rem, 20vh, 9.5rem)',
            md: 'clamp(8.5rem, 18vh, 10.5rem)',
          },
          pb: { xs: 12, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: 'min(560px, 52vw)' },
            width: '100%',
            p: 0,
            borderRadius: 0,
            background: 'transparent',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
            border: 'none',
            boxShadow: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocationOn sx={{ fontSize: 22, color: '#e8c547' }} />
              <Typography
                component="span"
                sx={{
                  color: 'rgba(255,255,255,0.92)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                }}
              >
                {t('hero.location')}
              </Typography>
            </Box>

            <Box
              sx={{
                width: 56,
                height: 3,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #c9a227, #f0d56e)',
                mb: 2.25,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                mb: 2,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                columnGap: { xs: 0.5, sm: 0.75 },
                rowGap: 0,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '1.65rem', sm: '2.25rem', md: '2.65rem', lg: '2.85rem' },
                  textShadow: '0 1px 3px rgba(0,0,0,0.45)',
                  whiteSpace: { sm: 'nowrap' },
                }}
              >
                {t('hero.headline.start')}{' '}
              </Box>
              <Box
                component="span"
                sx={{
                  color: '#e8c547',
                  fontSize: { xs: '1.65rem', sm: '2.25rem', md: '2.65rem', lg: '2.85rem' },
                  fontStyle: 'italic',
                  fontWeight: 500,
                  textShadow: '0 1px 2px rgba(0,0,0,0.35)',
                  whiteSpace: { sm: 'nowrap' },
                }}
              >
                {t('hero.headline.mid')}{' '}
              </Box>
              <Box
                component="span"
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '1.65rem', sm: '2.25rem', md: '2.65rem', lg: '2.85rem' },
                  textShadow: '0 1px 3px rgba(0,0,0,0.45)',
                  whiteSpace: { sm: 'nowrap' },
                }}
              >
                {t('hero.headline.end')}
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.94)',
                fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                fontWeight: 400,
                lineHeight: 1.75,
                mb: { xs: 3.5, md: 4 },
                maxWidth: 520,
                fontSize: { xs: '1.0625rem', sm: '1.125rem' },
                textShadow: '0 1px 2px rgba(0,0,0,0.35)',
              }}
            >
              {t('hero.subtitle')}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                alignItems: { xs: 'stretch', sm: 'center' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={scrollToTours}
                sx={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  py: 1.85,
                  px: { xs: 3, sm: 4 },
                  borderRadius: 999,
                  minHeight: 56,
                  textTransform: 'none',
                  color: '#0a1628',
                  background: 'linear-gradient(135deg, #c9a227 0%, #e8c547 50%, #f0d56e 100%)',
                  boxShadow: '0 4px 24px rgba(232, 197, 71, 0.45)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e8c547 0%, #f0d56e 100%)',
                    boxShadow: '0 8px 32px rgba(232, 197, 71, 0.5)',
                  },
                }}
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WhatsApp />}
                href={whatsappUrl(advisorMsg)}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  py: 1.85,
                  px: { xs: 3, sm: 3.5 },
                  borderRadius: 999,
                  minHeight: 56,
                  textTransform: 'none',
                  color: '#fff',
                  borderWidth: 2,
                  borderColor: 'rgba(255,255,255,0.5)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  boxShadow: 'none',
                  '&:hover': {
                    borderColor: '#e8c547',
                    backgroundColor: 'rgba(232, 197, 71, 0.12)',
                    color: '#fff',
                  },
                }}
              >
                {t('hero.ctaAdvisor')}
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'space-between', sm: 'flex-start' },
                alignItems: 'stretch',
                gap: { xs: 1.5, sm: 2.75, md: 3.5 },
                mt: { xs: 3, md: 3.5 },
              }}
            >
              {localizedHeaderStats.map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    textAlign: { xs: 'center', sm: 'left' },
                    flex: '0 0 auto',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 700,
                      fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.2rem' },
                      lineHeight: 1.05,
                      color: '#e8c547',
                      textShadow: '0 1px 2px rgba(0,0,0,0.35)',
                    }}
                  >
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.4,
                      color: 'rgba(255,255,255,0.9)',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      textTransform: 'none',
                      fontSize: { xs: '0.72rem', md: '0.8rem' },
                      fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Indicador SCROLL — animación tipo caribetours.lovable.app */}
      <Box
        component={motion.button}
        type="button"
        aria-label="Desplazar al contenido"
        onClick={scrollToTours}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: { xs: 28, md: 36 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          border: 'none',
          background: 'transparent',
          fontFamily: 'inherit',
          p: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.88)',
            letterSpacing: '0.35em',
            fontSize: '0.65rem',
            fontWeight: 700,
            fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
            textShadow: '0 1px 4px rgba(0,0,0,0.6)',
          }}
        >
          {t('hero.scroll')}
        </Typography>
        <Box
          component={motion.span}
          layout
          sx={{
            width: 2,
            height: 36,
            borderRadius: 1,
            background: 'linear-gradient(180deg, #e8c547, rgba(232,197,71,0.15))',
            display: 'block',
          }}
          animate={{ scaleY: [1, 0.65, 1], opacity: [1, 0.75, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </Box>
    </Box>
  );
}
