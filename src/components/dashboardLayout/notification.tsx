import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import { ChildCard } from '../shared/trendCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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
        <ChildCard sx={{ minWidth: '200px' }}>
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
        <ChildCard sx={{ minWidth: '200px' }}>
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
        <Divider />
      </Menu>
    </React.Fragment>
  );
}
