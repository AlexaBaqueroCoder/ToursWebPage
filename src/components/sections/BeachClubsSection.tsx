'use client';

import React from 'react';
import { Box, Container, Grid, useTheme } from '@mui/material';
import ExperienceCard from '@/components/ui/ExperienceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { beachClubs } from '@/data/experiences';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BeachClubsSection() {
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box
      id="luxury"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, rgba(15,107,111,0.035) 0%, transparent 50%, rgba(196,154,74,0.035) 100%)'
            : 'linear-gradient(180deg, rgba(15,107,111,0.018) 0%, transparent 50%, rgba(196,154,74,0.018) 100%)',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: -150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,154,74,0.05) 0%, transparent 72%)',
        }}
      />

      <Container maxWidth="lg">
        <SectionHeader
          label="BEACH CLUBS"
          title={t('beachClubs.title')}
          subtitle={t('beachClubs.subtitle')}
          color="secondary"
        />

        <Grid container spacing={4}>
          {beachClubs.map((club, i) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={club.id}>
              <ExperienceCard experience={club} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
