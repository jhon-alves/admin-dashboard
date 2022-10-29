import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Components
import { Header } from '../../components/Header';
import { FirstRow } from '../../components/Dashboard/FirstRow';
import { SecondRow } from '../../components/Dashboard/SecondRow';
import { ThirdRow } from '../../components/Dashboard/ThirdRow';

export function DashboardPage() {
  return (
    <Box m="20px">
      <Header title="Dashboard" />
      
      <Grid container spacing={2}>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </Grid>
    </Box>
  );
}