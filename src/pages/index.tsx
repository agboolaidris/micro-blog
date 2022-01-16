import { Grid, Box } from '@mui/material';
import Dashboard from '../layout/dashboard';
import ContentCard from '../components/shared/contentCard';
import UserCard from '../components/shared/userCard';
import TrendCard from '../components/shared/trendCard';
import PostCard from '../components/shared/postCard';
import { AddFriendCard } from '../components/cards/friendCard';
import { ShadowBox } from '../styles';

const Home = () => (
  <Dashboard>
    <Grid container spacing={{ md: 2 }} sx={{ width: '100%' }}>
      <Grid
        md={3}
        item
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'sticky',
          top: '80px',
          maxHeight: '100vh',
          overflow: 'auto',
        }}
      >
        <UserCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <PostCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Grid>
      <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <TrendCard />
        <ShadowBox>
          <AddFriendCard
            data={{ name: 'Idris Agbbola', stamp: '2 days ago' }}
          />
          <AddFriendCard
            data={{ name: 'Adewuyi Babatunde', stamp: '12 days ago' }}
          />
          <AddFriendCard
            data={{ name: 'Kelvin Adebanjo', stamp: '2 weeks ago' }}
          />
        </ShadowBox>
      </Grid>
    </Grid>
  </Dashboard>
);

export default Home;
