import React from 'react';

// MUI
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// Components
import { tokens } from '../../theme';
import photoAdmin from '../../assets/user.png';

export function MenuAvatar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Avatar
          alt="profile-user"
          src={photoAdmin}
          sx={{ width: 100, height: 100 }}
        />
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          Jhon
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          CEO
        </Typography>
      </Box>  
    </Box>
  );
}