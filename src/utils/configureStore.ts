/**
 * Create the store with dynamic reducers
 */
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { ApplicationRootState, InjectedStore } from './types';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducer from './reducers';

export default function configureStore(initialState: ApplicationRootState | {} = {}, history: History) {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    
    let enhancer = applyMiddleware(...middlewares);
    
    // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        // @ts-ignore
        enhancer = composeWithDevTools(enhancer);
    }
    
    // code to support for Redux Saga
    /* if (window.__SAGA_MONITOR_EXTENSION__)
     reduxSagaMonitorOptions = {
     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
     };*/
    
    
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    
    const store = createStore(
        createReducer(),
        initialState,
        enhancer,
    ) as InjectedStore;
    
    // Extensions
    // @ts-ignore
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry
    
    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    // @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }
    
    return store;
}

