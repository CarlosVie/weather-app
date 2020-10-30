import { createSelector } from 'reselect';
import { ApplicationRootState } from '../../../../utils/types';
import { WeatherInitialState } from '../redux/reducer';

const weatherState = (state: ApplicationRootState) => state.weatherState || WeatherInitialState;

export const makeSelectItems = () =>
  createSelector(
    weatherState,
    state => state.list,
  );

export const makeSelectLastRouteAction = () =>
  createSelector(
    (state: ApplicationRootState) => state.router,
    subState => subState.action,
  );

export const makeSelectSearchCity = () =>
  createSelector(
    weatherState,
    state => state.search.item,
  );

export const makeSelectForecast = () =>
  createSelector(
    weatherState,
    state => state.forecastState,
  );