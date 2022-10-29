import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// MUI Icons
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

// Components
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import { LineChart } from '../../components/Charts/LineChart';

export function SecondRow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Grid item xs={8}>
        <Box p="20px 30px" borderRadius="8px" backgroundColor={colors.primary[400]} maxHeight={350}>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={4}> 
        <Box p="20px 30px" borderRadius="8px" backgroundColor={colors.primary[400]} maxHeight={350} overflow='overlay'>
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Recent Transactions
          </Typography>

          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`2px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
}