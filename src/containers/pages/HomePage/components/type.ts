import { RouterActionType } from "connected-react-router";
import History from 'history';
import { ForecastState, WeatherData, WeatherListState } from '../redux/types';

export const cities: string[] = [
  'Paris',
  'Amsterdam',
  'London',
  'Lisbon',
  'Rio de janeiro'
];

export interface HomePageProps {
  readonly history: History,
  readonly routerAction?: RouterActionType,
  readonly items: WeatherListState,
  readonly item: WeatherData,
  readonly forecast: ForecastState,
}

export interface HomeDispatchPops {
  readonly fetchInitialData: () => void,
  readonly search: (city: string) => void,
  readonly fetchForecast: (city: string) => void,
}

interface HomePageOwn {}

export type HomePageState = HomePageProps & HomeDispatchPops & HomePageOwn;
