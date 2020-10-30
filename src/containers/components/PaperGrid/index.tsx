import React, { memo } from 'react';
import {
  Grid,
  GridSpacing,
} from '@material-ui/core';
import { WeatherData } from '../../pages/HomePage/redux/types';
import PaperCard from '../PaperCard';
import {
  StyledRootGrid,
  StyledCardGridTypography,
  StyledChildGrid
} from './style';

interface CardsGridProps {
  items: Array<WeatherData>,
  select: (city: string) => void,
}

const CardsGrid = ({items, select}: CardsGridProps) => {
  const spacing: GridSpacing = 5;
  
  return (
    <StyledRootGrid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {items.map((item) => (
            <StyledChildGrid key={item.id} item>
              <a key={item.id} onClick={() => select(item.name)}>
                <PaperCard item={item}/>
                <StyledCardGridTypography variant="subtitle1" color="textSecondary">
                  {item.name}
                </StyledCardGridTypography>
              </a>
            </StyledChildGrid>
          ))}
        </Grid>
      </Grid>
    </StyledRootGrid>
  );
};

export default memo(CardsGrid);
