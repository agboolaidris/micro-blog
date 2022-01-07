import React, { ReactNode } from 'react';
import { Box as Wrap, Container } from '@mui/material';
import Toobar from '../components/dashboardLayout/toolbar';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}
const Box = styled(Wrap)``;

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

      <Container sx={{ marginTop: '80px', paddingX: '0', paddingY: '5px' }}>
        {children}
      </Container>
    </Box>
  );
}

export default Dashboard;
