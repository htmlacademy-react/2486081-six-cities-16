import {createReducer} from '@reduxjs/toolkit';
import {offersMocks} from '../mocks/offers-mocks';
import {getFavoriteOffers, getOffersByCity} from '../utils';
import {currentCity} from './action';

const initialData = getOffersByCity(offersMocks);
const favoritesOffers = getFavoriteOffers(offersMocks);
const favoritesOffersByCity = getOffersByCity(favoritesOffers);
const countFavorites = favoritesOffers.length;

const initialState = {
  favoritesData: favoritesOffersByCity,
  quantityFavoritesOffers: countFavorites,
  city: 'Paris',
  initialData: initialData['Paris']
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      const {nameCity} = action.payload;
      state.city = nameCity;
      state.initialData = initialData[nameCity];
    });
});
