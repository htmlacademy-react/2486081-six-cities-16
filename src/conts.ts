export const Setting = {
  RentalOffers: Math.floor(Math.random() * 10)
};

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ClassTypeOffersList = {
  MAIN: 'cities__places-list places__list tabs__content',
  FAVORITE: 'favorites__places',
  OFFER: 'near-places__list places__list'
};

export const ClassTypeOffers = {
  MAIN: 'cities',
  FAVORITE: 'favorites',
  OFFER: 'near-places'
};

export const ClassTypeHeader = {
  MAIN: 'header__logo-link--active',
  LOGIN: 'login',
  OTHERS: ''
};

export const RATINGS_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
