import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { ContainerState as LanguageProviderState } from '../containers/LanguageProvider/types';
import { ContainerState as AppState } from '../containers/App/types';
import { ContainerState as HomeState } from '../containers/OldPage/types';

/**
 * Store of all App, auto-injec reducers and saga.
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
 * Main state interface.
 */
export interface ApplicationRootState {
    readonly router: RouterState;
    readonly global: AppState;
    readonly language: LanguageProviderState;
    readonly home: HomeState;
    // for testing purposes
    readonly test: any;
}
