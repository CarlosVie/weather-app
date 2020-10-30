import React from 'react';
import { WeatherData } from '../../pages/HomePage/redux/types';
import WindComponent from '../WindDiv';
import { getDate } from './helper';
import {
  StyledDateTypography,
  StyledHumidityTypography,
  StyledImage,
  StyledInfoTypography,
  StyledPaper,
  StyledTypography
} from './style';

interface CardRowProps {
  item: WeatherData,
}

const PaperCard = ({item}: CardRowProps): JSX.Element => {
  const celcius = (~~item.main.temp) - 273.15
  const temp = `${celcius.toFixed(2)}ºC`;
  const humidity = `${item.main.humidity}%`;
  const formatDate = getDate();
  
  return (
    <StyledPaper elevation={3}>
      <StyledDateTypography>
        {formatDate}
      </StyledDateTypography>
      <StyledTypography variant='h5'>
        {temp}
      </StyledTypography>
      <StyledImage src={item.icon} />
      <StyledHumidityTypography>
        {humidity}
      </StyledHumidityTypography>
      <StyledInfoTypography>
        {item.weather[0].description}
      </StyledInfoTypography>
      <WindComponent value={item.wind.speed} />
    </StyledPaper>
  );
};

export default PaperCard;