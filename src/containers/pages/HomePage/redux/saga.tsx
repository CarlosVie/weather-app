import { call, put, takeLatest } from 'redux-saga/effects';
import { APPID, FORECASTE_APPI, PNG } from '../../../../utils/http/constants';
import request from '../../../../utils/http/request';
import { BASE_URL, FORECASTE_URL, ICON_URL } from '../../../../utils/http/urls';
import { cities } from '../components/type';
import {
  actionFetchForecastFailed,
  actionFetchForecastSuccess,
  actionFetchInitialCitiesFailed,
  actionFetchInitialCitiesSuccess,
  actionSearchCityFailed,
  actionSearchCitySuccess
} from './actions';
import { WeatherActionsType } from './constants';
import { FetchForecaste, FetchInitialCities, Forecast, SearchCity, WeatherData } from './types';

export function* fetchCity(city: string) {
  try {
    const URL = BASE_URL + '?q=' + city + '&appid=' + APPID;
    const response: WeatherData = yield call(request, URL);
    response.icon = ICON_URL + response.weather[0].icon + PNG;
    return response;
  } catch(err) {
    console.log('error');
  }
}

export function* searchCity(action: SearchCity) {
  const response = yield call(fetchCity, action.payload)
  if (response) {
    yield put(actionSearchCitySuccess(response))
  } else {
    put(actionSearchCityFailed('City Not Found'));
  }
}

export function* initialBatchProcessor(action: FetchInitialCities) {
  let weather: WeatherData[] = []
  for (let index = 0; index < cities.length; index++) {
    let city = cities[index];
    const response: WeatherData = yield call(fetchCity, city);
    response.name = city;
    response.id = index;
    weather = [...weather, response];
  }
  if (weather.length > 0) {
    yield put(actionFetchInitialCitiesSuccess(weather));
  } else {
    yield put(actionFetchInitialCitiesFailed('Failed fetch initial data'))
  }
}

function* fetchForecast(action: FetchForecaste) {
  try {
    const URL = FORECASTE_URL + '?key=' + FORECASTE_APPI + '&q=' + action.payload + '&days=7';
    const response: Forecast = yield call(request, URL);
    yield put(actionFetchForecastSuccess(response));
  } catch(err) {
    console.log('error');
    yield put(actionFetchForecastFailed('City not found'))
  }
}

export default function* homePageSaga() {
  yield takeLatest(WeatherActionsType.INITIAL_FETCH, initialBatchProcessor);
  yield takeLatest(WeatherActionsType.SEARCH_CITY, searchCity);
  yield takeLatest(WeatherActionsType.FETCH_FORECAST, fetchForecast);
}
