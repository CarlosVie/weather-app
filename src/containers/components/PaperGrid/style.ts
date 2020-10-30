import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { StyledPaper } from '../PaperCard/style';

export const StyledCardGridTypography = styled(Typography)`
   && {
     text-align: center;
     font-weight: 800;
   }
`;

export const StyledChildGrid = styled(Grid)`
   &:hover {
    ${StyledCardGridTypography} {
      color: #91B8F5;
      cursor: pointer;
   }
    ${StyledPaper} {
      background: #91B8F5;
      cursor: pointer;
    }
   }
`;

export const StyledRootGrid = styled(Grid)`
   && {
     padding: 15px 15px;
     flex-grow: 1;
   }
`;

