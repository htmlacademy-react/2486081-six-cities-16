import {AuthorizationStatus} from '../conts';
import {createAction} from '@reduxjs/toolkit';
import {UserData} from '../types/auth-data';
import {CurrentOffer,Offers} from '../types/offers-types';
import { Comments } from '../types/comments-types';

export const currentCity = createAction<string>('currentCity');

export const uploadAnOffers = createAction<Offers>('offers');

export const uploadAnUserData = createAction<UserData>('user');

export const requireAuthorization = createAction<AuthorizationStatus>('login');

export const setError = createAction<string | null>('error');

export const isloadOffers = createAction<boolean>('isLoad');

export const uploadAnOffer = createAction<CurrentOffer | null>('offer');

export const uploadAnComments = createAction<Comments>('comments');

export const uploadAnOtherPlaces = createAction<Offers>('other-places');

export const currentSort = createAction<string>('currentSort');
