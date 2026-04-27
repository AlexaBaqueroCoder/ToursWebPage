'use client';

import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Checkbox,
  useTheme,
  Divider,
} from '@mui/material';
import WhatsApp from '@mui/icons-material/WhatsApp';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation';
import { experiences, beachClubs, divingExperiences, localizeExperience } from '@/data/experiences';
import { useLanguage } from '@/contexts/LanguageContext';
import { whatsappUrl } from '@/lib/siteConfig';

interface SelectableExperience {
  id: string;
  title: string;
  priceFrom: number;
  category: string;
}

export default function TripBuilderSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const { ref, controls } = useScrollAnimation();
  const theme = useTheme();
  const { t, locale } = useLanguage();

  const allExperiences: SelectableExperience[] = useMemo(() => [
    ...experiences,
    ...beachClubs,
    ...divingExperiences,
  ]
    .filter((e) => e.priceFrom)
    .map((e) => {
      const loc = localizeExperience(e, locale);
      return { id: e.id, title: loc.title, priceFrom: e.priceFrom!, category: e.category };
    }), [locale]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    return allExperiences
      .filter((e) => selected.includes(e.id))
      .reduce((sum, e) => sum + e.priceFrom, 0);
  }, [selected, allExperiences]);

  const selectedNames = allExperiences
    .filter((e) => selected.includes(e.id))
    .map((e) => e.title)
    .join(', ');

  const whatsappMsg = locale === 'en'
    ? `Hello! I'd like to build a custom package with these experiences: ${selectedNames}. Estimated total: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(totalPrice)}. Could you give me more information and availability?`
    : locale === 'fr'
      ? `Bonjour ! Je souhaite créer un forfait personnalisé avec ces expériences : ${selectedNames}. Total estimé : ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(totalPrice)}. Pourriez-vous me donner plus d'informations et les disponibilités ?`
      : `Hola! Me gustaria armar un paquete personalizado con las siguientes experiencias: ${selectedNames}. Total estimado: ${new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(totalPrice)}. Podrian darme mas informacion y disponibilidad?`;

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      'island-tour': t('tripBuilder.cat.island'),
      beach: t('tripBuilder.cat.beach'),
      nightlife: t('tripBuilder.cat.nightlife'),
      'beach-club': t('tripBuilder.cat.beachClub'),
      diving: t('tripBuilder.cat.diving'),
    };
    return labels[cat] || cat;
  };

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      'island-tour': '#0a1628',
      beach: '#3B82F6',
      nightlife: '#8B5CF6',
      'beach-club': '#e8c547',
      diving: '#10B981',
    };
    return colors[cat] || '#666';
  };

  return (
    <Box
      id="arma-tu-viaje"
      sx={{
        py: { xs: 10, md: 14 },
        scrollMarginTop: 96,
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(10,22,40,0.06), rgba(232,197,71,0.04))'
            : 'linear-gradient(135deg, rgba(10,22,40,0.03), rgba(232,197,71,0.02))',
      }}
    >
      <Container maxWidth="lg" ref={ref}>
        <motion.div variants={fadeInUp} initial="hidden" animate={controls}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label={t('tripBuilder.chip')}
              size="small"
              icon={<ShoppingCart sx={{ fontSize: 14 }} />}
              sx={{
                mb: 2,
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.7rem',
                background: 'linear-gradient(135deg, #0a1628, #e8c547)',
                color: '#fff',
              }}
            />
            <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              {t('tripBuilder.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              {t('tripBuilder.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={1.5}>
              {allExperiences.map((exp, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={exp.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Card
                      onClick={() => toggle(exp.id)}
                      sx={{
                        cursor: 'pointer',
                        border: '2px solid',
                        borderColor: selected.includes(exp.id)
                          ? 'primary.main'
                          : theme.palette.mode === 'dark'
                          ? 'rgba(255,255,255,0.06)'
                          : 'rgba(0,0,0,0.06)',
                        background: selected.includes(exp.id)
                          ? theme.palette.mode === 'dark'
                            ? 'rgba(10,22,40,0.08)'
                            : 'rgba(10,22,40,0.03)'
                          : 'transparent',
                        transition: 'all 0.2s',
                        '&:hover': {
                          transform: 'none',
                          borderColor: 'primary.main',
                        },
                      }}
                    >
                      <CardContent
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 2,
                          '&:last-child': { pb: 2 },
                        }}
                      >
                        <Checkbox
                          checked={selected.includes(exp.id)}
                          color="primary"
                          size="small"
                          sx={{ p: 0.5 }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                            {exp.title}
                          </Typography>
                          <Chip
                            label={getCategoryLabel(exp.category)}
                            size="small"
                            sx={{
                              mt: 0.5,
                              height: 20,
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              background: `${getCategoryColor(exp.category)}20`,
                              color: getCategoryColor(exp.category),
                            }}
                          />
                        </Box>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            whiteSpace: 'nowrap',
                            fontSize: '0.85rem',
                          }}
                        >
                          {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP',
                            minimumFractionDigits: 0,
                          }).format(exp.priceFrom)}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Summary */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Card
                sx={{
                  background:
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1A2028, #222C38)'
                      : 'linear-gradient(135deg, #FFFFFF, #F8FAFB)',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    {t('tripBuilder.package')}
                  </Typography>

                  {selected.length === 0 ? (
                    <Typography variant="body2" color="text.secondary" sx={{ py: 3, textAlign: 'center' }}>
                      {t('tripBuilder.empty')}
                    </Typography>
                  ) : (
                    <>
                      {allExperiences
                        .filter((e) => selected.includes(e.id))
                        .map((e) => (
                          <Box
                            key={e.id}
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              py: 1,
                            }}
                          >
                            <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                              {e.title}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                              {new Intl.NumberFormat('es-CO', {
                                style: 'currency',
                                currency: 'COP',
                                minimumFractionDigits: 0,
                              }).format(e.priceFrom)}
                            </Typography>
                          </Box>
                        ))}

                      <Divider sx={{ my: 2 }} />

                      {selected.length >= 3 && (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 600 }}>
                            {t('tripBuilder.discount')}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 700 }}>
                            -{new Intl.NumberFormat('es-CO', {
                              style: 'currency',
                              currency: 'COP',
                              minimumFractionDigits: 0,
                            }).format(totalPrice * 0.1)}
                          </Typography>
                        </Box>
                      )}

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {t('tripBuilder.total')}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #0a1628, #e8c547)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP',
                            minimumFractionDigits: 0,
                          }).format(selected.length >= 3 ? totalPrice * 0.9 : totalPrice)}
                        </Typography>
                      </Box>

                      {selected.length >= 3 && (
                        <Chip
                          label={t('tripBuilder.discountChip')}
                          size="small"
                          color="success"
                          sx={{ mt: 1, width: '100%', fontWeight: 600 }}
                        />
                      )}
                    </>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<WhatsApp />}
                    disabled={selected.length === 0}
                    component="a"
                    href={selected.length > 0 ? whatsappUrl(whatsappMsg) : '#'}
                    target="_blank"
                    sx={{ mt: 3, py: 1.5 }}
                  >
                    {t('tripBuilder.cta')}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
