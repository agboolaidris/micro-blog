import { Grid } from '@mui/material';
import Head from 'next/head';
import Dashboard from '../layout/dashboard';
import Card from '../components/shared/card';

const Home = () => (
  <Dashboard>
    <Grid container rowSpacing={2} sx={{ width: '100%' }}>
      <Grid md={3} item sx={{ display: { xs: 'none', md: 'block' } }}>
        gdgdhshshshshshhsh
      </Grid>
      <Grid item xs={12} md={6}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        gdgdhshshshshshhsh
      </Grid>
    </Grid>
  </Dashboard>
);

export default Home;
