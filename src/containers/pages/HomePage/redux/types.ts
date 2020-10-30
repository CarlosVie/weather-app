import { Action } from 'redux';
import { WeatherActionsType } from './constants';

export interface Weather {
  id: number,
  main: string,
  description: string
  icon: string
}

interface Temperature {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

interface Wind {
  speed: number
}
export interface WeatherData {
  id: number,
  name: string,
  weather: Weather[],
  main: Temperature,
  visibility: number,
  icon: string,
  wind: Wind
}

export interface WeatherListState {
  items: Array<WeatherData>,
  error: any,
  loading: string
}

interface WeatherSearchState {
  item?: WeatherData,
  error: any,
  loading: string
}

interface Location {
  name: string,
  region: string,
  country: string
}

interface Condition {
  text: string,
  icon: string,
  code: string,
}

interface Current {
  temp_c: number, // celsius
  condition: Condition,
  wind_mph: number // mph
}

interface Day {
  maxtemp_c: number,
  mintemp_c: number,
  maxwind_mph: number,
  condition: Condition,
}

interface Days {
  date: string,
  day: Day,
}

interface ForecastDay {
  forecastday: Days[],
}

export interface Forecast {
  location: Location,
  current: Current,
  forecast: ForecastDay,
}

export interface ForecastState {
  item?: Forecast,
  error: any,
  loading: string
}

export interface FetchInitialCities extends Action {
  type: WeatherActionsType.INITIAL_FETCH,
}

export interface FetchInitialCitiesFailed extends Action {
  type: WeatherActionsType.FETCH_ERROR,
  payload: any
}

export interface FetchInitialCitiesSuccess extends Action {
  type: WeatherActionsType.FETCH_SUCCESS,
  payload: WeatherData[],
}

export interface SearchCity extends Action {
  type: WeatherActionsType.SEARCH_CITY,
  payload: string
}

export interface SearchCitySuccess extends Action {
  type: WeatherActionsType.SEARCH_CITY_SUCCESS,
  payload: WeatherData
}

export interface SearchCityFailed extends Action {
  type: WeatherActionsType.SEARCH_CITY_FAILED,
  payload: any
}

export interface FetchForecaste extends Action {
  type: WeatherActionsType.FETCH_FORECAST,
  payload: string
}

export interface FetchForecasteSuccess extends Action {
  type: WeatherActionsType.FETCH_FORECAST_SUCCESS,
  payload: Forecast
}

export interface FetchForecasteFailed extends Action {
  type: WeatherActionsType.FETCH_FORECAST_FAILED,
  payload: any
}

export type WeatherActions = FetchInitialCities
  | FetchInitialCitiesFailed
  | FetchInitialCitiesSuccess
  | SearchCity
  | SearchCitySuccess
  | SearchCityFailed
  | FetchForecaste
  | FetchForecasteSuccess
  | FetchForecasteFailed;

export interface WeatherState {
  list: WeatherListState,
  search: WeatherSearchState,
  forecastState: ForecastState,
}
