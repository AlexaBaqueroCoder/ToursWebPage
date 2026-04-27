'use client';

import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import PromoBanner from '@/components/sections/PromoBanner';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import ExperiencesSection from '@/components/sections/ExperiencesSection';
import BeachClubsSection from '@/components/sections/BeachClubsSection';
import DivingSection from '@/components/sections/DivingSection';
import GallerySection from '@/components/sections/GallerySection';
import AccommodationSection from '@/components/sections/AccommodationSection';
import PrivateServicesSection from '@/components/sections/PrivateServicesSection';
import TripBuilderSection from '@/components/sections/TripBuilderSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ContactTeaserSection from '@/components/sections/ContactTeaserSection';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  const pathname = usePathname();

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
      <PromoBanner />
      <AboutSection />
      <StatsSection />
      <ExperiencesSection />
      <BeachClubsSection />
      <DivingSection />
      <GallerySection />
      <AccommodationSection />
      <PrivateServicesSection />
      <TripBuilderSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <ContactTeaserSection />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
