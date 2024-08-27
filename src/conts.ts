export const messageForPassword = 'Пароль должен состоять из латинских букв и цифр и символов пример "1q"';

export const RATINGS_TITLES = [
  {title:'perfect', id: '5-stars', value: '5', key: '1-id'},
  {title:'good', id: '4-stars', value: '4', key: '2-id'},
  {title:'not bad', id: '3-stars', value: '3', key: '3-id'},
  {title:'badly', id: '2-stars', value: '2', key: '4-id'},
  {title:'terribly', id: '1-stars', value: '1', key: '5-id'}
];

export const TYPES_SORT = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL = 'https://16.design.htmlacademy.pro/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const BUTTON_CLASS = 'default';

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

export enum SortingType {
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

