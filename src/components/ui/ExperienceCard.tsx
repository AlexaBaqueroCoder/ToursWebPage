'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import AccessTime from '@mui/icons-material/AccessTime';
import CheckCircle from '@mui/icons-material/CheckCircle';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Close from '@mui/icons-material/Close';
import FlightTakeoff from '@mui/icons-material/FlightTakeoff';
import FlightLand from '@mui/icons-material/FlightLand';
import Gavel from '@mui/icons-material/Gavel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience, localizeExperience } from '@/data/experiences';
import { useLanguage, tourWhatsAppMessage } from '@/contexts/LanguageContext';
import { whatsappUrl } from '@/lib/siteConfig';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience: rawExperience, index }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { locale, t } = useLanguage();
  const experience = localizeExperience(rawExperience, locale);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const waText = tourWhatsAppMessage(locale, experience.title);
  const waHref = whatsappUrl(waText);

  const notIncludes = experience.notIncludes ?? [];
  const cancellationText =
    experience.cancellationPolicy ?? t('cancellation.default');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box sx={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden' }}>
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              className="card-image"
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 30%, transparent 50%, rgba(0,0,0,0.65) 100%)',
              }}
            />

            {experience.tag && (
              <Chip
                label={experience.tag}
                size="small"
                sx={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  fontWeight: 700,
                  fontSize: '0.7rem',
                  height: 26,
                  background:
                    experience.tag === 'Premium'
                      ? 'linear-gradient(135deg, #c9a227, #f0d56e)'
                      : experience.tag === 'Nocturno'
                        ? 'linear-gradient(135deg, #6366F1, #8B5CF6)'
                        : experience.tag === 'Mas Popular'
                          ? 'linear-gradient(135deg, #EF4444, #F97316)'
                          : 'linear-gradient(135deg, #0a1628, #132a45)',
                  color: '#fff',
                  letterSpacing: '0.06em',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
              />
            )}

            {experience.priceFrom && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 14,
                  right: 14,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 2.5,
                  px: 2,
                  py: 1,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  {t('price.from')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: '#fff', fontWeight: 700, lineHeight: 1.2, fontSize: '1.05rem' }}
                >
                  {formatPrice(experience.priceFrom)}
                </Typography>
              </Box>
            )}
          </Box>

          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3, pt: 2.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1.15rem', lineHeight: 1.3 }}>
              {experience.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {experience.subtitle}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FlightTakeoff sx={{ fontSize: 16, color: 'primary.main' }} />
                <Typography variant="caption" color="text.secondary">
                  {experience.departure}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FlightLand sx={{ fontSize: 16, color: 'secondary.main' }} />
                <Typography variant="caption" color="text.secondary">
                  {experience.returnTime}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2, minHeight: 0 }}>
              {experience.highlights.slice(0, 4).map((h, i) => (
                <Chip
                  key={i}
                  label={h}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: '0.72rem',
                    borderColor:
                      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.7,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {experience.description}
            </Typography>

            <Box sx={{ mt: 'auto', pt: 2.5 }}>
              <Button variant="outlined" color="primary" fullWidth onClick={() => setOpen(true)} sx={{ mb: 1.5 }}>
                {t('card.viewDetails')}
              </Button>

              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<WhatsApp />}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('card.bookWhatsapp')}
              </Button>
            </Box>
          </CardContent>

          <style jsx global>{`
            .card-image {
              transition: transform 0.6s ease !important;
            }
            .MuiCard-root:hover .card-image {
              transform: scale(1.05) !important;
            }
          `}</style>
        </Card>
      </motion.div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        scroll="paper"
        slotProps={{
          paper: {
            sx: { borderRadius: 3 },
          },
        }}
      >
        <DialogTitle
          sx={{
            pr: 6,
            fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
            fontWeight: 700,
          }}
        >
          {experience.title}
          <IconButton
            aria-label={t('modal.close')}
            onClick={() => setOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 1 }}>
          <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 2, overflow: 'hidden', mb: 2 }}>
            <Image src={experience.image} alt={experience.title} fill style={{ objectFit: 'cover' }} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FlightTakeoff sx={{ fontSize: 18, color: 'primary.main' }} />
              <Typography variant="body2" color="text.secondary">
                {experience.departure}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FlightLand sx={{ fontSize: 18, color: 'secondary.main' }} />
              <Typography variant="body2" color="text.secondary">
                {experience.returnTime}
              </Typography>
            </Box>
            {experience.priceFrom && (
              <Chip
                icon={<AccessTime sx={{ fontSize: 16 }} />}
                label={formatPrice(experience.priceFrom)}
                color="primary"
                variant="outlined"
                size="small"
              />
            )}
          </Box>

          <Typography variant="subtitle2" color="primary" sx={{ mb: 0.5, fontWeight: 700 }}>
            {t('modal.description')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.75 }}>
            {experience.description}
          </Typography>

          <Typography variant="subtitle2" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
            {t('modal.includes')}
          </Typography>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              mb: 2,
              background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
            }}
          >
            {experience.includes.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.8 }}>
                <CheckCircle sx={{ fontSize: 18, color: 'success.main', mt: 0.15, flexShrink: 0 }} />
                <Typography variant="body2" color="text.secondary">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, color: 'error.light' }}>
            {t('modal.notIncludes')}
          </Typography>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              mb: 2,
              border: '1px solid',
              borderColor: theme.palette.mode === 'dark' ? 'rgba(239,68,68,0.25)' : 'rgba(239,68,68,0.2)',
              background: theme.palette.mode === 'dark' ? 'rgba(239,68,68,0.06)' : 'rgba(239,68,68,0.04)',
            }}
          >
            {notIncludes.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                —
              </Typography>
            ) : (
              notIncludes.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.8 }}>
                  <CancelOutlined sx={{ fontSize: 18, color: 'error.main', mt: 0.15, flexShrink: 0 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))
            )}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Gavel sx={{ fontSize: 20, color: 'secondary.main' }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {t('modal.cancellation')}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
            {cancellationText}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<WhatsApp />}
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 3 }}
          >
            {t('card.bookWhatsapp')}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
