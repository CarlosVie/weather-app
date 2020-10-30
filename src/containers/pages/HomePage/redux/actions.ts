import { WeatherActionsType } from './constants';
import { Forecast, WeatherActions, WeatherData } from './types';

export const actionFetchInitialCities = (): WeatherActions => {
  return {
    type: WeatherActionsType.INITIAL_FETCH,
  };
};

export const actionFetchInitialCitiesSuccess = (payload: WeatherData[]): WeatherActions => {
  return {
    type: WeatherActionsType.FETCH_SUCCESS,
    payload,
  };
};

export const actionFetchInitialCitiesFailed = (payload: any): WeatherActions => {
  return {
    type: WeatherActionsType.FETCH_ERROR,
    payload
  };
};

export const actionSearchCity = (payload: string): WeatherActions => {
  return {
    type: WeatherActionsType.SEARCH_CITY,
    payload
  };
};

export const actionSearchCitySuccess = (payload: WeatherData): WeatherActions => {
  return {
    type: WeatherActionsType.SEARCH_CITY_SUCCESS,
    payload
  };
};

export const actionSearchCityFailed = (payload: any): WeatherActions => {
  return {
    type: WeatherActionsType.SEARCH_CITY_FAILED,
    payload
  };
};


/**
 * Fetch forecast for seven days
 */

export const actionFetchForecast = (payload: string): WeatherActions => {
  return {
    type: WeatherActionsType.FETCH_FORECAST,
    payload
  };
};

export const actionFetchForecastSuccess = (payload: Forecast): WeatherActions => {
  return {
    type: WeatherActionsType.FETCH_FORECAST_SUCCESS,
    payload
  };
};

export const actionFetchForecastFailed = (payload: any): WeatherActions => {
  return {
    type: WeatherActionsType.FETCH_FORECAST_FAILED,
    payload
  };
};
