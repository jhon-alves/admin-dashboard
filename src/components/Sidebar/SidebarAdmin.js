import React from 'react';
import { Sidebar, Menu, useProSidebar } from 'react-pro-sidebar';

// MUI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// MUI Icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Components
import { tokens } from '../../theme';
import { MenuItems } from './MenuItems';
import { MenuAvatar } from './MenuAvatar';

export function SidebarAdmin() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Sidebar backgroundColor={colors.primary[400]}>
      <Menu renderMenuItemStyles={() => {}}>
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent={collapsed ? 'center' : 'start'} 
          margin={collapsed ? '10px 0 20px' : '10px 30px 20px'}
        >
          <IconButton onClick={() => collapseSidebar()}>
            <MenuOutlinedIcon />
          </IconButton>
          {!collapsed && 
            <Typography variant="h3" color={colors.grey[100]} sx={{ pl: 2 }}>
              DASHES
            </Typography>
          }
        </Box>

        {!collapsed && <MenuAvatar />}

        <MenuItems collapsed={collapsed} />
      </Menu>
    </Sidebar>
  );
}