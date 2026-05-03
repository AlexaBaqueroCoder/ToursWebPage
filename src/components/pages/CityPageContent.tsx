'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Grid, Chip, Button } from '@mui/material';
import Image from 'next/image';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import LocationOn from '@mui/icons-material/LocationOn';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ExperienceCard from '@/components/ui/ExperienceCard';
import HeroSection from '@/components/sections/HeroSection';
import PromoBanner from '@/components/sections/PromoBanner';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TripBuilderSection from '@/components/sections/TripBuilderSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactTeaserSection from '@/components/sections/ContactTeaserSection';
import GallerySection from '@/components/sections/GallerySection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { getCityConfig, type CityCategory } from '@/data/cities';

/** Query param values for Linktree / external deep links (?section=experiences&tab=…). */
const TAB_QUERY_TO_CATEGORY: Record<string, CityCategory> = {
  top: 'top',
  tradicionales: 'traditional',
  rosario: 'rosario',
  luxury: 'luxury',
  premium: 'premium',
  exclusive: 'exclusive',
};

const CATEGORY_TO_TAB_QUERY: Record<CityCategory, string> = {
  top: 'top',
  traditional: 'tradicionales',
  rosario: 'rosario',
  luxury: 'luxury',
  premium: 'premium',
  exclusive: 'exclusive',
};

export default function CityPageContent() {
  const params = useParams<{ city: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const city = getCityConfig(params.city);
  const isCartagena = params.city === 'cartagena';
  const [activeCategory, setActiveCategory] = useState<CityCategory>('top');

  const tabFromUrl = searchParams.get('tab');
  const sectionFromUrl = searchParams.get('section');

  useEffect(() => {
    if (!city || !tabFromUrl) return;
    const mapped = TAB_QUERY_TO_CATEGORY[tabFromUrl];
    if (!mapped) return;
    const allowed = city.categories.some((c) => c.value === mapped);
    if (allowed) setActiveCategory(mapped);
  }, [city, tabFromUrl]);

  useEffect(() => {
    if (sectionFromUrl !== 'experiences') return;
    const id = window.setTimeout(() => {
      document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return () => window.clearTimeout(id);
  }, [sectionFromUrl]);

  const scrollToTours = () => {
    const el = document.querySelector('#experiences');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (_: React.SyntheticEvent, val: CityCategory) => {
    setActiveCategory(val);
    const tabSlug = CATEGORY_TO_TAB_QUERY[val];
    const next = new URLSearchParams(searchParams.toString());
    next.set('section', 'experiences');
    next.set('tab', tabSlug);
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  };

  const filteredTours = useMemo(() => {
    if (!city) return [];
    if (activeCategory === 'top') return city.tours.slice(0, 6);
    if (activeCategory === 'rosario') {
      return city.tours.filter((tour) => tour.category === 'island-tour');
    }
    return city.tours.filter((tour) => tour.cityCategory === activeCategory);
  }, [activeCategory, city]);

  if (!city) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
        <Container maxWidth="md" sx={{ pt: 20, pb: 12 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Ciudad no encontrada
          </Typography>
          <Typography color="text.secondary">
            La ciudad que buscas no existe o aun no fue configurada.
          </Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />

      {isCartagena ? (
        <>
          <HeroSection
            toursSectionSelector="#experiences"
            slides={[
              { city: 'Cartagena', image: '/images/hero/hero_cartagena3.jpg' },
              { city: 'Islas', image: '/images/hero/hero_cartagena.jpg' },
              { city: 'Medellin', image: '/images/hero/hero_cartagena5.jpg' },
              { city: 'Guatape', image: '/images/hero/hero_cartagena4.jpg' },
            ]}
          />
          <PromoBanner />
        </>
      ) : (
        <Box sx={{ position: 'relative', minHeight: { xs: '80vh', md: '100vh' }, display: 'flex', alignItems: 'center' }}>
          <Image src={city.heroImage} alt={city.name} fill priority style={{ objectFit: 'cover' }} />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(165deg, rgba(2,16,34,0.92) 0%, rgba(6,26,50,0.56) 55%, rgba(6,26,50,0.22) 100%)',
            }}
          />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, pt: { xs: 14, md: 16 }, pb: { xs: 10, md: 8 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <LocationOn sx={{ fontSize: 22, color: '#e8c547' }} />
              <Typography
                component="span"
                sx={{
                  color: 'rgba(255,255,255,0.92)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                }}
              >
                {city.name}, Colombia
              </Typography>
            </Box>
            <Chip
              label={city.name.toUpperCase()}
              size="small"
              sx={{
                mb: 2,
                fontWeight: 700,
                letterSpacing: '0.12em',
                background: 'rgba(232,197,71,0.2)',
                color: '#f5e6a8',
                border: '1px solid rgba(232,197,71,0.5)',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                maxWidth: '18ch',
                fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                fontSize: { xs: '2rem', md: '3.05rem' },
                lineHeight: 1.15,
              }}
            >
              {city.heroTitle}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.9)', mt: 2, fontSize: { xs: '1rem', md: '1.1rem' } }}>
              {city.heroSubtitle}
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={scrollToTours}
              sx={{
                mt: 3,
                fontWeight: 700,
                borderRadius: 999,
                textTransform: 'none',
                py: 1.4,
                px: 3.5,
              }}
            >
              Explorar tours
            </Button>
          </Container>
          <Box
            component="button"
            onClick={scrollToTours}
            aria-label="Desplazar a tours"
            sx={{
              position: 'absolute',
              bottom: { xs: 26, md: 34 },
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              border: 'none',
              background: 'transparent',
              p: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'rgba(255,255,255,0.88)',
                letterSpacing: '0.35em',
                fontSize: '0.65rem',
                fontWeight: 700,
                fontFamily: 'var(--font-urbanist), "Urbanist", sans-serif',
              }}
            >
              SCROLL
            </Typography>
            <Box
              sx={{
                width: 2,
                height: 36,
                borderRadius: 1,
                background: 'linear-gradient(180deg, #e8c547, rgba(232,197,71,0.15))',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      )}

      <Box id="experiences" sx={{ py: { xs: 8, md: 10 }, scrollMarginTop: 96 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 1.5 }}>
              Tours en {city.name}
            </Typography>
            <Typography color="text.secondary">Filtra por categoria sin duplicar logica por ciudad.</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Tabs
              value={activeCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  minHeight: 44,
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: 3,
                  background: 'linear-gradient(90deg, #0a1628, #e8c547)',
                },
              }}
            >
              {city.categories.map((category) => (
                <Tab key={category.value} value={category.value} label={category.label} />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={3.5}>
            {filteredTours.map((tour, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={tour.id}>
                <ExperienceCard experience={tour} index={index} cartagenaStyle={isCartagena} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Ubicacion en {city.name}
          </Typography>
          <Box sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid', borderColor: 'divider', height: { xs: 280, md: 430 } }}>
            <iframe
              title={`Mapa de ${city.name}`}
              src={city.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>

      <GallerySection city={params.city as 'cartagena' | 'bogota' | 'medellin'} />
      <TripBuilderSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactTeaserSection />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
