'use client';

import React from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Star from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappUrl } from '@/lib/siteConfig';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';

export default function PrivateServicesSection() {
  const { ref, controls } = useScrollAnimation();
  const { t, locale } = useLanguage();

  const msg =
    locale === 'en'
      ? 'Hello! I am interested in other private and exclusive services (transfers, yachts, custom experiences).'
      : locale === 'fr'
        ? 'Bonjour ! Je suis intéressé par d’autres services privés et exclusifs (transferts, yachts, sur mesure).'
        : 'Hola! Me interesan otros servicios privados y exclusivos (traslados, yates, experiencias a medida).';

  return (
    <Box
      id="servicios-privados"
      sx={{
        py: { xs: 10, md: 12 },
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 720,
              mx: 'auto',
              mb: 4,
            }}
          >
            <Chip
              icon={<Star sx={{ fontSize: '16px !important' }} />}
              label={t('private.chip')}
              sx={{
                mb: 2,
                fontWeight: 700,
                letterSpacing: '0.08em',
                fontSize: '0.65rem',
                border: '1px solid',
                borderColor: 'primary.main',
                background: 'transparent',
                color: 'primary.main',
              }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
              {t('private.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {t('private.subtitle')}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<WhatsApp />}
              href={whatsappUrl(msg)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('private.cta')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
