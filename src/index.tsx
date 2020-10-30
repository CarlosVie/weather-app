import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { App } from './containers/App';
import HeaderBar from './containers/components/Header';
import history from './utils/history';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './utils/configureStore';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <body className={'appBody'}>
        <App />
        </body>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
