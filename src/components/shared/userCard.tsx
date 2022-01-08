import * as React from 'react';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import TwitterIcon from '@mui/icons-material/Twitter';
import CardContent from '@mui/material/CardContent';
import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import { Avatar, Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import LanguageIcon from '@mui/icons-material/Language';

export default function UserCard() {
  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Avatar
          sx={{
            marginX: 'auto',
            marginBottom: '40px',
            width: 100,
            height: 100,
          }}
        ></Avatar>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="div">
            Idris Agboola
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            software developer based in Lagos, Nigeria.
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <Box sx={{ paddingX: '10px', paddingBottom: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguageIcon
            sx={{ marginRight: '10px', color: grey[500], fontSize: '20px' }}
          />

          <Link
            sx={{ fontSize: '14px' }}
            href="https://agboolaidris.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            https://agboolaidris.github.io/
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
          <TwitterIcon
            sx={{ marginRight: '10px', color: grey[500], fontSize: '20px' }}
          />

          <Link
            sx={{ fontSize: '14px' }}
            href="https://twitter.com/I_AM_IDRIIS"
            target="_blank"
            rel="noreferrer"
          >
            https://twitter.com/I_AM_IDRIIS
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
