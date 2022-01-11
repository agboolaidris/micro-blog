import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import {
  Typography,
  Box,
  IconButton,
  alpha,
  Tooltip,
  Card,
} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TrendCardStyled = styled(Card)<{ theme?: Theme }>`
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 3px;
`;
const ChildCard = styled.div<{ theme?: Theme }>`
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  justify-content: space-between;
  align-items: 'start';
  &:last-child {
    margin-bottom: 10px;
  }
  .caption {
    font-size: 12px;
    line-height: 13px;
    margin: 0;
    color: ${({ theme }) => theme.colors.toolbar};
  }
  .trend {
    font-size: 16px;
    margin: 2px 0;
  }
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => alpha(theme.colors.toolbar, 0.1)};
  }
`;

function TrendCard() {
  return (
    <TrendCardStyled>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 10px 0 10px ',
        }}
      >
        <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>
          Trending in your location
        </Typography>
        <IconButton>
          <Tooltip title="settings">
            <EngineeringIcon sx={{ fontSize: '20px' }} />
          </Tooltip>
        </IconButton>
      </Box>

      <ChildCard>
        <Box>
          <p className="caption">sport .trending</p>
          <p className="trend">CR7</p>
          <p className="caption">20k posts</p>
        </Box>
        <IconButton size="small" sx={{ height: '80%' }}>
          <Tooltip title="more">
            <MoreHorizIcon />
          </Tooltip>
        </IconButton>
      </ChildCard>
      <ChildCard>
        <Box>
          <p className="caption">Politcs .trending</p>
          <p className="trend">M Buhari</p>
          <p className="caption">20k posts</p>
        </Box>
        <IconButton size="small" sx={{ height: '80%' }}>
          <Tooltip title="more">
            <MoreHorizIcon />
          </Tooltip>
        </IconButton>
      </ChildCard>
      <ChildCard>
        <Box>
          <p className="caption">Technology .trending</p>
          <p className="trend">Javascript</p>
          <p className="caption">4.4k posts</p>
        </Box>
        <IconButton size="small" sx={{ height: '80%' }}>
          <Tooltip title="more">
            <MoreHorizIcon />
          </Tooltip>
        </IconButton>
      </ChildCard>
      <ChildCard>
        <Box>
          <p className="caption">Technology .trending</p>
          <p className="trend">Javascript</p>
          <p className="caption">4.4k posts</p>
        </Box>
        <IconButton size="small" sx={{ height: '80%' }}>
          <Tooltip title="more">
            <MoreHorizIcon />
          </Tooltip>
        </IconButton>
      </ChildCard>
      <ChildCard>
        <Box>
          <p className="caption">Technology .trending</p>
          <p className="trend">Javascript</p>
          <p className="caption">4.4k posts</p>
        </Box>
        <IconButton size="small" sx={{ height: '80%' }}>
          <Tooltip title="more">
            <MoreHorizIcon />
          </Tooltip>
        </IconButton>
      </ChildCard>
    </TrendCardStyled>
  );
}

export default TrendCard;
