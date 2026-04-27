'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeInUp, useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  color?: 'primary' | 'secondary';
  icon?: React.ReactElement;
}

export default function SectionHeader({ label, title, subtitle, color = 'primary', icon }: SectionHeaderProps) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div variants={fadeInUp} initial="hidden" animate={controls} ref={ref}>
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 7 }, pt: { xs: 0.5, md: 1 } }}>
        <Chip
          label={label}
          size="small"
          icon={icon}
          sx={{
            mb: 2.5,
            fontWeight: 700,
            letterSpacing: '0.15em',
            fontSize: '0.68rem',
            background: 'transparent',
            border: '1px solid',
            borderColor: `${color}.main`,
            color: `${color}.main`,
          }}
        />
        {/* Decorative line */}
        <Box
          sx={{
            width: 48,
            height: 3,
            borderRadius: 2,
            background: color === 'primary'
              ? 'linear-gradient(90deg, #0a1628, #132a45)'
              : 'linear-gradient(90deg, #c9a227, #f0d56e)',
            mx: 'auto',
            mb: 3,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontSize: { xs: '1.9rem', sm: '2.3rem', md: '2.8rem' },
            lineHeight: 1.15,
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 640, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.75 }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </motion.div>
  );
}
