'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  useTheme,
} from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Help from '@mui/icons-material/Help';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from '@/hooks/useScrollAnimation';
import { faqs, faqsEn, faqsFr } from '@/data/experiences';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | false>(0);
  const { ref, controls } = useScrollAnimation();
  const theme = useTheme();
  const { t, locale } = useLanguage();
  const localizedFaqs = locale === 'en' ? faqsEn : locale === 'fr' ? faqsFr : faqs;

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="md" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="FAQ"
              size="small"
              icon={<Help sx={{ fontSize: 14 }} />}
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
              {t('faq.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
              {t('faq.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" animate={controls}>
          {localizedFaqs.map((faq, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Accordion
                expanded={expanded === i}
                onChange={(_, isExpanded) => setExpanded(isExpanded ? i : false)}
                sx={{
                  mb: 1.5,
                  borderRadius: '16px !important',
                  border: '1px solid',
                  borderColor:
                    expanded === i
                      ? 'primary.main'
                      : theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(0,0,0,0.06)',
                  boxShadow: 'none',
                  background:
                    expanded === i
                      ? theme.palette.mode === 'dark'
                        ? 'rgba(13, 115, 119, 0.06)'
                        : 'rgba(13, 115, 119, 0.02)'
                      : theme.palette.background.paper,
                  transition: 'all 0.3s ease',
                  '&:before': { display: 'none' },
                  '&:first-of-type': { borderRadius: '16px !important' },
                  '&:last-of-type': { borderRadius: '16px !important' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
                  sx={{
                    px: 3,
                    py: 0.5,
                    '& .MuiAccordionSummary-content': { my: 2 },
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
}
