'use client';

import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroCarousel, { type CarouselSlide } from '@/components/ui/HeroCarousel';

type GalleryCity = 'home' | 'cartagena' | 'bogota' | 'medellin';

const galleryByCity: Record<GalleryCity, CarouselSlide[]> = {
  home: [
    {
      id: 'h1',
      title: 'Momento inolvidable en Cartagena',
      description: 'Imagenes que se deslizan automaticamente',
      image: '/images/gallery/gallery_cartagena (1).jpg',
      ctaHref: '/cartagena',
    },
    {
      id: 'h2',
      title: 'Escenas del Caribe colombiano',
      description: 'Experiencias reales de viajeros',
      image: '/images/gallery/gallery_cartagena (2).jpg',
      ctaHref: '/cartagena',
    },
    {
      id: 'h3',
      title: 'Aventura en Medellin y Guatape',
      description: 'Paisajes y energia de la ciudad',
      image: '/images/gallery/gallery_medellin1.png',
      ctaHref: '/medellin',
    },
  ],
  cartagena: [
    { id: 'c1', title: 'Isla Grande premium', description: 'Dia de playa, relax y experiencias luxury', image: '/images/caribetours/tour-rosario-5.jpg', ctaHref: '/cartagena' },
    { id: 'c2', title: 'Familias sobre yates', description: 'Navegacion privada y atardeceres inolvidables', image: '/images/caribetours/tour-yacht.jpg', ctaHref: '/cartagena' },
    { id: 'c3', title: 'Fiesta en Cholon', description: 'Personas disfrutando musica y mar turquesa', image: '/images/caribetours/tour-rosario-4.jpg', ctaHref: '/cartagena' },
  ],
  bogota: [
    { id: 'b1', title: 'Monserrate panoramico', description: 'Vista de la ciudad y recorrido guiado', image: '/images/caribetours/tour-bogota.jpg', ctaHref: '/bogota' },
    { id: 'b2', title: 'Candelaria historica', description: 'Arte, color y cultura en cada calle', image: '/images/caribetours/tour-bogota-city.jpg', ctaHref: '/bogota' },
    { id: 'b3', title: 'Noche de salsa', description: 'Personas bailando y disfrutando Bogota nocturna', image: '/images/caribetours/tour-bogota.jpg', ctaHref: '/bogota' },
  ],
  medellin: [
    { id: 'm1', title: 'Guatape inolvidable', description: 'Color, cultura y pueblos encantadores', image: '/images/caribetours/tour-medellin.jpg', ctaHref: '/medellin' },
    { id: 'm2', title: 'Deportes en el Penol', description: 'Aventura acuatica con vista de embalse', image: '/images/caribetours/tour-medellin.jpg', ctaHref: '/medellin' },
    { id: 'm3', title: 'Vista desde el Penol', description: 'Panoramica unica de Antioquia', image: '/images/caribetours/tour-medellin.jpg', ctaHref: '/medellin' },
  ],
};

export default function GallerySection({ city = 'cartagena' }: { city?: GalleryCity }) {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label={t('gallery.chip')}
              size="small"
              sx={{
                mb: 2,
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.7rem',
                background: 'transparent',
                border: '1px solid',
                borderColor: 'primary.main',
                color: 'primary.main',
              }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              {t('gallery.title')}
            </Typography>
          </Box>
        </motion.div>

        <HeroCarousel slides={galleryByCity[city]} autoplayDelay={3800} minHeight={{ xs: '42vh', md: '58vh' }} />
      </Container>
    </Box>
  );
}
