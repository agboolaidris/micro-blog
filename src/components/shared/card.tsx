import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ForumIcon from '@mui/icons-material/Forum';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const IconWrapper = styled.div`
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  svg {
    font-size: 16px;
  }
`;

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: '100%', marginTop: '3px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src="/idris.png"
            alt="Agboola Idris"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <Box sx={{ marginLeft: '50px' }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>

        <CardActions sx={{ paddingY: '0', marginY: '0' }}>
          <IconWrapper>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <Typography variant="body2">100</Typography>
          </IconWrapper>
          <IconWrapper>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <Typography variant="body2">100</Typography>
          </IconWrapper>
        </CardActions>
      </Box>
    </Card>
  );
}
