'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
  useTheme,
} from '@mui/material';
import Send from '@mui/icons-material/Send';
import CheckCircle from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { subscribeNewsletter } from '@/lib/firebaseActions';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const theme = useTheme();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await subscribeNewsletter({ email });
    setLoading(false);
    setSuccess(true);
    setEmail('');
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, rgba(15,107,111,0.09), rgba(196,154,74,0.06))'
            : 'linear-gradient(135deg, rgba(15,107,111,0.045), rgba(196,154,74,0.03))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: 'rgba(15,107,111,0.09)',
        }}
      />

      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
              {t('newsletter.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {t('newsletter.subtitle')}
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                gap: 1.5,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <TextField
                fullWidth
                placeholder={t('newsletter.placeholder')}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    background: theme.palette.background.paper,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                endIcon={<Send />}
                sx={{ px: 4, whiteSpace: 'nowrap', minWidth: 150 }}
              >
                {loading ? t('newsletter.loading') : t('newsletter.button')}
              </Button>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
              {t('newsletter.disclaimer')}
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={5000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          icon={<CheckCircle />}
          sx={{ borderRadius: 3 }}
        >
          {t('newsletter.success')}
        </Alert>
      </Snackbar>
    </Box>
  );
}
