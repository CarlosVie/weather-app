import { Grid, GridSpacing, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import { Forecast } from '../../pages/HomePage/redux/types';
import { getDate } from '../PaperCard/helper';
import { formatDate } from './helper';
import {
  StyledCityTypography,
  StyledDayTypography,
  StyledGridList, StyledIcon,
  StyledPaper, StyledTempTypography
} from './style';

interface ScrodListState {
  forecast?: Forecast,
}

const ScrodList = ({forecast}: ScrodListState) => {
  console.log('forecast', forecast);
  const spacing: GridSpacing = 7;
  
  return (
    <StyledGridList>
      <StyledCityTypography>
        {forecast?.location.name}
      </StyledCityTypography>
      <Grid container xs={12} justify="center" spacing={spacing}>
        {forecast?.forecast.forecastday.map((day) => (
          <Grid key={day.date} item>
            <StyledPaper elevation={5}>
              <StyledIcon src={day.day.condition.icon}/>
              <StyledTempTypography>
                {day.day.maxtemp_c}/{day.day.mintemp_c}
              </StyledTempTypography>
              <StyledDayTypography>
                {formatDate(day.date)}
              </StyledDayTypography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </StyledGridList>
  );
};

export default memo(ScrodList);