import {createReducer} from '@reduxjs/toolkit';
import {offersMocks} from '../mocks/offers-mocks';
import {currentCity} from './action';
import { getFavoriteOffers } from '../utils';

const favoriteOffers = getFavoriteOffers(offersMocks);

const initialState = {
  city: 'Paris',
  offers: offersMocks,
  favoriteOffers: favoriteOffers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      const {nameCity} = action.payload;
      state.city = nameCity;
    });
});
