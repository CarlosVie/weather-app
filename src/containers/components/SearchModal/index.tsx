import React from 'react';
import { StyledModal, StyledPage } from './style';

interface ModalProps {
  handleClose: () => void,
  open: boolean,
  value: string
}

const SearchModal = ({handleClose, open, value}: ModalProps) => {
  console.log('MODAL', open)
  return(
    <StyledModal
      open={open}
      onClose={handleClose}
    >
      <StyledPage elevation={5}>
        <p>{value}</p>
      </StyledPage>
    </StyledModal>
  )
}

export default (SearchModal);