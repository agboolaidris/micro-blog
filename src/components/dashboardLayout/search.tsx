import React, { useState } from 'react';
import { alpha, Theme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Box, Dialog } from '@mui/material';

const SearchWrapper = styled(Box)<{ theme?: Theme; open?: boolean }>`
  width: 100%;
  max-width: auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0, 1)};
  border-radius: 50px;
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.15)};
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

const StyledInputBase = styled(InputBase)<{ theme?: Theme }>`
  color: inherit;
  width: 100%;
  .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing(1)};
    transition: ${({ theme }) => theme.transitions.create('width')};
  }
`;

const DialogBox = styled(Box)<{ theme?: Theme }>`
  padding: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.background};
  min-height: 100%;
  .box-search {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

function Search() {
  //const theme = useTheme();
  const [open, setopen] = useState(false);

  return (
    <Box sx={{ maxWidth: 'auto', width: '500px', position: 'relative' }}>
      <SearchWrapper sx={{ width: { xs: 'max-content', md: '100%' } }}>
        <SearchIcon sx={{ height: '40px' }} onClick={() => setopen(true)} />

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onClick={() => setopen(true)}
          tabIndex={10}
          sx={{ display: { md: 'block', xs: 'none' } }}
        />
        <Dialog
          fullScreen
          open={open}
          disableScrollLock={true}
          onClose={() => setopen(false)}
        >
          <DialogBox>
            <div className="box-search">
              <SearchWrapper open={open}>
                <SearchIcon />

                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />

                <ClearIcon onClick={() => setopen(false)} />
              </SearchWrapper>
              <h1>HEKKOW</h1>
            </div>
          </DialogBox>
        </Dialog>
      </SearchWrapper>
    </Box>
  );
}

export default Search;
