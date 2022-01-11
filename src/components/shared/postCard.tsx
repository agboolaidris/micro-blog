import * as React from 'react';
import MUICard from '@mui/material/Card';
import { useTheme, Theme } from '@mui/material/styles';
import {
  Divider,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
  Avatar,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';

const Card = styled(MUICard)<{ theme?: Theme; open?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Input = styled.input<{ theme?: Theme; open?: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin-left: 10px;
  border-radius: 50px;
  height: 40px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease-in-out;
  &:focus,
  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.light};
  }
`;

const ModalCard = styled(MUICard)<{ theme?: Theme; open?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing(2)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
`;

export default function PostCard() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Avatar></Avatar>
          <Input
            placeholder="what's is on your mind, Idris?"
            onKeyDown={() => setOpen(true)}
          />
        </Box>
        <Divider sx={{ marginY: '10px' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Button
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <VideoCameraBackIcon
                sx={{ color: theme.palette.secondary.light }}
              />
            }
          >
            Live Video
          </Button>
          <Button
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <ImageIcon sx={{ color: theme.palette.warning.light }} />
            }
          >
            Photo / Video
          </Button>
          <Button
            sx={{ color: theme.palette.grey[600] }}
            startIcon={
              <EmojiEmotionsIcon sx={{ color: theme.palette.error.light }} />
            }
          >
            Feeling / Activities
          </Button>
        </Box>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Dialog>
    </>
  );
}
