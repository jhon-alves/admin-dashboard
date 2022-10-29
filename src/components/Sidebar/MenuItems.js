import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from 'react-pro-sidebar';

// MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// MUI Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// Components
import { tokens } from '../../theme';

export function MenuItems({ collapsed }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  function Item({ title, to, icon }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        icon={icon}
        active={location.pathname === to}
        style={{ color: colors.grey[100] }}
        routerLink={<Link to={to} />}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  }

  return (
    <Box paddingLeft={collapsed ? undefined : "10%"}>
      <Item
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
      />

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Data
      </Typography>
      <Item
        title="Manage Team"
        to="/team"
        icon={<PeopleOutlinedIcon />}
      />
      <Item
        title="Contacts Information"
        to="/contacts"
        icon={<ContactsOutlinedIcon />}
      />
      <Item
        title="Invoices Balances"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
      />

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Pages
      </Typography>
      <Item
        title="Profile Form"
        to="/form"
        icon={<PersonOutlinedIcon />}
      />
      <Item
        title="Calendar"
        to="/calendar"
        icon={<CalendarTodayOutlinedIcon />}
      />
      <Item
        title="FAQ Page"
        to="/faq"
        icon={<HelpOutlineOutlinedIcon />}
      />

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        Charts
      </Typography>
      <Item
        title="Bar Chart"
        to="/bar"
        icon={<BarChartOutlinedIcon />}
      />
      <Item
        title="Pie Chart"
        to="/pie"
        icon={<PieChartOutlineOutlinedIcon />}
      />
      <Item
        title="Line Chart"
        to="/line"
        icon={<TimelineOutlinedIcon />}
      />
      <Item
        title="Geography Chart"
        to="/geography"
        icon={<MapOutlinedIcon />}
      />
    </Box>
  );
}