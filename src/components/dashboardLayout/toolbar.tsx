import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Search from './search';
import PrivateMenu from './menu';

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            MUI
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <PrivateMenu/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
