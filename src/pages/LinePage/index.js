import React from 'react';

// MUI
import { Box } from '@mui/material';

// Components
import { Header } from '../../components/Header';
import { LineChart } from '../../components/Charts/LineChart';

export function LinePage() {
  return (
    <Box m="20px">
      <Header title="Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box> 
    </Box>
  );
} 