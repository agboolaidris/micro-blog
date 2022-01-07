import React, { useState } from 'react';
import { alpha, Theme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const SearchWrapper = styled.div<{ theme?: Theme }>`
  width: 500px;
  position: relative;
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.15)};
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-left: 0;
  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.common.white, 0.25)};
  }
`;

const SearchIconWrapper = styled.div<{ theme?: Theme }>`
  padding: ${({ theme }) => theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputBase = styled(InputBase)<{ theme?: Theme }>`
  color: inherit;
  width: 100%;
  .MuiInputBase-input {
    padding: ${({ theme }) => theme.spacing(1, 1, 1, 0)};
    padding-left: ${({ theme }) => `calc(1em + ${theme.spacing(4)})`};
    transition: ${({ theme }) => theme.transitions.create('width')};
  }
`;

const SearchOutput = styled(Box)<{ open: boolean }>`
  position: absolute;
  top: 100px;
  background: red;
`;

function Search() {
  const [open, setopen] = useState(false);

  const handleChange = () => {
    setopen(true);
  };

  return (
    <>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
      </SearchWrapper>
      <SearchOutput open={open}>BOOO</SearchOutput>
    </>
  );
}

export default Search;
