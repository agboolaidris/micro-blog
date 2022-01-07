import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from './search';
import PrivateMenu from './menu';
import { useTheme } from '@mui/material/styles';

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  return (
    <AppBar>
      <Toolbar
        sx={{
          background: theme.colors.toolbar,
          height: '80px',
        }}
      >
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          TWOA
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Search />
        <Box sx={{ flexGrow: 1 }} />
        <PrivateMenu />
      </Toolbar>
    </AppBar>
  );
}
