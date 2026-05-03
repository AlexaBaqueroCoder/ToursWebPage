'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Omit to hide price overlay (e.g. Momentos Inolvidables gallery). */
  price?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  autoplayDelay?: number;
  minHeight?: { xs: string; md: string };
}

export default function HeroCarousel({
  slides,
  autoplayDelay = 4200,
  minHeight = { xs: '56vh', md: '68vh' },
}: HeroCarouselProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight,
        '& .swiper': { width: '100%', height: '100%' },
        '& .swiper-pagination': { bottom: 20 },
        '& .swiper-pagination-bullet': {
          width: 10,
          height: 10,
          background: 'rgba(255,255,255,0.6)',
          opacity: 1,
        },
        '& .swiper-pagination-bullet-active': {
          width: 26,
          borderRadius: '999px',
          background: '#e8c547',
        },
        '& .swiper-button-prev, & .swiper-button-next': {
          color: '#fff',
          width: 42,
          height: 42,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(255,255,255,0.35)',
          '&::after': { fontSize: '1rem', fontWeight: 700 },
        },
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box sx={{ position: 'relative', width: '100%', minHeight }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'scale(1.05)',
                  transition: 'transform 7s ease',
                }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="100vw"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(0deg, rgba(5,10,18,0.9) 0%, rgba(5,10,18,0.48) 45%, rgba(5,10,18,0.2) 100%)',
                  transition: 'all 250ms ease',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: 16, md: 36 },
                  right: { xs: 16, md: 36 },
                  bottom: { xs: 54, md: 70 },
                  zIndex: 2,
                  maxWidth: { xs: '100%', md: 700 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#fff',
                    fontSize: { xs: '1.5rem', md: '2.35rem' },
                    fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                    fontWeight: 700,
                  }}
                >
                  {slide.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.92)', mt: 1.2 }}>{slide.description}</Typography>
                {slide.price ? (
                  <Typography sx={{ color: '#e8c547', mt: 1, fontWeight: 700 }}>{slide.price}</Typography>
                ) : null}
                <Button
                  component={slide.ctaHref ? Link : 'button'}
                  href={slide.ctaHref ?? undefined}
                  variant="contained"
                  sx={{ mt: 2, borderRadius: 999, textTransform: 'none', fontWeight: 700, px: 3 }}
                >
                  {slide.ctaLabel ?? 'Ver experiencia'}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
