import {fetchAuthorizationStatus} from './store/api-actions/api-actions-user';
import {fetchFavorite} from './store/api-actions/api-actions-favorite';
import {fetchOffers} from './store/api-actions/api-actions-offers';
import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

store.dispatch(fetchAuthorizationStatus());
store.dispatch(fetchOffers());
store.dispatch(fetchFavorite());

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
