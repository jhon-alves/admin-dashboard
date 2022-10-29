import React from 'react';

// MUI
import { Box } from '@mui/material';

// Components
import { Header } from '../../components/Header';
import { BarChart } from '../../components/Charts/BarChart';

export function BarPage() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box> 
    </Box>
  );
} 