import { RouterState } from 'connected-react-router';
import { Reducer, Store } from 'redux';
import { WeatherState } from '../containers/pages/HomePage/redux/types';

/**
 * Store of all App, auto-inject reducers and saga.
 */
export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  
  runSaga(
    saga: (() => IterableIterator<any>) | undefined,
    args: any | undefined,
  ): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

/**
 * Main state interface. -> Add all reducers states here
 */
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly weatherState: WeatherState;
  readonly test: any;
}
