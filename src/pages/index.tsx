import { Grid } from '@mui/material';
import Head from 'next/head';
import Dashboard from '../layout/dashboard';
import Card from '../components/shared/card';

const Home = () => (
  <Dashboard>
    <Grid container spacing={2}>
      <Grid md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        gdgdhshshshshshhsh
      </Grid>
      <Grid item xs={12} md={6}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <Grid md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        gdgdhshshshshshhsh
      </Grid>
    </Grid>
  </Dashboard>
);

export default Home;
