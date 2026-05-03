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

const PROFILE_SRC = '/images/contact/profile.png';

export default function ContactPageContent() {
  const theme = useTheme();
  const { t, locale } = useLanguage();

  const bioParagraphs =
    locale === 'en'
      ? [
          'I am passionate about creating unique and unforgettable experiences in Colombia, especially in vibrant destinations such as Cartagena, Bogotá, and Medellín. Behind every tour, there is a careful selection of places, partners, and details designed so that each traveler experiences much more than just a simple tour: a true connection with each city.',
          'My approach combines organization, personalized attention, and a deep commitment to quality, offering experiences tailored to every type of traveler. From the paradisiacal beaches of Cartagena, through the cultural richness of Bogotá, to the innovative energy of Medellín, each experience is designed to exceed expectations.',
          'I am here to accompany you throughout the entire process: from choosing the ideal plan to every detail of your trip, ensuring that you enjoy Colombia with peace of mind, confidence, and excitement.',
          'Discover Colombia in a different way. Your experience starts here.',
        ]
      : locale === 'fr'
      ? [
          'Je suis passionnée par la création d’expériences uniques et inoubliables en Colombie, notamment dans des destinations dynamiques comme Carthagène, Bogotá et Medellín. Derrière chaque circuit, il y a une sélection minutieuse de lieux, de partenaires et de détails, pensée pour que chaque voyageur vive bien plus qu’une simple visite : une véritable connexion avec chaque ville.',
          'Mon approche allie organisation, attention personnalisée et un profond engagement envers la qualité, en proposant des expériences adaptées à chaque type de voyageur. Des plages paradisiaques de Carthagène, en passant par la richesse culturelle de Bogotá, jusqu’à l’énergie innovante de Medellín, chaque expérience est conçue pour dépasser les attentes.',
          'Je suis là pour vous accompagner à chaque étape : du choix du plan idéal jusqu’au moindre détail de votre voyage, afin que vous profitiez de la Colombie avec sérénité, confiance et émotion.',
          'Découvrez la Colombie autrement. Votre expérience commence ici.',
        ]
      : [
          'Soy una apasionada por crear experiencias unicas e inolvidables en Colombia, especialmente en destinos vibrantes como Cartagena, Bogota y Medellin. Detras de cada tour hay una cuidadosa seleccion de lugares, aliados y detalles pensados para que cada viajero viva mucho mas que un simple recorrido: una verdadera conexion con cada ciudad.',
          'Mi enfoque combina organizacion, atencion personalizada y un profundo compromiso con la calidad, ofreciendo experiencias adaptadas a cada tipo de viajero. Desde las playas paradisiacas de Cartagena, pasando por la riqueza cultural de Bogota, hasta la energia innovadora de Medellin, cada experiencia esta disenada para superar expectativas.',
          'Estoy aqui para acompanarte en todo el proceso: desde la eleccion del plan ideal hasta cada detalle de tu viaje, asegurandome de que disfrutes Colombia con tranquilidad, confianza y emocion.',
          'Descubre Colombia de una forma diferente. Tu experiencia comienza aqui.',
        ];

  const msg =
    locale === 'en'
      ? `I am passionate about creating unique and unforgettable experiences in Colombia, especially in vibrant destinations such as Cartagena, Bogotá, and Medellín.

My approach combines organization, personalized attention, and a deep commitment to quality.

I would love to plan an experience with you.`
      : locale === 'fr'
      ? `Je suis passionnée par la création d’expériences uniques et inoubliables en Colombie.

Mon approche allie organisation, attention personnalisée et qualité.

J’aimerais organiser une expérience avec vous.`
      : `Soy una apasionada por crear experiencias únicas en Colombia.

Me encantaría ayudarte a planear una experiencia inolvidable.`;

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
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            
            <Typography variant="h1" sx={{ textAlign: 'center', mb: 1, fontSize: { xs: '2rem', md: '2.75rem' } }}>
              {t('contactPage.title')}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 5, maxWidth: 560, mx: 'auto' }}>
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
                  aspectRatio: '3/4',
                  maxWidth: 340,
                  mx: { xs: 'auto', md: 0 },
                  boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  component="img"
                  src={PROFILE_SRC}
                  alt={t('contactPage.photoAlt')}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>

              <Box sx={{ pt: { md: 1 } }}>
                <Chip
                  label={t('contactPage.chip')}
                  size="small"
                  sx={{ mb: 2, fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.65rem' }}
                />

                {bioParagraphs.map((paragraph, index) => (
                  <Typography
                    key={paragraph}
                    variant="body1"
                    color={index === bioParagraphs.length - 1 ? 'text.primary' : 'text.secondary'}
                    sx={{ mb: 2, lineHeight: 1.8 }}
                  >
                    {paragraph}
                  </Typography>
                ))}

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