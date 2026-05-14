'use client';

import React, { useState, memo, useMemo, useCallback } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
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

import BeachAccess from '@mui/icons-material/BeachAccess';
import DirectionsBoat from '@mui/icons-material/DirectionsBoat';
import LocalBar from '@mui/icons-material/LocalBar';
import CameraAlt from '@mui/icons-material/CameraAlt';
import Star from '@mui/icons-material/Star';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  cartagenaStyle?: boolean;
}

export default memo(function ExperienceCard({ experience: rawExperience, index,cartagenaStyle }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { locale, t } = useLanguage();
  const experience = localizeExperience(rawExperience, locale);

  const highlightChipSx = {
    fontSize: '0.75rem',
    fontWeight: 500,
    borderRadius: '999px',
    ...(isDark
      ? {
          bgcolor: 'rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.9)',
          border: '1px solid rgba(255,255,255,0.14)',
        }
      : {
          bgcolor: '#f5f5f5',
          color: '#555',
          border: '1px solid #eee',
        }),
  } as const;

  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }, []);

  const getHighlightEmoji = (text: string) => {
    const lower = text.toLowerCase();
  
    // 🍾 Bebidas / bar
    if (lower.includes('champagne') || lower.includes('open bar') || lower.includes('bebida')) return '🍾';
    if (lower.includes('open bar doble') || lower.includes('happy Hour 2x1')) return '🍸';
    if (lower.includes('cholon')) return '🎉';
    if (lower.includes('coctel')) return '🍹';
    
    // 🏄 Actividades acuáticas
    if (lower.includes('paddle')) return '🏄‍♂️';
    if (lower.includes('inmersion') || lower.includes('buceo')) return '🤿';
    if (lower.includes('arrecife') || lower.includes('coral') || lower.includes('snorkel')) return '🐠';

    // ✈️ Avioneta sumergible
    if (lower.includes('avioneta') || lower.includes('sumergible')) return '✈️';
    // 🐬 Oceanario
    if (lower.includes('oceanario') || lower.includes('delfin') || lower.includes('acuatico')) return '🐬';

    // 🦜 Aviario
    if (lower.includes('aviario') || lower.includes('aves') || lower.includes('pajaros')) return '🦜';

    //🍽️ Alimentacion
    if (lower.includes('almuerzo')) return '🍽️';
    if (lower.includes('almuerzo tipico')) return '🍤';

    // 🌴 Playa / mar
    if (lower.includes('isla') || lower.includes('playa')) return '🏝️';
    if (lower.includes('piscina')) return '🏊‍♂️';
    if (lower.includes('recorrido panoramico')) return '🏖️';

  
    // 🚤 Transporte
    if (lower.includes('lancha') || lower.includes('bote')) return '🚤';
  
    // 📸 Experiencia
    if (lower.includes('foto') || lower.includes('instagram')) return '📸';
    
    //Luxury
    if (lower.includes('luxury')) return '✨';

    // 🎵 Entretenimiento
    if (lower.includes('dj')) return '🎧';
    if (lower.includes('saxofon')) return '🎷';
  
    // 🐾 Mascotas
    if (lower.includes('pet') || lower.includes('mascota')) return '🐾';
  
    // 🧑‍💼 Servicios
    if (lower.includes('host') || lower.includes('bilingue') || lower.includes('acompanante turistico')) return '🧑‍💼';
  
    // 🏅 Certificaciones
    if (lower.includes('padi') || lower.includes('certified')) return '🏅';
  
    return '✨';
  };

  const waText = useMemo(
    () =>
      tourWhatsAppMessage(locale, experience.title, {
        priceFormatted: experience.priceFrom != null ? formatPrice(experience.priceFrom) : undefined,
      }),
    [locale, experience.title, experience.priceFrom, formatPrice],
  );
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
        transition={{ delay: Math.min(index * 0.02, 0.1), duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              priority={index < 3}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                      ? 'linear-gradient(135deg,rgb(204, 194, 161), #f0d56e)'
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
              {experience.highlights.slice(0, 6).map((h, i) => (
                <Chip
                  key={i}
                  label={`${getHighlightEmoji(h)} ${h}`}
                  size="small"
                  sx={highlightChipSx}
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

            <Box sx={{ mt: 'auto', pt: 2.5, display: 'flex', gap: 1.5, }}>
              <Button variant="outlined" color="primary" onClick={() => setOpen(true)}  sx={{flex: 1, maxWidth: '160px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {t('card.viewDetails')}
              </Button>

              <Button
                variant="contained"
                color="primary"
                startIcon={<WhatsApp />}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ flex: 1 }}
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
        maxWidth={false}
        fullWidth
        fullScreen={isMobile}
        slotProps={{
          paper: {
            sx: {
              borderRadius: { xs: 0, sm: 1 },
              width: { xs: '100%', sm: '92%', md: '75%' },
              maxWidth: '1200px',
              overflow: 'hidden',
              maxHeight: { xs: '100dvh', sm: '96vh', md: '92vh' },
              m: { xs: 0, sm: 'auto' },
              bgcolor: isDark ? theme.palette.background.paper : '#ffffff',
              color: isDark ? theme.palette.text.primary : '#1e2630',
            },
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            bgcolor: isDark ? theme.palette.background.paper : '#ffffff',
            color: isDark ? theme.palette.text.primary : '#1e2630',
            maxHeight: { xs: '100dvh', sm: '96vh', md: '92vh' },
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            overscrollBehaviorY: 'contain',
            '&.MuiDialogContent-root': {
              padding: 0,
            },
          }}
        >
        <Box
          sx={{
            position: 'relative',
            height: 260,
            width: '100%', // 👈 expande al ancho real
            overflow: 'hidden',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            lineHeight: 0,
          }}
        >
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />

          {/* OVERLAY OSCURO */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.88) 5%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.05) 100%)',
            }}
          />

          {/* TEXTO ENCIMA */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              px: { xs: 2, sm: 4 },
              pb: { xs: 3, sm: 4 },
              color: '#fff',
              zIndex: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{ fontSize: '0.72rem',
                fontWeight: 900,
                letterSpacing: '0.22em',
                opacity: 0.8, 
                textTransform: 'uppercase',
                color: '#F4D03F',
                mb: 1, 
              }}
            >
               {experience.category}
            </Typography>

            <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: '1.15rem', sm: '1.5rem' } }}>
              {experience.title}
            </Typography>
          </Box>

          {/* BOTÓN CERRAR */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              background: 'rgba(0,0,0,0.4)',
              color: '#fff',
              backdropFilter: 'blur(6px)',
              '&:hover': {
                background: 'rgba(0,0,0,0.6)',
              },
            }}
          >
            <Close />
          </IconButton>

        </Box>
        <Box sx={{ p: { xs: 1.5, sm: 2 }, bgcolor: isDark ? theme.palette.background.paper : '#ffffff' }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2, alignItems: 'center' }}>
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
          {experience.priceFrom && (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                mt: 1,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: isDark ? theme.palette.text.primary : '#0A192F',
                  lineHeight: 1.1,
                }}
              >
                PRECIO {formatPrice(experience.priceFrom)}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.92rem',
                  color: '#16A34A',
                  fontWeight: 600,
                  mt: 0.4,
                }}
              >
              </Typography>
            </Box>
          )}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
            {experience.highlights.slice(0, 6).map((h, i) => (
              <Chip key={i} label={`${getHighlightEmoji(h)} ${h}`} size="small" sx={highlightChipSx} />
            ))}
          </Box>
          <Typography variant="subtitle2" color="primary" sx={{ mb: 0.5, fontWeight: 700 }}>
            {t('modal.description')}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.75 }}>
            {experience.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>

          {/* INCLUDES */}
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: '100%', sm: '260px' },
              p: 2,
              borderRadius: 2,
              background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
            }}
          >
            <Typography variant="subtitle2" color="primary" sx={{ mb: 1, fontWeight: 700 }}>
              {t('modal.includes')}
            </Typography>

            {experience.includes.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                —
              </Typography>
            ) : (
              experience.includes.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.8 }}>
                  <CheckCircle sx={{ fontSize: 18, color: 'success.main', mt: 0.15 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))
            )}
          </Box>

          {/* NOT INCLUDES */}
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: '100%', sm: '260px' },
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: isDark ? 'rgba(239,68,68,0.25)' : 'rgba(239,68,68,0.2)',
              background: isDark ? 'rgba(239,68,68,0.06)' : 'rgba(239,68,68,0.04)',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ mb: 1, fontWeight: 700, color: 'error.light' }}
            >
              {t('modal.notIncludes')}
            </Typography>

            {notIncludes.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                —
              </Typography>
            ) : (
              notIncludes.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.8 }}>
                  <CancelOutlined sx={{ fontSize: 18, color: 'error.main', mt: 0.15 }} />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))
            )}
          </Box>

        </Box>
        <Divider sx={{ my: 3, borderColor: 'divider' }} />
        <Box
          sx={{
            mt: 1,
            p: 2.5,
            borderRadius: '16px',
            border: '1px solid',
            borderColor: isDark ? 'rgba(232,197,71,0.35)' : 'rgba(212,175,55,0.25)',
            background: isDark ? 'rgba(232,197,71,0.08)' : 'rgba(212,175,55,0.08)',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.95rem',
              mb: 1,
              color: isDark ? theme.palette.text.primary : '#0A192F',
              fontFamily: '"Playfair Display", serif',
            }}
          >
          <Gavel sx={{ fontSize: 20, color: 'secondary.main' }} />
            {t('modal.cancellation')}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.8,
              color: 'text.secondary',
              fontSize: '0.92rem',
            }}
          >
            {cancellationText}
          </Typography>
        </Box>

          <Box sx={{ mt: 2 }} /> {/* espacio en blanco */}

          <Box sx={{ mt: 2 }} /> {/* espacio en blanco */}

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              gap: 2,
              '& .MuiButton-root': { minWidth: 0, flex: { xs: '1 1 100%', sm: '0 1 auto' } },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<WhatsApp />}
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('card.bookWhatsappDetail')}
            </Button>

            <Button variant="outlined" color="primary" onClick={() => setOpen(false)}>
              {t('modal.close')}
            </Button>
          </Box>

          <Box sx={{ mt: 2 }} /> {/* espacio en blanco */}
        </Box> {/* 👈 🔥 CIERRA EL BOX CON PADDING */}
        </DialogContent>
      </Dialog>
    </>
  );
});
