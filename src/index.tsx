import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './conts';
import {offersMocks} from './mocks/offers-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      rentalOffers = {Setting.RentalOffers}
      offers = {offersMocks}
    />
  </React.StrictMode>
);
