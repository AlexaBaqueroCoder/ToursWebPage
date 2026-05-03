'use client';

import React, { Suspense, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HomeDestinationsSection from '@/components/sections/HomeDestinationsSection';
import HomeFeaturedExperiencesSection from '@/components/sections/HomeFeaturedExperiencesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TripBuilderSection from '@/components/sections/TripBuilderSection';
import GallerySection from '@/components/sections/GallerySection';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Link from 'next/link';

function HomePageContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('section') === 'experiences') {
      const tab = searchParams.get('tab') || 'top';
      router.replace(`/cartagena?section=experiences&tab=${encodeURIComponent(tab)}`);
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (pathname !== '/') return;
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <HeroSection />
      <HomeDestinationsSection />
      <HomeFeaturedExperiencesSection />
      <GallerySection city="home" />
      <TestimonialsSection />
      <TripBuilderSection />
      <Box id="contacto" sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
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
            <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.6rem', md: '2.1rem' } }}>
              Hablemos de tu viaje
            </Typography>
            <Button component={Link} href="/contacto" variant="contained" color="primary" size="large">
              Ir a contacto
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
      <ScrollToTop />
    </Box>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}
