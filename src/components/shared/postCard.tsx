import React, { useState } from 'react';
import MUICard from '@mui/material/Card';
import { useTheme, Theme } from '@mui/material/styles';
import {
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Avatar,
  Button,
  IconButton,
} from '@mui/material';
import styled from '@emotion/styled';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import Editor from './editor';

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

export default function PostCard() {
  const [openModal, setModalOpen] = useState(false);

  const theme = useTheme();
  const handleClose = () => {
    setModalOpen(false);
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
            onClick={() => setModalOpen(true)}
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
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ maxWidth: '100%' }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
          Create Post
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '20px',
              top: '10px',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ marginX: '20px' }} />
        <DialogContent sx={{ width: { sm: '500px', md: '600px' } }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Avatar></Avatar>
            <Box sx={{ marginLeft: '10px' }}>
              <Typography>Idris Ishola Agboola</Typography>
              <Button
                size="small"
                variant="contained"
                color="inherit"
                sx={{ bgcolor: theme.palette.grey[100] }}
                startIcon={<LanguageIcon />}
                endIcon={<ArrowDropDownIcon />}
              >
                public
              </Button>
            </Box>
          </Box>
          <Editor onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}
