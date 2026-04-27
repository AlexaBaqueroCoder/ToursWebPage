'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';

export default function ContactTeaserSection() {
  const { ref, controls } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <Box id="contacto" sx={{ py: { xs: 8, md: 10 }, scrollMarginTop: 96 }}>
      <Container maxWidth="md" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              background: (theme) =>
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(15,107,111,0.04)',
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              {t('contactTeaser.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.75 }}>
              {t('contactTeaser.body')}
            </Typography>
            <Button
              component={Link}
              href="/contacto"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForward />}
            >
              {t('contactTeaser.button')}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
