import { Avatar, Grid } from '@material-ui/core';
import React, { memo } from 'react';
import SearchBar from '../Search';
import { StyledGrid } from './style';

interface HeaderProps {
  readonly search: (city: string) => void,
}

const HeaderBar = ({search}: HeaderProps) => {
  return (
    <div>
      <StyledGrid>
        <StyledGrid item xs={11}>
          <SearchBar search={search}/>
        </StyledGrid>
        <Grid >
          <Avatar alt="Remy Sharp" >CV</Avatar>
        </Grid>
      </StyledGrid>
    </div>
  );
};

export default memo(HeaderBar);