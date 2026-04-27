'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Chip, ImageList, ImageListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useLanguage } from '@/contexts/LanguageContext';

const images = [
  { src: '/images/gallery/gallery1.png', title: 'Beach Club Paraiso' },
  { src: '/images/hero/beach-club.png', title: 'Islas del Rosario' },
  { src: '/images/gallery/gallery2.jpeg', title: 'Islas Aereas' },
  { src: '/images/experiences/snorkel.jpeg', title: 'Snorkel' },
  { src: '/images/gallery/gallery3.png', title: 'Mundo Submarino' },
  { src: '/images/hero/terrace.png', title: 'Terraza Caribena' },
  { src: '/images/gallery/gallery4.jpeg', title: 'Atardecer Caribe' },
  { src: '/images/gallery/gallery5.jpeg', title: 'Estrella de Mar' },
  { src: '/images/diving/underwater.png', title: 'Buceo Profundo' },
  { src: '/images/gallery/gallery6.jpeg', title: 'Arrecife Coral' },
  { src: '/images/hero/resort.png', title: 'Delfin Caribeno' },
  { src: '/images/beach-clubs/paue.png', title: 'Capri Beach Club' },
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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

        <ImageList
          variant="masonry"
          cols={3}
          gap={16}
          sx={{
            columnCount: { xs: '2 !important', sm: '2 !important', md: '3 !important' },
          }}
        >
          {images.map((img, i) => (
            <ImageListItem key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1',
                    '&:hover .overlay': { opacity: 1 },
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(13, 115, 119, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>
                      {img.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </Box>
  );
}
