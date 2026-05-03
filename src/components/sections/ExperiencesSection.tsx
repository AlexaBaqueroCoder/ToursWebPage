'use client';

import React, { useState } from 'react';
import { Box, Container, Tabs, Tab, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExperienceCard from '@/components/ui/ExperienceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { experiences } from '@/data/experiences';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ExperiencesSection() {
  const [activeTab, setActiveTab] = useState('all');
  const { t } = useLanguage();

  const categories = [
    { label: t('experiences.tab.all'), value: 'all' },
    { label: t('experiences.tab.islands'), value: 'island-tour' },
    { label: t('experiences.tab.beaches'), value: 'beach' },
    { label: t('experiences.tab.nightlife'), value: 'nightlife' },
  ];

  const filtered =
    activeTab === 'all'
      ? experiences
      : experiences.filter((e) => e.category === activeTab);

  return (
    <Box
      id="experiences"
      sx={{
        position: 'relative',
        scrollMarginTop: 96,
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          label={t('experiences.chip')}
          title={t('experiences.title')}
          subtitle={t('experiences.subtitle')}
        />

        {/* Filter Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.9rem',
                borderRadius: 3,
                mx: 0.5,
                minHeight: 42,
              },
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #0a1628, #e8c547)',
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat.value} label={cat.label} value={cat.value} />
            ))}
          </Tabs>
        </Box>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Grid container spacing={4}>
              {filtered.map((exp, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={exp.id}>
                  <ExperienceCard experience={exp} index={i} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
