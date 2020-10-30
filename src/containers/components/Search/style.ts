import styled from 'styled-components';
import { IconButton, InputBase, Paper } from '@material-ui/core';

export const StyledPage = styled(Paper)`
   && {
     padding: 2px 4px;
     display: flex;
     width: 220px;
     background: #F2F2F2;
     border-radius: 25px;
   }
`;

export const StyledInputBase = styled(InputBase)`
   && {
     flex: 1;
     padding: 2px 4px;
   }
`;

export const StyledIconButton = styled(IconButton)`
   && {
    padding: 2px 4px;
    background: transparent;
    color: blueviolet;
  }
`;
