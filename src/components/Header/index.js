import React from 'react';

// MUI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
// MUI Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Components
import { tokens } from '../../theme';

export function Header({ title, children }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  function handleReturnPage() {
    navigate(-1);
  }

  return (
    <Box mb="30px" display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <IconButton onClick={handleReturnPage}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ pl: 1 }}
        >
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
}