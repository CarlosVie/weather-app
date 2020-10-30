import { GridList, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledGridList = styled(GridList)`
   && {
     flex-wrap: nowrap;
     transform: translateZ(0);
     height: 250px;
   }
`;

export const StyledDayTypography = styled(Typography)`
   && {
     position: absolute;
     font: Bold 13px/13px Arial;
     color: #757575;
     left: 40px;
     bottom: 5px;
   }
`;

export const StyledTempTypography = styled(Typography)`
   && {
     position: relative;
     font: Bold 15px/15px Arial;
     color: #757575;
     left: 32px;
     top: 5px;
   }
`;

export const StyledCityTypography = styled(Typography)`
   && {
     position: absolute;
     font: Bold 30px/30px Arial;
     color: #757575;
     left: 360px;
     text-align: center;
     height: 100px;
     top: 20px;
   }
`;

export const StyledIcon = styled.img`
   && {
     position: relative;
     height: 70px;
     width: 70px;
     left: 25px;
     top: 2px;
   }
`;

export const StyledPaper = styled(Paper)`
   && {
     top: 70px;
     position: relative;
     height: 120px;
     width: 120px;
     border-radius: 15px;
     left: 45px;
   }
`;