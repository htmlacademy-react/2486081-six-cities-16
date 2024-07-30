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
