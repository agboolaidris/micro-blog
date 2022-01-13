import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Theme } from '@mui/material';
export const ShadowBox = styled(Box)<{ theme?: Theme }>`
  box-shadow: ${({ theme }) => theme.shadows[3]};
  border-radius: 3px;
  padding: 10px 0;
`;
