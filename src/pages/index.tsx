import { Grid } from '@mui/material';
import Head from 'next/head';
import Dashboard from '../layout/dashboard';
import ContentCard from '../components/shared/contentCard';
import UserCard from '../components/shared/userCard';
import TrendCard from '../components/shared/trendCard';
import PostCard from '../components/shared/postCard';

const Home = () => (
  <Dashboard>
    <Grid container spacing={{ md: 2 }} sx={{ width: '100%' }}>
      <Grid md={3} item sx={{ display: { xs: 'none', md: 'block' } }}>
        <UserCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <PostCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Grid>
      <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <TrendCard />
      </Grid>
    </Grid>
  </Dashboard>
);

export default Home;
