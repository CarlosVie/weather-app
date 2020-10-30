import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledImg = styled.img`
   && {
     position: absolute;
     width: 16px;
     height: 16px;
     right: 5px;
     top: -1px;
   }
`;

export const StyledDiv = styled.div`
   && {
     flex: content;
     position: absolute;
     left: 170px;
     bottom: 20px;
     padding: 2px;
   }
`;

export const StyledTypography = styled(Typography)`
   && {
     position: absolute;
     text-align: center;
     font: Bold 12px/12px Arial;
     color: #757575;
   }
`;