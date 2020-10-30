import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const StyledImage = styled.img`
   && {
     height: 110px;
     width: 130px;
     border-radius: 25px;
     position: absolute;
     left: 35px;
     top: 10px;
   }
`;

export const StyledDateTypography = styled(Typography)`
   && {
     position: absolute;
     font: Bold 12px/12px Arial;
     color: #757575;
     right: 30px;
     top: 10px;
   }
`;

export const StyledTypography = styled(Typography)`
   && {
     position: absolute;
     text-align: center;
     right: 30px;
     top: 50px;
     font: Bold 40px/40px Arial;
     color: #757575;
   }
`;

export const StyledInfoTypography = styled(Typography)`
   && {
     position: absolute;
     font: Bold 10px/10px Arial;
     bottom: 10px;
     right: 30px;
     color: #757575;
   }
`;

export const StyledHumidityTypography = styled(Typography)`
   && {
     position: absolute;
     font: Bold 15px/15px Arial;
     bottom: 10px;
     left: 40px;
     color: #757575;
   }
`;

export const StyledPaper = styled(Paper)`
   && {
     position: relative;
     height: 140px;
     width: 350px;
     border-radius: 25px;
   }
`;



