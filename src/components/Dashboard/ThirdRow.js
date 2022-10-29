import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// Components
import { tokens } from '../../theme';
import { BarChart } from '../../components/Charts/BarChart';
import { PieChart } from '../../components/Charts/PieChart';
import { ProgressCircle } from '../../components/ProgressCircle';
import { GeographyChart } from '../../components/Charts/GeographyChart';

export function ThirdRow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Grid item xs={4}>
        <Box p="20px 30px" borderRadius="8px" backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Campaign
          </Typography>
          <Box height="200px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box p="20px 30px" borderRadius="8px" backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={4}>
        <Box p="20px 30px" borderRadius="8px" backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>
    </>
  );
}