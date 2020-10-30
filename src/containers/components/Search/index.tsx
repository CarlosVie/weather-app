import React from 'react';
import SearchModal from '../SearchModal';
import {
  StyledIconButton,
  StyledInputBase,
  StyledPage
} from './style';
import SearchIcon from '@material-ui/icons/Search';

interface SearchProps {
  readonly search: (city: string) => void,
}

const SearchBar = ({search}: SearchProps) => {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState('');
  
  const onChange = (event: any) => {
    event.preventDefault();
    setCity(event.target.value);
  };
  
  const handleClose = () => {
    setOpen(false);
    setCity('');
  };
  
  const handleOpen = () => {
    setOpen(true);
  };
  
  const submit = () => {
    console.log(city);
    handleOpen();
    //search(city);
  }
  
  return (
    <StyledPage component="form">
      <form onSubmit={submit}>
        <StyledInputBase
          placeholder="Search City"
          inputProps={{'label': 'search google maps'}}
          onChange={onChange}
        />
        <StyledIconButton type='submit'>
          <SearchIcon/>
        </StyledIconButton>
      </form>
      <SearchModal
        open={open}
        handleClose={handleClose}
        value={city}
      />
    </StyledPage>
  );
};

export default (SearchBar);
