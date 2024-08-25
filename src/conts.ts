export const RATINGS_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const TYPES_SORT = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL = 'https://16.design.htmlacademy.pro/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 2000;

export const typeButton = 'default';

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

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Comments = 'COMMENTS',
  Favorite = 'FAVORITE',
  Data = 'DATA'
}

export enum CommentStatus {
  Loading = 'loading',
  Loaded = 'loaded',
  FailToLoad = 'FailToLoad',
}
export enum SortType {
  Popular = 'popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
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

