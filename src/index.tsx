import {fetchAuthorizationStatus} from './store/api-actions/api-actions-user';
import {fetchOffers} from './store/api-actions/api-actions-offers';
import {Provider} from 'react-redux';
import {store} from './store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchAuthorizationStatus());
store.dispatch(fetchOffers());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <ToastContainer / >
    </Provider>
  </React.StrictMode>
);
