'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Alert,
  Snackbar,
  MenuItem,
  useTheme,
} from '@mui/material';
import Send from '@mui/icons-material/Send';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeInLeft, fadeInRight } from '@/hooks/useScrollAnimation';
import { submitContact } from '@/lib/firebaseActions';

const experienceOptions = [
  'Experiencia 4 Islas',
  'Experiencia 5 Islas',
  'Playa Tranquila',
  'Playa Blanca',
  'Tour Bahia',
  "Pasadia Pa'ue",
  'Pasadia Ibbiza',
  'Pasadia Capri',
  'Inmersiones Recreativas',
  'Mini Curso PADI',
  'Alojamiento',
  'Paquete Personalizado',
  'Otro',
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { ref, controls } = useScrollAnimation();
  const theme = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitContact(form);
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Box id="contacto" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg" ref={ref}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="CONTACTO"
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
            Planifica tu Aventura
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
            Nuestro equipo esta siempre disponible para acompanarte en cada paso.
            Nos vemos pronto en el paraiso.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div variants={fadeInLeft} initial="hidden" animate={controls}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                {[
                  {
                    icon: <WhatsApp sx={{ fontSize: 28 }} />,
                    title: 'WhatsApp',
                    text: '+57 300 123 4567',
                    sub: 'Respuesta inmediata',
                    color: '#25D366',
                  },
                  {
                    icon: <Email sx={{ fontSize: 28 }} />,
                    title: 'Email',
                    text: 'info@cartagenatours.co',
                    sub: 'Respuesta en 24h',
                    color: '#0a1628',
                  },
                  {
                    icon: <Phone sx={{ fontSize: 28 }} />,
                    title: 'Telefono',
                    text: '+57 300 123 4567',
                    sub: 'Lun - Sab, 7AM - 9PM',
                    color: '#c9a227',
                  },
                  {
                    icon: <LocationOn sx={{ fontSize: 28 }} />,
                    title: 'Ubicacion',
                    text: 'Cartagena de Indias',
                    sub: 'Bolivar, Colombia',
                    color: '#EF4444',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Card
                      sx={{
                        background:
                          theme.palette.mode === 'dark'
                            ? 'rgba(255,255,255,0.03)'
                            : 'rgba(0,0,0,0.01)',
                      }}
                    >
                      <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center', p: 2.5, '&:last-child': { pb: 2.5 } }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `${item.color}15`,
                            color: item.color,
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.text}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.7 }}>
                            {item.sub}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div variants={fadeInRight} initial="hidden" animate={controls}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Nombre completo"
                          value={form.name}
                          onChange={handleChange('name')}
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={form.email}
                          onChange={handleChange('email')}
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Telefono / WhatsApp"
                          value={form.phone}
                          onChange={handleChange('phone')}
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          select
                          label="Experiencia de interes"
                          value={form.subject}
                          onChange={handleChange('subject')}
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                        >
                          {experienceOptions.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                              {opt}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Mensaje"
                          multiline
                          rows={4}
                          value={form.message}
                          onChange={handleChange('message')}
                          placeholder="Cuentanos que tienes en mente: fechas, numero de personas, preferencias..."
                          required
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          disabled={loading}
                          endIcon={<Send />}
                          sx={{ py: 1.5 }}
                        >
                          {loading ? 'Enviando...' : 'Enviar Mensaje'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success" icon={<CheckCircle />} sx={{ borderRadius: 3 }}>
          Mensaje enviado exitosamente. Te contactaremos pronto!
        </Alert>
      </Snackbar>
    </Box>
  );
}
