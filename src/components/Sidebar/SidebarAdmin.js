import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

// MUI
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
      <Menu>
        <MenuItem
          onClick={() => collapseSidebar()}
          icon={<MenuOutlinedIcon />}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!collapsed && 
            <Typography variant="h3" color={colors.grey[100]}>
              DASHES
            </Typography>
          }
        </MenuItem>

        {!collapsed && <MenuAvatar />}

        <MenuItems collapsed={collapsed} />
      </Menu>
    </Sidebar>
  );
}