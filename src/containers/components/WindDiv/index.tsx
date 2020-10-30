import React, { memo } from 'react';
import { StyledDiv, StyledImg, StyledTypography } from './style';

interface WindComponentProps {
  value: number
}
const WindComponent = ({value}: WindComponentProps) => {
  const BROKEN_CLOUDS = require('../../../assets/images/wind.png')
  const wind = `${value}m/s`
  
  return(
    <StyledDiv>
      <StyledImg src={BROKEN_CLOUDS}/>
      <StyledTypography>
        {wind}
      </StyledTypography>
    </StyledDiv>
  )
}

export default memo(WindComponent);
