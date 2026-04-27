'use client';

import React from 'react';
import { Box, Container, Typography, Button, Chip, Paper, useTheme } from '@mui/material';
import Groups from '@mui/icons-material/Groups';
import Nightlife from '@mui/icons-material/Nightlife';
import Restaurant from '@mui/icons-material/Restaurant';
import LocalOffer from '@mui/icons-material/LocalOffer';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappUrl } from '@/lib/siteConfig';

export default function PromoBanner() {
  const theme = useTheme();
  const { t, locale } = useLanguage();

  const promoMsg =
    locale === 'en'
      ? 'Hello! I would like information about group discounts (4+ people), nightclub perks and restaurant benefits.'
      : locale === 'fr'
        ? 'Bonjour ! Je souhaite des informations sur les réductions groupe (4+ personnes), les courtoisies discothèques et restaurants.'
        : 'Hola! Quiero información sobre descuentos para grupos (4+ personas), cortesías en discotecas y restaurantes.';

  const benefitCardSx = {
    display: 'flex',
    gap: 1.5,
    alignItems: 'flex-start',
    p: 2,
    borderRadius: 2,
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(15,107,111,0.12)',
    background:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.65)',
    backdropFilter: 'blur(8px)',
  } as const;

  return (
    <Box
      component="section"
      aria-label={t('promo.title')}
      sx={{
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 4, sm: 5, md: 6 },
        px: { xs: 0, sm: 0 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #12161C 0%, #161c24 100%)'
            : 'linear-gradient(180deg, #EDE9E2 0%, #F3F1EC 50%, #EDE9E2 100%)',
        borderBottom: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(30,38,48,0.08)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: 3, md: 4 },
              p: { xs: 2.5, sm: 3, md: 4 },
              border: '1px solid',
              borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(15,107,111,0.14)',
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(26,32,40,0.95) 0%, rgba(18,22,28,0.98) 100%)'
                  : 'linear-gradient(145deg, #FDFCF9 0%, #F5F2EB 100%)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 4px 24px rgba(0,0,0,0.25)'
                  : '0 8px 40px rgba(30,38,48,0.08)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 180,
                height: 180,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(196,154,74,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Chip
                icon={<LocalOffer sx={{ fontSize: '18px !important' }} />}
                label={t('promo.badge')}
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  fontSize: '0.65rem',
                  height: 28,
                  background: 'rgba(196, 154, 74, 0.2)',
                  color: theme.palette.mode === 'dark' ? '#F5E6C8' : '#5C4510',
                  border: '1px solid rgba(196, 154, 74, 0.4)',
                }}
              />

              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.45rem', sm: '1.65rem', md: '1.9rem' },
                  lineHeight: 1.3,
                  mb: 3,
                  color: theme.palette.mode === 'dark' ? '#F8FAFC' : '#1E2630',
                  maxWidth: 720,
                }}
              >
                {t('promo.title')}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box sx={benefitCardSx}>
                  <Groups sx={{ color: 'secondary.main', flexShrink: 0, fontSize: 26, mt: 0.25 }} />
                  <Typography variant="body2" sx={{ lineHeight: 1.65, color: 'text.primary' }}>
                    {t('promo.groups')}
                  </Typography>
                </Box>
                <Box sx={benefitCardSx}>
                  <Nightlife sx={{ color: 'secondary.main', flexShrink: 0, fontSize: 26, mt: 0.25 }} />
                  <Typography variant="body2" sx={{ lineHeight: 1.65, color: 'text.primary' }}>
                    {t('promo.clubs')}
                  </Typography>
                </Box>
                <Box sx={{ ...benefitCardSx, gridColumn: { xs: '1', md: '1 / -1' } }}>
                  <Restaurant sx={{ color: 'secondary.main', flexShrink: 0, fontSize: 26, mt: 0.25 }} />
                  <Typography variant="body2" sx={{ lineHeight: 1.65, color: 'text.primary' }}>
                    {t('promo.restaurants')}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: { xs: 'stretch', sm: 'center', md: 'flex-start' } }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<WhatsApp />}
                  href={whatsappUrl(promoMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: 1.75,
                    px: 4,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: 3,
                    minHeight: 52,
                    boxShadow: '0 6px 24px rgba(196, 154, 74, 0.35)',
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: { sm: 360 },
                  }}
                >
                  {t('promo.cta')}
                </Button>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
