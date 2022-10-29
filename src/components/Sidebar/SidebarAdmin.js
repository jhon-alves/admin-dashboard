import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar collapsed={isCollapsed} backgroundColor={colors.primary[400]}>
      <Menu>
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed && <MenuOutlinedIcon />}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                DASHES
              </Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && <MenuAvatar />}

        <MenuItems isCollapsed={isCollapsed} selected={selected} setSelected={setSelected} />
      </Menu>
    </Sidebar>
  );
}