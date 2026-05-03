'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const destinations = [
  { city: 'Cartagena', href: '/cartagena', image: '/images/caribetours/isla_rosario.jpg' },
  { city: 'Bogota', href: '/bogota', image: '/images/caribetours/tour-bogota.jpg' },
  { city: 'Medellin', href: '/medellin', image: '/images/hero/hero_medellin.png' },
];

export default function HomeDestinationsSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 4, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
          Destinos
        </Typography>
        <Grid container spacing={3}>
          {destinations.map((destination) => (
            <Grid size={{ xs: 12, md: 4 }} key={destination.city}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden' }}>
                <CardActionArea component={Link} href={destination.href}>
                  <Box sx={{ position: 'relative', height: 260 }}>
                    <Image src={destination.image} alt={destination.city} fill style={{ objectFit: 'cover' }} />
                  </Box>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {destination.city}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
