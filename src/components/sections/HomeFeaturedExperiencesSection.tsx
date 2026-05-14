'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import Image from 'next/image';

const featuredExperiences = [
  { title: 'Yate en Cartagena', city: 'Cartagena', image: '/images/experiences/Yate1.jpg' },
  { title: 'Tour Islas del Rosario', city: 'Cartagena', image: '/images/caribetours/tour_isla_rosario.png' },
  { title: 'Guatape en Medellin', city: 'Medellin', image: '/images/gallery/gallery_medellin1.png' },
  { title: 'Buceo', city: 'Cartagena', image: '/images/caribetours/tour_buceo1.jpg' },
  { title: 'Parapente en Medellin', city: 'Medellin', image: '/images/caribetours/tour_parapente.png' },
  { title: 'Tours Salsa', city: 'Bogota', image: '/images/caribetours/tour_salsa.png' },
];

export default function HomeFeaturedExperiencesSection() {
  return (
    <Box id="experiences" sx={{ py: { xs: 8, md: 10 }, scrollMarginTop: 96, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 1.5, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
          Experiencias destacadas
        </Typography>
        <Typography sx={{ textAlign: 'center', color: 'text.secondary', mb: 4 }}>
          Seleccion curada entre Cartagena, Bogota y Medellin.
        </Typography>
        <Grid container spacing={3.5}>
          {featuredExperiences.map((item, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', aspectRatio: '16/11' }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={i < 3}
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>{item.city}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
