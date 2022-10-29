import React from 'react';

// MUI
import Grid from '@mui/material/Grid';

// MUI Icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';

// Components
import { StatBox } from './StatBox';

export function FirstRow() {
  return (
    <>
      <Grid item xs={3}>
        <StatBox
          title='15.356'
          subtitle='Emails Sent'
          progress='0.75'
          increase="+14%"
          icon={<EmailOutlinedIcon />}
        />
      </Grid>
      <Grid item xs={3}>
        <StatBox
          title='500.356'
          subtitle='sales Obtained'
          progress='0.75'
          increase="+14%"
          icon={<PointOfSaleOutlinedIcon />}
        />
      </Grid>
      <Grid item xs={3}>
        <StatBox
          title='12.356'
          subtitle='New Clients'
          progress='0.75'
          increase="+14%"
          icon={<PersonAddAlt1OutlinedIcon />}
        />
      </Grid>
      <Grid item xs={3}>
        <StatBox
          title='1.535,234'
          subtitle='Traffic Inbound'
          progress='0.75'
          increase="+14%"
          icon={<TrafficOutlinedIcon />}
        />
      </Grid>
    </>
  );
}