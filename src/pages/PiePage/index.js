import React from 'react';

// MUI
import { Box } from '@mui/material';

// Components
import { Header } from '../../components/Header';
import { PieChart } from '../../components/Charts/PieChart';

export function PiePage() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
} 