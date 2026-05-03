'use client';

import React from 'react';
import { Box, Container, Typography, Fab, useTheme } from '@mui/material';
import LocalOffer from '@mui/icons-material/LocalOffer';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappUrl } from '@/lib/siteConfig';

const quickOffers = [
  'Descuento grupos 4+',
  'Cortesias en discotecas',
  'Beneficios en restaurantes',
  'Asesoria premium',
];

const benefitEmoji = ['👥', '🎓', '🍽️'];

export default function PromoBanner() {
  const theme = useTheme();
  const { t, locale } = useLanguage();

  const promoMsg =
    locale === 'en'
      ? 'Hello! I would like information about group discounts (4+ people), nightclub perks and restaurant benefits.'
      : locale === 'fr'
        ? 'Bonjour ! Je souhaite des informations sur les réductions groupe (4+ personnes), les courtoisies discothèques et restaurants.'
        : 'Hola! Quiero información sobre descuentos para grupos (4+ personas), cortesías en discotecas y restaurantes.';

  const waHref = whatsappUrl(promoMsg);

  const glassCardSx = {
    p: 2,
    borderRadius: 3,
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.65)',
    background:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.82)',
    backdropFilter: 'blur(12px)',
    boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px rgba(0,0,0,0.35)' : '0 12px 40px rgba(15, 22, 40, 0.12)',
  } as const;

  const benefitCopies = [t('promo.discountGlass1'), t('promo.discountGlass2'), t('promo.discountGlass3')];

  return (
    <Box
      component="section"
      aria-label={t('promo.title')}
      sx={{
        pt: { xs: 3, md: 5 },
        pb: { xs: 4, md: 6 },
        px: { xs: 1.5, sm: 2 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ width: '100%' }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            style={{ width: '100%' }}
          >
          <Box
            sx={{
              position: 'relative',
              borderRadius: { xs: '18px', md: '22px' },
              overflow: 'hidden',
              minHeight: { xs: 520, md: 460 },
              border: '1px solid',
              borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(15, 22, 40, 0.12)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 24px 60px rgba(0,0,0,0.45)'
                  : '0 22px 56px rgba(30, 38, 48, 0.14)',
            }}
          >
            <Box sx={{ position: 'absolute', inset: 0 }}>
              <Image
                src="/images/caribetours/hero.jpg"
                alt="Cartagena vista aérea, mar y ciudad"
                fill
                sizes="(max-width: 900px) 100vw, 1080px"
                priority={false}
                style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(165deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 42%, rgba(0,0,0,0.55) 100%)',
                }}
              />
            </Box>

            <Fab
              component={Link}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('promo.cta')}
              sx={{
                position: 'absolute',
                bottom: { xs: 18, md: 26 },
                right: { xs: 18, md: 26 },
                zIndex: 4,
                bgcolor: '#25D366',
                color: '#fff',
                width: 58,
                height: 58,
                boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.55)',
                animation: 'promoWaPulse 2.6s ease-in-out infinite',
                '@keyframes promoWaPulse': {
                  '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45)', transform: 'scale(1)' },
                  '50%': { boxShadow: '0 0 24px 8px rgba(37, 211, 102, 0.35)', transform: 'scale(1)' },
                },
                '&:hover': {
                  bgcolor: '#20bd5a',
                  transform: 'scale(1.1)',
                  boxShadow: '0 12px 28px rgba(37, 211, 102, 0.55)',
                },
              }}
            >
              <WhatsApp sx={{ fontSize: 30 }} />
            </Fab>

            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                p: { xs: 2.5, sm: 3.5, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2, md: 2.5 },
                minHeight: { xs: 520, md: 460 },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <LocalOffer sx={{ color: '#f5e6a8', fontSize: 22 }} />
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.92)',
                  }}
                >
                  {t('promo.badge')}
                </Typography>
              </Box>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.65rem', sm: '1.95rem', md: '2.25rem' },
                    lineHeight: 1.25,
                    color: '#fff',
                    textAlign: 'center',
                    textShadow: '0 4px 28px rgba(0,0,0,0.45)',
                    maxWidth: 720,
                    mx: 'auto',
                  }}
                >
                  {t('promo.title')}
                </Typography>
              </motion.div>

              <Box sx={{ overflow: 'hidden', borderRadius: 2, opacity: 0.95 }}>
                <motion.div
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  style={{ display: 'flex', gap: 12, width: 'max-content' }}
                >
                  {[...quickOffers, ...quickOffers].map((item, idx) => (
                    <Box
                      key={`${item}-${idx}`}
                      sx={{
                        px: 1.75,
                        py: 0.75,
                        borderRadius: 999,
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        whiteSpace: 'nowrap',
                        background: 'rgba(255,255,255,0.14)',
                        color: '#fff',
                        border: '1px solid rgba(255,255,255,0.28)',
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </motion.div>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: { xs: 1.5, md: 2 },
                  mt: { xs: 0.5, md: 1 },
                }}
              >
                {benefitCopies.map((copy, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Box sx={glassCardSx}>
                      <Box sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                        <Typography component="span" sx={{ fontSize: '1.45rem', lineHeight: 1.15, flexShrink: 0 }}>
                          {benefitEmoji[i]}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            lineHeight: 1.65,
                            color: theme.palette.mode === 'dark' ? 'rgba(248,250,252,0.94)' : '#1e2630',
                            fontWeight: 500,
                          }}
                        >
                          {copy}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
