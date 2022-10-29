import React from 'react';

// MUI
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

// Components
import { tokens } from '../../theme';

export function ProgressCircle({ progress = '0.75', size = '40' }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box 
      sx={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: `
          radial-gradient(${colors.primary[400]} 55% transparent 56%),
          conic-gradient(transparent 0deg ${angle}deg, 
          ${colors.blueAccent[500]} ${angle}deg 360deg),
          ${colors.greenAccent[500]}
        `
      }}
    />
  );
}