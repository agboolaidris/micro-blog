import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Toobar from '../components/dashboardLayout/toolbar';
import { useTheme } from '@mui/material/styles';

interface Props {
  children: ReactNode;
}

function Dashboard({ children }: Props) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: theme.colors.background,
        minHeight: '100vh',
      }}
    >
      <Toobar />
      <Box sx={{ marginTop: '100px' }}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
