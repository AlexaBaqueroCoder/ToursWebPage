'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Grid,
  Chip,
  useTheme,
} from '@mui/material';
import FormatQuote from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/experiences';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsSection() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #12161C, #161C24, #12161C)'
            : 'linear-gradient(180deg, #f5f2eb, #ebe6dc, #f5f2eb)',
      }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label={t('testimonials.chip')}
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
              {t('testimonials.title')}
            </Typography>
            <Typography sx={{ mb: 2, fontWeight: 700, color: 'primary.main' }}>500+ clientes felices</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
              {t('testimonials.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={controls}>
          <Grid container spacing={3}>
            {testimonials.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <motion.div variants={staggerItem}>
                  <Card
                    sx={{
                      height: '100%',
                      position: 'relative',
                      overflow: 'visible',
                    }}
                  >
                    <CardContent sx={{ p: 3.5, pt: 4 }}>
                      <FormatQuote
                        sx={{
                          position: 'absolute',
                          top: -12,
                          left: 20,
                          fontSize: 40,
                          color: 'primary.main',
                          opacity: 0.5,
                          background: theme.palette.background.paper,
                          borderRadius: 2,
                          p: 0.3,
                        }}
                      />
                      <Rating value={item.rating} readOnly size="small" sx={{ mb: 2 }} />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.8, fontStyle: 'italic', minHeight: 80 }}
                      >
                        &ldquo;{item.text}&rdquo;
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                          sx={{
                            width: 42,
                            height: 42,
                            background: 'linear-gradient(135deg, #0a1628, #e8c547)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                          }}
                        >
                          {item.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.location}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

      </Container>
    </Box>
  );
}
