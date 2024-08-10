import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offersMocks} from './mocks/offers-mocks';
import {CommentsMocks} from './mocks/comments-mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers = {offersMocks}
      comments = {CommentsMocks}
    />
  </React.StrictMode>
);
