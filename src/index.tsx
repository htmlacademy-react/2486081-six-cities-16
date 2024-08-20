import {getAuthorizationStatus, getOffers} from './store/api-actions';
import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

store.dispatch(getAuthorizationStatus());
store.dispatch(getOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
