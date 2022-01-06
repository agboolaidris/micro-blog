import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import _styled from '@emotion/styled';
import { Box } from '@mui/material';

const SearchWrapper = _styled.div`
    width: 500px;
  position: relative;
`;

// borderRadius: theme.shape.borderRadius,
// backgroundColor: alpha(theme.palette.common.white, 0.15),
// marginRight: theme.spacing(2),
// marginLeft: 0,
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },

// }));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

const SearchOutput = _styled(Box)<{ open: boolean }>`
 position:absolute;
 top:100px;
 background:red;
 

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
