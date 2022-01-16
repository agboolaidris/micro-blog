import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';

import { AddFriendCard } from '../cards/friendCard';
import { Typography } from '@mui/material';

export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const theme = useTheme();
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Tooltip title="notifications">
          <IconButton onClick={handleClick}>
            <Badge badgeContent={1000} color="error">
              <NotificationsActiveRoundedIcon
                sx={{ color: theme.palette.common.white }}
              />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        disableScrollLock={true}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        sx={{ paddingRight: '100px' }}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            maxWidth: '300px',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Typography sx={{ padding: '5px' }}>Friend Request</Typography>
        <Divider />
        <AddFriendCard
          data={{ name: 'Bashiru Ayomide', stamp: '2 Minutes ago' }}
        />
        <AddFriendCard data={{ name: 'Idris Agbbola', stamp: '2 days ago' }} />
        <AddFriendCard data={{ name: 'Idris Agbbola', stamp: '2 days ago' }} />
      </Menu>
    </React.Fragment>
  );
}
