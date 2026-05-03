'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  Divider,
  useTheme,
} from '@mui/material';
import NextLink from 'next/link';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import YouTube from '@mui/icons-material/YouTube';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type FooterLink = { label: string; href: string };

export default function Footer() {
  const theme = useTheme();
  const { t } = useLanguage();

  const footerLinks: Record<string, FooterLink[]> = {
    [t('footer.tours')]: [
      {
        label: 'Experiencia 4 Islas',
        href: '/cartagena?section=experiences&tab=rosario',
      },
      {
        label: 'Experiencia 5 Islas',
        href: '/cartagena?section=experiences&tab=tradicionales',
      },
      {
        label: 'Playa Tranquila',
        href: '/cartagena?section=experiences&tab=tradicionales',
      },
      {
        label: 'Playa Blanca',
        href: '/cartagena?section=experiences&tab=tradicionales',
      },
      {
        label: 'Tour Bahia',
        href: '/cartagena?section=experiences&tab=tradicionales',
      },
    ],
    [t('footer.experiences')]: [
      { label: 'Yates', href: '/cartagena' },
      { label: 'Helicoptero', href: '/bogota' },
      { label: 'Guatape', href: '/medellin' },
      { label: 'Buceo', href: '/cartagena' },
    ],
    [t('footer.services')]: [
      { label: t('nav.accommodation'), href: '/cartagena' },
      { label: 'Transporte privado', href: '/cartagena' },
      { label: 'Decoracion', href: '/cartagena' },
      { label: 'Fotografia y video', href: '/cartagena' },
    ],
    [t('footer.cities')]: [
      { label: 'Cartagena', href: '/cartagena' },
      { label: 'Bogota', href: '/bogota' },
      { label: 'Medellin', href: '/medellin' },
      { label: t('nav.contact'), href: '/contacto' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(180deg, #12161C 0%, #0C0F14 100%)'
            : 'linear-gradient(180deg, #1E2630 0%, #141A22 100%)',
        color: '#E8ECF1',
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  color: '#e8c547',
                  mb: 2,
                }}
              >
                Cartagena Luxury Tours
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(203, 213, 225, 0.88)', mb: 3, lineHeight: 1.75 }}>
                {t('footer.description')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {[
                  { icon: <Instagram />, url: '#' },
                  { icon: <Facebook />, url: '#' },
                  { icon: <YouTube />, url: '#' },
                  { icon: <WhatsApp />, url: '#' },
                ].map((social, i) => (
                  <IconButton
                    key={i}
                    component={motion.a}
                    whileHover={{ scale: 1.06, y: -2 }}
                    href={social.url}
                    target="_blank"
                    sx={{
                      color: 'rgba(203, 213, 225, 0.75)',
                      border: '1px solid rgba(203, 213, 225, 0.18)',
                      borderRadius: 2,
                      '&:hover': {
                        color: '#5EB8BC',
                        borderColor: 'rgba(94, 184, 188, 0.5)',
                        background: 'rgba(94, 184, 188, 0.1)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#D4B06E',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.75rem',
                    mb: 2.5,
                  }}
                >
                  {title}
                </Typography>
                {links.map((link) => (
                  <MuiLink
                    key={link.label}
                    component={NextLink}
                    href={link.href}
                    underline="none"
                    sx={{
                      display: 'block',
                      color: 'rgba(203, 213, 225, 0.82)',
                      fontSize: '0.875rem',
                      py: 0.6,
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: '#5EB8BC',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </motion.div>
            </Grid>
          ))}

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#D4B06E',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: '0.75rem',
                  mb: 2.5,
                }}
              >
                {t('footer.contact')}
              </Typography>
              {[
                { icon: <LocationOn sx={{ fontSize: 16 }} />, text: 'Cartagena, Bolivar, Colombia' },
                { icon: <Phone sx={{ fontSize: 16 }} />, text: '+57 300 123 4567' },
                { icon: <Email sx={{ fontSize: 16 }} />, text: 'info@cartagenatours.co' },
              ].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1.5 }}>
                  <Box sx={{ color: '#5EB8BC' }}>{item.icon}</Box>
                  <Typography variant="body2" sx={{ color: 'rgba(203, 213, 225, 0.82)', fontSize: '0.85rem' }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: 'rgba(148, 163, 184, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} Cartagena Luxury Tours. {t('footer.copyright')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {[t('footer.terms'), t('footer.privacy'), t('footer.cookies')].map((item) => (
              <MuiLink
                key={item}
                href="#"
                underline="none"
                sx={{
                  color: '#64748B',
                  fontSize: '0.8rem',
                  '&:hover': { color: '#5EB8BC' },
                }}
              >
                {item}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
