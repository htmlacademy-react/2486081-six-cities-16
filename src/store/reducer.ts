import {currentCity, currentSort, isloadOffers, requireAuthorization, setError, uploadAnComments, uploadAnOffer, uploadAnOffers, uploadAnOtherPlaces, uploadAnUserData} from './action';
import {createReducer} from '@reduxjs/toolkit';
import {CurrentOffer, Offers} from '../types/offers-types';
import {AuthorizationStatus} from '../conts';
import {UserData} from '../types/auth-data';
import {Comments} from '../types/comments-types';

type InitalState = {
  city: string;
  sort: string;
  offers: Offers;
  user: UserData ;
  currentOffers: CurrentOffer | null;
  comments: Comments;
  otherPlaces: Offers;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  error: string | null;
}

const initialState: InitalState = {
  city: 'Paris',
  sort: 'Popular',
  offers: [],
  user: [],
  currentOffers: null,
  comments: [],
  otherPlaces: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(currentCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(currentSort, (state, action) => {
      state.sort = action.payload;
    })


    .addCase(uploadAnOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(uploadAnUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(uploadAnOffer, (state, action) => {
      state.currentOffers = action.payload;
    })
    .addCase(uploadAnComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(uploadAnOtherPlaces, (state, action) => {
      state.otherPlaces = action.payload;
    })


    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(isloadOffers, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
