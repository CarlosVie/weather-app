import produce from 'immer';
import { Reducer } from 'redux';
import { LoadingState } from '../../../../utils/constants';
import { WeatherActionsType } from './constants';
import { WeatherActions, WeatherState } from './types';

export const WeatherInitialState: WeatherState = {
  list: {
    items: [],
    error: {},
    loading: LoadingState.STATE_READY
  },
  search: {
    item: undefined,
    error: {},
    loading: LoadingState.STATE_READY
  },
  forecastState: {
    loading: LoadingState.STATE_LOADING,
    error: {},
    item: {
      location: {
        name: '',
        region: '',
        country: ''
      },
      current: {
        temp_c: 0, // celsius
        condition: {
          text: '',
          icon: '',
          code: '',
        },
        wind_mph: 0 // mph
      },
      forecast: {
        forecastday: []
      }
    }
  }
};

const HomePageReducer: Reducer<WeatherState, WeatherActions> = (
  state: WeatherState = WeatherInitialState,
  action: WeatherActions) => {
  
  return produce(state, weatherDraft => {
    switch(action.type) {
      case WeatherActionsType.INITIAL_FETCH:
        weatherDraft.list.loading = LoadingState.STATE_LOADING;
        break;
      case WeatherActionsType.FETCH_SUCCESS:
        weatherDraft.list.loading = LoadingState.STATE_READY;
        weatherDraft.list.items = action.payload;
        break;
      case WeatherActionsType.FETCH_ERROR:
        weatherDraft.list.loading = LoadingState.STATE_ERROR;
        weatherDraft.list.error = action.payload;
        weatherDraft.list.items = [];
        break;
      case WeatherActionsType.SEARCH_CITY_SUCCESS:
        weatherDraft.search.item = action.payload;
        weatherDraft.search.loading = LoadingState.STATE_READY;
        break;
      case WeatherActionsType.SEARCH_CITY_FAILED:
        weatherDraft.search.loading = LoadingState.STATE_ERROR;
        weatherDraft.search.error = action.payload;
        break;
      case WeatherActionsType.FETCH_FORECAST_SUCCESS:
        weatherDraft.forecastState.item = action.payload;
        weatherDraft.forecastState.loading = LoadingState.STATE_READY;
        break;
      case WeatherActionsType.FETCH_FORECAST_FAILED:
        weatherDraft.forecastState.loading = LoadingState.STATE_ERROR;
        weatherDraft.forecastState.error = action.payload;
        break;
      default:
        break;
    }
  });
};

export default HomePageReducer;
