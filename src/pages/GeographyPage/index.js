import React from 'react';

// MUI
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

// Components
import { tokens } from '../../theme';
import { Header } from '../../components/Header';
import { GeographyChart } from '../../components/Charts/GeographyChart';

export function GeographyPage() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Geography Chart" />
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
        <GeographyChart />
      </Box> 
    </Box>
  );
} 