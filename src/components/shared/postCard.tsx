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
import { Collapse } from '@mui/material';
import { alpha, Theme } from '@mui/material/styles';
import { TextareaAutosize } from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Button from '@mui/material/Button';

const SearchWrapper = styled.div<{ theme?: Theme; open?: boolean }>`
  width: 100%;
  max-width: auto;
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.palette.grey[500]};
  border-radius: 50px;
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.15)};
  overflow: hidden;
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.25)};
  }

  ${({ open, theme }) =>
    open &&
    css`
      background-color: ${alpha(theme.colors.toolbar, 0.15)};
      &:hover {
        background-color: ${alpha(theme.colors.toolbar, 0.25)};
      }
    `}
`;

const StyledInputBase = styled(TextareaAutosize)<{ theme?: Theme }>`
  color: inherit;
  width: 100%;
  border: none;
  outline: none;
  padding-left: 3px;
  .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing(1)};
    transition: ${({ theme }) => theme.transitions.create('width')};
  }
`;

const IconWrapper = styled.div`
  color: gray;
  font-size: 12px;
  display: flex;
  align-items: center;
  svg {
    font-size: 16px;
  }
`;

export default function PostCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: '100%', marginTop: '3px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: '30px', height: '30px' }}
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

      <Box sx={{ marginLeft: '30px' }}>
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
            <IconButton onClick={() => setExpanded(!expanded)}>
              <ForumIcon />
            </IconButton>
            <Typography variant="body2">100</Typography>
          </IconWrapper>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box
            sx={{
              paddingY: '7px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Avatar sx={{ width: '30px', height: '30px' }}></Avatar>
            <Box sx={{ width: '100%', paddingX: '10px' }}>
              <SearchWrapper>
                <StyledInputBase
                  aria-label="empty textarea"
                  placeholder="Empty"
                  minRows={1}
                />
                <IconButton>
                  <EmojiEmotionsIcon />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </SearchWrapper>
              <Button
                variant="contained"
                sx={{
                  width: '30px',
                  height: '25px',
                  borderRadius: '15px',
                  fontSize: '10px',
                  marginTop: '7px',
                }}
              >
                Post
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Card>
  );
}
