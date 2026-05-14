'use client';

import { Box, CircularProgress } from '@mui/material';

/** Shown instantly on client navigation to /cartagena, /bogota, /medellin while the route chunk loads. */
export default function CityRouteLoading() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        pt: 'clamp(96px, 18vh, 140px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color="primary" size={36} thickness={4} aria-label="Cargando destino" />
    </Box>
  );
}
