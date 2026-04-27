'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { divingExperiences } from '@/data/experiences';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DivingSection() {
  const { ref, controls } = useScrollAnimation();
  const theme = useTheme();
  const { t } = useLanguage();

  return (
    <Box
      id="buceo"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '45%',
          height: '100%',
          opacity: 0.06,
          display: { xs: 'none', lg: 'block' },
        }}
      >
        <Image
          src="/images/diving/underwater.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Box>

      <Container maxWidth="lg" ref={ref} sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label={t('diving.chip')}
              size="small"
              sx={{
                mb: 2,
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.7rem',
                background: 'linear-gradient(135deg, #0a1628, #132a45)',
                color: '#fff',
              }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              {t('diving.title')}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.05rem' }}
            >
              {t('diving.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
          {divingExperiences.map((exp, i) => (
            <Grid size={{ xs: 12, sm: 6, lg: 5 }} key={exp.id}>
              <ExperienceCard experience={exp} index={i} />
            </Grid>
          ))}
        </Grid>

        {/* Eco badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: 4,
              background:
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, rgba(16,185,129,0.07), rgba(15,107,111,0.07))'
                  : 'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(15,107,111,0.05))',
              border: '1px solid',
              borderColor:
                theme.palette.mode === 'dark' ? 'rgba(16,185,129,0.15)' : 'rgba(16,185,129,0.2)',
              textAlign: 'center',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            <Typography variant="h6" sx={{ color: 'success.main', mb: 1 }}>
              {t('diving.eco.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('diving.eco.text')}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
