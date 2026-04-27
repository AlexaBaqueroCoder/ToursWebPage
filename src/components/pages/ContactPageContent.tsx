'use client';

import React from 'react';
import { Box, Container, Typography, Button, Chip, useTheme } from '@mui/material';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappUrl, DISPLAY_PHONE } from '@/lib/siteConfig';

const PROFILE_SRC = '/images/contact/profile.jpg';

export default function ContactPageContent() {
  const theme = useTheme();
  const { t, locale } = useLanguage();

  const msg =
    locale === 'en'
      ? `Hello! I saw your contact page and would like to plan an experience in Cartagena.`
      : locale === 'fr'
        ? `Bonjour ! J’ai vu votre page contact et souhaite organiser une expérience à Carthagène.`
        : `Hola! Vi tu página de contacto y quiero organizar una experiencia en Cartagena.`;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          position: 'relative',
          minHeight: 'calc(100vh - 1px)',
          pt: { xs: 10, md: 12 },
          pb: 6,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(180deg, rgba(18,22,28,0.92) 0%, rgba(18,22,28,0.97) 100%)'
                  : 'linear-gradient(180deg, rgba(253,252,249,0.88) 0%, rgba(243,241,236,0.95) 100%)',
            },
          }}
        >
          <Image
            src="/images/hero/beach-club.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover' }}
            quality={75}
          />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                mb: 1,
                fontSize: { xs: '2rem', md: '2.75rem' },
              }}
            >
              {t('contactPage.title')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: 'center', mb: 5, maxWidth: 560, mx: 'auto' }}
            >
              {DISPLAY_PHONE}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
                gap: { xs: 4, md: 6 },
                alignItems: 'start',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  maxWidth: 340,
                  mx: { xs: 'auto', md: 0 },
                  boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Image
                  src={PROFILE_SRC}
                  alt={t('contactPage.photoAlt')}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width:900px) 100vw, 340px"
                />
              </Box>

              <Box sx={{ pt: { md: 1 } }}>
                <Chip
                  label={t('contactPage.chip')}
                  size="small"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    fontSize: '0.65rem',
                  }}
                />
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, fontSize: '1.0625rem' }}>
                  {t('contactPage.bio.p1')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
                  {t('contactPage.bio.p2')}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {t('contactPage.location')}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<WhatsApp />}
                  href={whatsappUrl(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ py: 1.5, px: 3, fontWeight: 700 }}
                >
                  {t('contactPage.whatsappCta')}
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
