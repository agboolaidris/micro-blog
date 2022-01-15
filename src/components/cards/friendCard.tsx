import {
  Avatar,
  Stack,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from '@emotion/styled';
import { Theme, alpha } from '@mui/material';

const Wrap = styled(Stack)<{ theme?: Theme }>`
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => alpha(theme.colors.toolbar, 0.1)};
  }
`;

interface Props {
  data: {
    name: string;
    stamp: string;
  };
  onAccept?: () => void;
  onReject?: () => void;
}

export const AddFriendCard = ({ data, onAccept, onReject }: Props) => {
  return (
    <Wrap direction="row" spacing={1} sx={{ padding: 1 }}>
      <Avatar>H</Avatar>
      <Box>
        <Typography variant="body1" sx={{ lineHeight: '12px' }}>
          {data.name}{' '}
          <Typography variant="body2" component="span">
            sent you a friend request
          </Typography>
        </Typography>
        <Typography variant="body2" color="blue" sx={{ lineHeight: '15px' }}>
          {data.stamp}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginTop: '5px' }}>
          <Button
            variant="contained"
            color="info"
            size="small"
            onClick={onAccept && onAccept}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={onReject && onReject}
          >
            Reject
          </Button>
        </Stack>
      </Box>
    </Wrap>
  );
};
