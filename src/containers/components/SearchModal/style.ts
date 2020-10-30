import { Modal, Paper } from '@material-ui/core';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
   && {
     position: absolute;
   }
`;

export const StyledPage = styled(Paper)`
   && {
     position: absolute;
     width: 400px;
     height: 300px;
     top: 30%;
     left: 35%;
     border-radius: 25px;
   }
`;